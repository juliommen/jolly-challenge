import { RuleDTO } from "../../../domain/dtos/RuleDTO";
import { RuleRepository } from "../../../providers/database/RulesRepository";

export class CreateRuleUseCase {
  constructor(private ruleRepository: RuleRepository) {}

  async execute(rule: RuleDTO) {
    await this.ruleRepository.createRule(rule);
  }
}
