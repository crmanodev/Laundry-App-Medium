import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { SITE_NAME } from "@/lib/constants";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    // bg-background/75 — lets the global background art show through while
    // keeping a soft white overlay for admin text/table readability.
    <div className="flex min-h-screen w-full bg-background/75">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-line bg-surface px-6">
          <span className="text-sm font-semibold text-ink">
            {SITE_NAME} — Admin
          </span>
          <span className="text-xs text-ink-muted">
            Signed in as admin@example.com
          </span>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
