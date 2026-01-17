import { RewardEventDTO } from "../../../domain/dtos/RewardEventDTO";
import { RuleDTO } from "../../../domain/dtos/RuleDTO";
import { EmployeeRepository } from "../../../providers/database/EmployeeRepository";
import { RewardsRepository } from "../../../providers/database/RewardsRepository";
import { RuleRepository } from "../../../providers/database/RulesRepository";
import { validators } from "./utils/validators";

export class GiveRewardsUseCase {
  constructor(
    private rewardsRepository: RewardsRepository,
    private employeeRepository: EmployeeRepository,
    private ruleRepository: RuleRepository,
  ) {}

  async execute(events: RewardEventDTO[]) {
    const rules = await this.ruleRepository.getRules();

    const rulesMap = new Map<string, RuleDTO>();
    rules.forEach((rule) => rulesMap.set(rule.eventType, rule));

    for (const event of events) {
      if (await this.rewardsRepository.findById(event.id)) {
        continue;
      }

      const ruleToEvaluete = rulesMap.get(event.type);

      if (ruleToEvaluete) {
        if (this.evaluateRule(ruleToEvaluete, event)) {
          await this.employeeRepository.updateBalance(
            event.employeeId,
            ruleToEvaluete.points,
          );

          await this.rewardsRepository.addReward({
            employeeId: event.employeeId,
            id: event.id,
            timestamp: event.timestamp,
            type: event.type,
          });
        }
      }
    }
  }

  evaluateRule(rule: RuleDTO, event: RewardEventDTO): boolean {
    const { field, operator, valueToCompare } = rule.condition;

    const fieldValue = this.getEventFieldValue(event, field);

    let finalValueToCompare;

    if (
      typeof valueToCompare === "string" &&
      valueToCompare.includes("metadata")
    ) {
      finalValueToCompare = this.getEventFieldValue(event, valueToCompare);
    } else {
      finalValueToCompare = valueToCompare;
    }

    const validator = validators[operator];

    return validator(fieldValue, finalValueToCompare);
  }

  getEventFieldValue(obj: any, path: string): any {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  }
}
