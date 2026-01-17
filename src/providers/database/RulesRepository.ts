import { RuleDTO } from "../../domain/dtos/RuleDTO";

export class RuleRepository {
  private rules: RuleDTO[];

  private constructor() {
    this.rules = [
      {
        id: "1",
        name: "clock_in_on_time",
        condition: {
          field: "metadata.clockInTime",
          valueToCompare: "metadata.scheduledStartTime",
          operator: "<=",
        },
        points: 100,
        eventType: "clock_in",
      },
      {
        id: "2",
        name: "correct_clock_in_method",
        condition: {
          field: "metadata.correctClockInMethod",
          valueToCompare: true,
          operator: "==",
        },
        points: 200,
        eventType: "clock_in_method",
      },
      {
        id: "3",
        name: "clock_in_note_added",
        condition: {
          field: "metadata.clockInNote",
          operator: "EXISTS",
        },
        points: 300,
        eventType: "note_added",
      },
    ];
  }

  static getInstance(): RuleRepository {
    if (!singletonInstance) {
      singletonInstance = new RuleRepository();
    }
    return singletonInstance;
  }

  async getRules() {
    return this.rules;
  }

  async createRule(rule: RuleDTO) {
    rule.id = (this.rules.length + 1).toString();
    this.rules.push(rule);
  }

  async updateRule(id: string, updatedRule: RuleDTO) {
    const index = this.rules.findIndex((rule) => rule.id === id);

    if (index === -1) return;

    this.rules[index] = {
      ...this.rules[index],
      ...updatedRule,
    };
  }
}

let singletonInstance: RuleRepository | null = null;
