import { RuleRepository } from "../../../providers/database/RulesRepository";

export class GetRulesUseCase {
  constructor(private ruleRepository: RuleRepository) {}

  async execute() {
    return await this.ruleRepository.getRules();
  }
}
