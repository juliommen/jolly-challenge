import { GiveRewardsUseCase } from "../../../app/use-cases/rewards/GiveRewardsUseCase";
import { EmployeeRepository } from "../../../providers/database/EmployeeRepository";
import { RewardsRepository } from "../../../providers/database/RewardsRepository";
import { RuleRepository } from "../../../providers/database/RulesRepository";

export function makeGiveRewardsUseCase() {
  const rewardsRepository = RewardsRepository.getInstance();
  const ruleRepository = RuleRepository.getInstance();
  const employeeRepository = EmployeeRepository.getInstance();

  const giveRewardsUseCase = new GiveRewardsUseCase(
    rewardsRepository,
    employeeRepository,
    ruleRepository,
  );

  return giveRewardsUseCase;
}
