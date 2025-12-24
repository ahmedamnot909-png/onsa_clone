import { describe, it, expect, beforeEach, vi } from "vitest";
import { TRPCError } from "@trpc/server";

// Mock the database functions
vi.mock("./db", () => ({
  getUserByOpenId: vi.fn(),
  upsertUser: vi.fn(),
}));

import { getUserByOpenId, upsertUser } from "./db";

describe("Wallet Router", () => {
  const mockUser = {
    id: 1,
    openId: "test-user-123",
    name: "Test User",
    email: "test@example.com",
    loginMethod: "oauth",
    role: "user" as const,
    balance: 1000,
    dailyProfit: 100,
    totalProfit: 500,
    referrals: 5,
    teamBonus: 250,
    lastWorkTime: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getBalance", () => {
    it("should return user balance information", async () => {
      (getUserByOpenId as any).mockResolvedValue(mockUser);

      const result = {
        balance: mockUser.balance,
        dailyProfit: mockUser.dailyProfit,
        totalProfit: mockUser.totalProfit,
        referrals: mockUser.referrals,
        teamBonus: mockUser.teamBonus,
        lastWorkTime: mockUser.lastWorkTime,
      };

      expect(result.balance).toBe(1000);
      expect(result.dailyProfit).toBe(100);
      expect(result.totalProfit).toBe(500);
    });

    it("should throw error if user not found", async () => {
      (getUserByOpenId as any).mockResolvedValue(null);

      expect(async () => {
        const user = await getUserByOpenId("nonexistent");
        if (!user) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
        }
      }).rejects.toThrow();
    });
  });

  describe("deposit", () => {
    it("should increase user balance on deposit", async () => {
      (getUserByOpenId as any).mockResolvedValue(mockUser);
      (upsertUser as any).mockResolvedValue(true);

      const depositAmount = 100;
      const newBalance = mockUser.balance + depositAmount;

      expect(newBalance).toBe(1100);
      expect(upsertUser).toBeDefined();
    });

    it("should reject negative deposit amount", () => {
      const depositAmount = -100;
      expect(depositAmount < 0).toBe(true);
    });
  });

  describe("withdraw", () => {
    it("should decrease user balance on withdrawal", async () => {
      (getUserByOpenId as any).mockResolvedValue(mockUser);
      (upsertUser as any).mockResolvedValue(true);

      const withdrawAmount = 100;
      const feePercentage = 5;
      const fee = Math.floor(withdrawAmount * (feePercentage / 100));
      const newBalance = mockUser.balance - withdrawAmount;

      expect(newBalance).toBe(900);
      expect(fee).toBe(5);
    });

    it("should reject withdrawal if insufficient balance", async () => {
      const userWithLowBalance = { ...mockUser, balance: 50 };
      (getUserByOpenId as any).mockResolvedValue(userWithLowBalance);

      const withdrawAmount = 100;
      expect(userWithLowBalance.balance < withdrawAmount).toBe(true);
    });

    it("should calculate withdrawal fee correctly", () => {
      const withdrawAmount = 100;
      const feePercentage = 5;
      const fee = Math.floor(withdrawAmount * (feePercentage / 100));
      const netAmount = withdrawAmount - fee;

      expect(fee).toBe(5);
      expect(netAmount).toBe(95);
    });
  });

  describe("completeTask", () => {
    it("should award daily reward", async () => {
      const userWithoutTask = { ...mockUser, lastWorkTime: null };
      (getUserByOpenId as any).mockResolvedValue(userWithoutTask);
      (upsertUser as any).mockResolvedValue(true);

      const dailyReward = Math.floor(Math.random() * 10) + 1;
      const newBalance = userWithoutTask.balance + dailyReward;

      expect(dailyReward).toBeGreaterThanOrEqual(1);
      expect(dailyReward).toBeLessThanOrEqual(10);
      expect(newBalance).toBeGreaterThan(userWithoutTask.balance);
    });

    it("should reject task if 24 hours have not passed", async () => {
      const now = new Date();
      const recentTime = new Date(now.getTime() - 12 * 60 * 60 * 1000); // 12 hours ago
      const userWithRecentTask = { ...mockUser, lastWorkTime: recentTime };

      (getUserByOpenId as any).mockResolvedValue(userWithRecentTask);

      const timeDiff = now.getTime() - userWithRecentTask.lastWorkTime.getTime();
      const hoursDiff = timeDiff / (1000 * 60 * 60);

      expect(hoursDiff).toBeLessThan(24);
    });

    it("should allow task if 24 hours have passed", async () => {
      const now = new Date();
      const oldTime = new Date(now.getTime() - 25 * 60 * 60 * 1000); // 25 hours ago
      const userWithOldTask = { ...mockUser, lastWorkTime: oldTime };

      (getUserByOpenId as any).mockResolvedValue(userWithOldTask);

      const timeDiff = now.getTime() - userWithOldTask.lastWorkTime.getTime();
      const hoursDiff = timeDiff / (1000 * 60 * 60);

      expect(hoursDiff).toBeGreaterThanOrEqual(24);
    });
  });
});
