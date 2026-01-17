export type Operator = "EXISTS" | "<" | "<=" | ">" | ">=" | "==" | "!=";

export type RuleDTO = {
  id: string;
  name: string;
  eventType: string;
  points: number;
  condition: {
    field: string;
    operator: Operator;
    valueToCompare?: string | number | boolean;
  };
};
