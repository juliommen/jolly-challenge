import { Request, Response } from "express";
import { makeGiveRewardsUseCase } from "../../../infra/factories/rewards/give-rewards";
import { RewardEventDTO } from "../../../domain/dtos/RewardEventDTO";

export async function giveRewardsController(req: Request, res: Response) {
  const rewardEvents = req.body as RewardEventDTO[];

  const giveRewardsUseCase = makeGiveRewardsUseCase();

  await giveRewardsUseCase.execute(rewardEvents);

  res.status(201).json({ message: "success" });
}
