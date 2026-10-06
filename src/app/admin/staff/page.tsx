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
import { getStaff } from "@/lib/repositories/staff";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Staff",
  path: "/admin/staff",
  noIndex: true,
});

export default function AdminStaffPage() {
  const staff = getStaff();

  return (
    <div>
      <PageHeader
        title="Staff"
        description={`${staff.length} team members.`}
      />
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <Table>
          <TableHead>
            <tr>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Role</TableHeadCell>
              <TableHeadCell>Shift</TableHeadCell>
              <TableHeadCell>Phone</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
            </tr>
          </TableHead>
          <TableBody>
            {staff.map((member) => (
              <TableRow key={member.id}>
                <TableCell className="font-medium text-zinc-900">
                  {member.name}
                </TableCell>
                <TableCell className="capitalize">{member.role}</TableCell>
                <TableCell className="capitalize">{member.shift}</TableCell>
                <TableCell>{member.phone}</TableCell>
                <TableCell>
                  {member.active ? (
                    <Badge variant="success">active</Badge>
                  ) : (
                    <Badge variant="neutral">inactive</Badge>
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
