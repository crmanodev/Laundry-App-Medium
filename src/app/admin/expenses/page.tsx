import { PageHeader } from "@/components/shared/PageHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/components/ui/Table";
import { getExpenses, getTotalExpenses } from "@/lib/repositories/expenses";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatCurrency, formatDate } from "@/lib/utils/format";

export const metadata = buildMetadata({
  title: "Expenses",
  path: "/admin/expenses",
  noIndex: true,
});

export default function AdminExpensesPage() {
  const expenses = getExpenses();
  const total = getTotalExpenses();

  return (
    <div>
      <PageHeader
        title="Expenses"
        description={`${expenses.length} records — ${formatCurrency(total)} total.`}
      />
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <Table>
          <TableHead>
            <tr>
              <TableHeadCell>Date</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Description</TableHeadCell>
              <TableHeadCell>Payment</TableHeadCell>
              <TableHeadCell className="text-right">Amount</TableHeadCell>
            </tr>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>{formatDate(expense.date)}</TableCell>
                <TableCell className="capitalize">{expense.category}</TableCell>
                <TableCell className="font-medium text-zinc-900">
                  {expense.description}
                </TableCell>
                <TableCell className="capitalize">
                  {expense.paymentMethod.replace("-", " ")}
                </TableCell>
                <TableCell className="text-right font-medium text-zinc-900">
                  {formatCurrency(expense.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
