import { Request, Response } from "express";
import { makeGetRulesUseCase } from "../../../infra/factories/rules/get-rules";

export async function getRulesController(_: Request, res: Response) {
  const getRulesUseCase = makeGetRulesUseCase();

  const rules = await getRulesUseCase.execute();

  return res.status(200).json({ rules });
}
