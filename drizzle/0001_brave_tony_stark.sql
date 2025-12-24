ALTER TABLE `users` ADD `balance` int DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `dailyProfit` int DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `totalProfit` int DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `referrals` int DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `teamBonus` int DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `lastWorkTime` timestamp;