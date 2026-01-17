import { Router } from "express";
import { getRulesController } from "../controllers/rules/get-rules";
import { createRuleController } from "../controllers/rules/create-rule";
import { updateRuleController } from "../controllers/rules/update-rule";

export const ruleRoutes = Router();

ruleRoutes.get("/many", getRulesController);

ruleRoutes.post("/", createRuleController);

ruleRoutes.patch("/:id", updateRuleController);
