import { Router } from "express";
import { giveRewardsController } from "../controllers/rewards/give-rewards";

export const rewardRoutes = Router();

rewardRoutes.post("/many", giveRewardsController);
