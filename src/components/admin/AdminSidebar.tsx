"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ADMIN_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-56 shrink-0 flex-col border-r border-line bg-surface md:flex">
      <div className="flex h-14 items-center border-b border-line px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-ink"
        >
          <span
            aria-hidden
            className="brand-gradient flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold text-on-primary"
          >
            OS
          </span>
          OM SAI
          <span className="rounded bg-primary px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-on-primary">
            Admin
          </span>
        </Link>
      </div>

      <nav className="flex flex-col gap-1 p-3">
        {ADMIN_NAV.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-on-primary shadow-[var(--shadow-brand)]"
                  : "text-ink-muted hover:bg-surface-soft hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
