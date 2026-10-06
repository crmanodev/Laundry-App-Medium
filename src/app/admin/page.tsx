import type { BadgeVariant } from "@/components/ui/Badge";
import { StatCard } from "@/components/admin/StatCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/components/ui/Table";
import { getCustomers } from "@/lib/repositories/customers";
import { getTotalExpenses } from "@/lib/repositories/expenses";
import { getOrders, getRecentOrders } from "@/lib/repositories/orders";
import { getLowStockProducts } from "@/lib/repositories/products";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatCurrency, formatDate } from "@/lib/utils/format";
import type { OrderStatus } from "@/types/order";

export const metadata = buildMetadata({
  title: "Admin",
  path: "/admin",
  noIndex: true,
});

const statusVariants: Record<OrderStatus, BadgeVariant> = {
  pending: "warning",
  processing: "info",
  washing: "info",
  ready: "success",
  delivered: "neutral",
  cancelled: "danger",
};

export default function AdminDashboardPage() {
  const orders = getOrders();
  const customers = getCustomers();
  const expenses = getTotalExpenses();
  const lowStock = getLowStockProducts();
  const recentOrders = getRecentOrders(5);

  const activeOrders = orders.filter(
    (order) => order.status !== "delivered" && order.status !== "cancelled",
  ).length;

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="A quick overview of your business."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Active orders"
          value={String(activeOrders)}
          hint={`${orders.length} orders all time`}
        />
        <StatCard label="Customers" value={String(customers.length)} />
        <StatCard
          label="Expenses (all time)"
          value={formatCurrency(expenses)}
        />
        <StatCard
          label="Low stock items"
          value={String(lowStock.length)}
          hint="At or below reorder level"
        />
      </div>

      <div className="mt-8">
        <h2 className="mb-3 text-sm font-semibold text-zinc-900">
          Recent orders
        </h2>
        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
          <Table>
            <TableHead>
              <tr>
                <TableHeadCell>Order</TableHeadCell>
                <TableHeadCell>Customer</TableHeadCell>
                <TableHeadCell>Total</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
                <TableHeadCell>Placed</TableHeadCell>
              </tr>
            </TableHead>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium text-zinc-900">
                    {order.orderNumber}
                  </TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{formatCurrency(order.total)}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariants[order.status]}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(order.placedAt)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
