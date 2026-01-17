import { Request, Response } from "express";
import { makeGetEmployeesUseCase } from "../../../infra/factories/employees/get-employees";

export async function getEmployeesController(_: Request, res: Response) {
  const getEmployeesUseCase = makeGetEmployeesUseCase();

  const employees = await getEmployeesUseCase.execute();

  return res.status(200).json({ employees });
}
