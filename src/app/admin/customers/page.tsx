import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable, type DataTableColumn } from "@/components/ui/DataTable";
import { getCustomers } from "@/lib/repositories/customers";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatCurrency, formatDate } from "@/lib/utils/format";
import type { Customer } from "@/types/customer";

export const metadata = buildMetadata({
  title: "Customers",
  path: "/admin/customers",
  noIndex: true,
});

const columns: DataTableColumn<Customer>[] = [
  {
    key: "name",
    header: "Name",
    render: (customer) => (
      <span className="font-medium text-zinc-900">{customer.name}</span>
    ),
  },
  { key: "email", header: "Email" },
  { key: "phone", header: "Phone" },
  { key: "ordersCount", header: "Orders" },
  {
    key: "totalSpent",
    header: "Total spent",
    render: (customer) => formatCurrency(customer.totalSpent),
  },
  {
    key: "createdAt",
    header: "Joined",
    render: (customer) => formatDate(customer.createdAt),
  },
];

export default function AdminCustomersPage() {
  const customers = getCustomers();

  return (
    <div>
      <PageHeader
        title="Customers"
        description={`${customers.length} registered customers.`}
      />
      <DataTable
        columns={columns}
        rows={customers}
        rowKey={(customer) => customer.id}
        emptyMessage="No customers yet."
      />
    </div>
  );
}
