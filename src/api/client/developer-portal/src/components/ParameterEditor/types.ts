import { ParameterType } from "../../types";

interface ParameterStats {
  total: number;
  verified: number;
  undefined: number;
  byCategory: Record<string, number>;
  bySubCategory: Record<string, Record<string, number>>;
  byType: Record<ParameterType, number>;
}

interface DropdownOption {
  value: string;
  label: string;
  order: number;
} 

export type { ParameterStats, DropdownOption };