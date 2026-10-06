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
import { getServices } from "@/lib/repositories/services";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatCurrency } from "@/lib/utils/format";

export const metadata = buildMetadata({
  title: "Services",
  path: "/admin/services",
  noIndex: true,
});

export default function AdminServicesPage() {
  const services = getServices();

  return (
    <div>
      <PageHeader
        title="Services"
        description={`${services.length} services offered.`}
      />
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <Table>
          <TableHead>
            <tr>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell>Unit</TableHeadCell>
              <TableHeadCell>Featured</TableHeadCell>
            </tr>
          </TableHead>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell className="font-medium text-zinc-900">
                  {service.name}
                </TableCell>
                <TableCell>{service.category}</TableCell>
                <TableCell>{formatCurrency(service.price)}</TableCell>
                <TableCell>{service.unit}</TableCell>
                <TableCell>
                  {service.featured ? (
                    <Badge variant="success">yes</Badge>
                  ) : (
                    <Badge>no</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
