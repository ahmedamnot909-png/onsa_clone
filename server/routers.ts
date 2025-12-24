import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { getUserByOpenId, upsertUser } from "./db";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  wallet: router({
    getBalance: protectedProcedure.query(async ({ ctx }) => {
      const user = await getUserByOpenId(ctx.user.openId);
      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }
      return {
        balance: user.balance,
        dailyProfit: user.dailyProfit,
        totalProfit: user.totalProfit,
        referrals: user.referrals,
        teamBonus: user.teamBonus,
        lastWorkTime: user.lastWorkTime,
      };
    }),

    deposit: protectedProcedure
      .input(z.object({
        amount: z.number().positive(),
        currency: z.enum(["USDT", "TRX"]),
        walletAddress: z.string().min(1),
      }))
      .mutation(async ({ ctx, input }) => {
        const user = await getUserByOpenId(ctx.user.openId);
        if (!user) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
        }

        const newBalance = user.balance + Math.floor(input.amount);
        await upsertUser({
          openId: ctx.user.openId,
          balance: newBalance,
        });

        return {
          success: true,
          newBalance,
          message: `Deposit of ${input.amount} ${input.currency} received`,
        };
      }),

    withdraw: protectedProcedure
      .input(z.object({
        amount: z.number().positive(),
        currency: z.enum(["USDT", "TRX"]),
        walletAddress: z.string().min(1),
        securityPassword: z.string().min(1),
      }))
      .mutation(async ({ ctx, input }) => {
        const user = await getUserByOpenId(ctx.user.openId);
        if (!user) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
        }

        if (user.balance < input.amount) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Insufficient balance",
          });
        }

        const feePercentage = 5;
        const fee = Math.floor(input.amount * (feePercentage / 100));
        const netAmount = input.amount - fee;
        const newBalance = user.balance - input.amount;

        await upsertUser({
          openId: ctx.user.openId,
          balance: newBalance,
        });

        return {
          success: true,
          newBalance,
          withdrawAmount: input.amount,
          fee,
          netAmount,
          message: `Withdrawal of ${netAmount} ${input.currency} processed`,
        };
      }),

    completeTask: protectedProcedure.mutation(async ({ ctx }) => {
      const user = await getUserByOpenId(ctx.user.openId);
      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      const now = new Date();
      if (user.lastWorkTime) {
        const timeDiff = now.getTime() - user.lastWorkTime.getTime();
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        if (hoursDiff < 24) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Please wait ${Math.ceil(24 - hoursDiff)} hours before completing another task`,
          });
        }
      }

      const dailyReward = Math.floor(Math.random() * 10) + 1;
      const newBalance = user.balance + dailyReward;
      const newTotalProfit = user.totalProfit + dailyReward;

      await upsertUser({
        openId: ctx.user.openId,
        balance: newBalance,
        totalProfit: newTotalProfit,
        lastWorkTime: now,
      });

      return {
        success: true,
        reward: dailyReward,
        newBalance,
        message: `Daily task completed! You earned $${dailyReward}`,
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;
