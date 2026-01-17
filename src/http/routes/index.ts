import { Router } from "express";
import { employeeRoutes } from "./employee.routes";
import { rewardRoutes } from "./reward.routes";
import { ruleRoutes } from "./rule.routes";

const router = Router();

router.use("/reward", rewardRoutes);
router.use("/employee", employeeRoutes);
router.use("/rule", ruleRoutes);

export { router };
