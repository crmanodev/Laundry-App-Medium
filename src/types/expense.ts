export type ExpenseCategory =
  | "utilities"
  | "supplies"
  | "salaries"
  | "maintenance"
  | "rent"
  | "other";

export type PaymentMethod = "cash" | "card" | "bank-transfer";

export interface Expense {
  id: string;
  category: ExpenseCategory;
  description: string;
  /** Amount in USD. */
  amount: number;
  /** ISO 8601 date string. */
  date: string;
  paymentMethod: PaymentMethod;
}
