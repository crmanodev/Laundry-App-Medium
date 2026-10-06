import type { ReactNode, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

/** Basic table building blocks. For column-driven tables, use `DataTable`. */

export function Table({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className={cn("w-full border-collapse text-left text-sm", className)}
      >
        {children}
      </table>
    </div>
  );
}

export function TableHead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <thead className={cn("bg-zinc-50", className)}>{children}</thead>;
}

export function TableBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <tbody className={cn("divide-y divide-zinc-100", className)}>
      {children}
    </tbody>
  );
}

export function TableRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <tr className={cn("transition-colors hover:bg-zinc-50", className)}>
      {children}
    </tr>
  );
}

export function TableHeadCell({
  children,
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        "px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-500",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
}

export function TableCell({
  children,
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn("px-4 py-3 text-sm text-zinc-700", className)}
      {...props}
    >
      {children}
    </td>
  );
}

export function TableEmptyState({
  message,
  colSpan,
  className,
}: {
  message: string;
  colSpan: number;
  className?: string;
}) {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className={cn("px-4 py-8 text-center text-sm text-zinc-500", className)}
      >
        {message}
      </td>
    </tr>
  );
}
