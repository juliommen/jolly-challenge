import { Router } from "express";
import { getEmployeesController } from "../controllers/employees/get-employees";

export const employeeRoutes = Router();

employeeRoutes.get("/many", getEmployeesController);
