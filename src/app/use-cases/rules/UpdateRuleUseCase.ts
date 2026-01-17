import { RuleDTO } from "../../../domain/dtos/RuleDTO";
import { RuleRepository } from "../../../providers/database/RulesRepository";

export class UpdateRuleUseCase {
  constructor(private ruleRepository: RuleRepository) {}

  async execute(id: string, rule: RuleDTO) {
    await this.ruleRepository.updateRule(id, rule);
  }
}
