import { Request, Response } from "express";
import { makeUpdateRuleUseCase } from "../../../infra/factories/rules/update-rule";
import { RuleDTO } from "../../../domain/dtos/RuleDTO";

export async function updateRuleController(req: Request, res: Response) {
  const { id } = req.params;
  const rule = req.body as RuleDTO;

  const updateRuleUseCase = makeUpdateRuleUseCase();

  await updateRuleUseCase.execute(id as string, rule);

  return res.status(201).json({ message: "success" });
}
