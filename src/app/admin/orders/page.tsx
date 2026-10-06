import type { BadgeVariant } from "@/components/ui/Badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { DataTable, type DataTableColumn } from "@/components/ui/DataTable";
import { getOrders } from "@/lib/repositories/orders";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatCurrency, formatDate } from "@/lib/utils/format";
import type { Order, OrderStatus } from "@/types/order";

export const metadata = buildMetadata({
  title: "Orders",
  path: "/admin/orders",
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

const columns: DataTableColumn<Order>[] = [
  {
    key: "orderNumber",
    header: "Order",
    render: (order) => (
      <span className="font-medium text-zinc-900">{order.orderNumber}</span>
    ),
  },
  { key: "customerName", header: "Customer" },
  {
    key: "items",
    header: "Items",
    render: (order) => `${order.items.length}`,
  },
  {
    key: "total",
    header: "Total",
    render: (order) => formatCurrency(order.total),
  },
  {
    key: "status",
    header: "Status",
    render: (order) => (
      <Badge variant={statusVariants[order.status]}>{order.status}</Badge>
    ),
  },
  {
    key: "placedAt",
    header: "Placed",
    render: (order) => formatDate(order.placedAt),
  },
];

export default function AdminOrdersPage() {
  const orders = getOrders();

  return (
    <div>
      <PageHeader
        title="Orders"
        description={`${orders.length} orders in total.`}
      />
      <DataTable
        columns={columns}
        rows={orders}
        rowKey={(order) => order.id}
        emptyMessage="No orders yet."
      />
    </div>
  );
}
