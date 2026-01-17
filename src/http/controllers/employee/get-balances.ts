import { Request, Response } from "express";
import { makeGetEmployeesUseCase } from "../../../infra/factories/employees/get-employees";

export async function getBalancesController(_: Request, res: Response) {
  const getBalancesUseCase = makeGetEmployeesUseCase();

  const balances = await getBalancesUseCase.execute();

  return res.status(200).json({ balances });
}
