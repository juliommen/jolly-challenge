import { CreateRuleUseCase } from "../../../app/use-cases/rules/CreateRuleUseCase";
import { RuleRepository } from "../../../providers/database/RulesRepository";

export function makeCreateRuleUseCase() {
  const ruleRepo = RuleRepository.getInstance();

  const createRuleUseCase = new CreateRuleUseCase(ruleRepo);

  return createRuleUseCase;
}
