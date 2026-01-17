import { Request, Response } from "express";
import { makeCreateRuleUseCase } from "../../../infra/factories/rules/create-rule";
import { RuleDTO } from "../../../domain/dtos/RuleDTO";

export async function createRuleController(req: Request, res: Response) {
  const rule = req.body as RuleDTO;

  const createRuleUseCase = makeCreateRuleUseCase();

  await createRuleUseCase.execute(rule);

  return res.status(201).json({ message: "success" });
}
