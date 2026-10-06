import type { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableEmptyState,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/components/ui/Table";
import { cn } from "@/lib/utils/cn";

export interface DataTableColumn<T> {
  key: string;
  header: ReactNode;
  /** Custom cell renderer; falls back to reading `row[key]`. */
  render?: (row: T) => ReactNode;
  className?: string;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  emptyMessage?: string;
  className?: string;
}

export function DataTable<T>({
  columns,
  rows,
  rowKey,
  emptyMessage = "No records found.",
  className,
}: DataTableProps<T>) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-zinc-200 bg-white", className)}>
      <Table>
        <TableHead>
          <tr>
            {columns.map((column) => (
              <TableHeadCell key={column.key} className={column.className}>
                {column.header}
              </TableHeadCell>
            ))}
          </tr>
        </TableHead>
        <TableBody>
          {rows.length === 0 ? (
            <TableEmptyState message={emptyMessage} colSpan={columns.length} />
          ) : (
            rows.map((row) => (
              <TableRow key={rowKey(row)}>
                {columns.map((column) => (
                  <TableCell key={column.key} className={column.className}>
                    {column.render
                      ? column.render(row)
                      : String(
                          (row as unknown as Record<string, unknown>)[
                            column.key
                          ] ?? "",
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
