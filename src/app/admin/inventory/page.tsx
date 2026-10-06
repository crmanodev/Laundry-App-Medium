import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { DataTable, type DataTableColumn } from "@/components/ui/DataTable";
import { getProducts, getLowStockProducts } from "@/lib/repositories/products";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatCurrency } from "@/lib/utils/format";
import type { Product } from "@/types/product";

export const metadata = buildMetadata({
  title: "Inventory",
  path: "/admin/inventory",
  noIndex: true,
});

const columns: DataTableColumn<Product>[] = [
  {
    key: "name",
    header: "Item",
    render: (product) => (
      <span className="font-medium text-zinc-900">{product.name}</span>
    ),
  },
  { key: "category", header: "Category" },
  {
    key: "stock",
    header: "Stock",
    render: (product) => (
      <span className="inline-flex items-center gap-2">
        {product.stock} {product.unit}
        {product.stock <= product.reorderLevel ? (
          <Badge variant="danger">low</Badge>
        ) : null}
      </span>
    ),
  },
  { key: "reorderLevel", header: "Reorder at" },
  {
    key: "price",
    header: "Unit cost",
    render: (product) => formatCurrency(product.price),
  },
];

export default function AdminInventoryPage() {
  const products = getProducts();
  const lowStock = getLowStockProducts();

  return (
    <div>
      <PageHeader
        title="Inventory"
        description={`${products.length} items tracked — ${lowStock.length} running low.`}
      />
      <DataTable
        columns={columns}
        rows={products}
        rowKey={(product) => product.id}
        emptyMessage="No inventory items yet."
      />
    </div>
  );
}
