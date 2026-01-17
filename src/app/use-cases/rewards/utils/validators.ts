import { Operator } from "../../../../domain/dtos/RuleDTO";

export const validators: Record<Operator, (a: any, b: any) => boolean> = {
  EXISTS: (a) => !!a,
  "<": (a, b) => a < b,
  "<=": (a, b) => a <= b,
  ">": (a, b) => a > b,
  ">=": (a, b) => a >= b,
  "==": (a, b) => a === b,
  "!=": (a, b) => a !== b,
};
