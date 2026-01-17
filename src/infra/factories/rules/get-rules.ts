import { GetRulesUseCase } from "../../../app/use-cases/rules/GetRulesUseCase";
import { RuleRepository } from "../../../providers/database/RulesRepository";

export function makeGetRulesUseCase() {
  const ruleRepository = RuleRepository.getInstance();

  const getRulesUseCase = new GetRulesUseCase(ruleRepository);

  return getRulesUseCase;
}
