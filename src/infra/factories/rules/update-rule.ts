import { RuleRepository } from "../../../providers/database/RulesRepository";
import { UpdateRuleUseCase } from "../../../app/use-cases/rules/UpdateRuleUseCase";

export function makeUpdateRuleUseCase() {
  const ruleRepo = RuleRepository.getInstance();
  const updateRuleUseCase = new UpdateRuleUseCase(ruleRepo);

  return updateRuleUseCase;
}
