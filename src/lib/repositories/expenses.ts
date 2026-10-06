import expensesData from "@/data/expenses.json";
import type { Expense } from "@/types/expense";

const expenses = expensesData as Expense[];

export function getExpenses(): Expense[] {
  return expenses;
}

export function getTotalExpenses(): number {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}
