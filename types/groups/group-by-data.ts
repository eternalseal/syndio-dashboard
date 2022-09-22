export type LabelWithValue = {
  label: string;
  value: string;
};

export type PayEquityGap = {
  label: string;
  data: {
    minority: LabelWithValue;
    majority: LabelWithValue;
  };
};

export type Budget = {
  label: string;
  data: LabelWithValue;
};

export type EmployeeComparison = {
  label: string;
  data: LabelWithValue;
};

export type CategorizedData = {
  payEquityGap: PayEquityGap;
  budget: Budget;
  employeeComparison: EmployeeComparison;
};

export interface GroupByData {
  id: string;
  label: string;
  data: {
    gender: CategorizedData;
    race: CategorizedData;
  };
}
