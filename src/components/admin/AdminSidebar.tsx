"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ADMIN_NAV, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-56 shrink-0 flex-col border-r border-zinc-200 bg-white md:flex">
      <div className="flex h-14 items-center border-b border-zinc-200 px-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900"
        >
          {SITE_NAME}
          <span className="ml-2 rounded bg-zinc-900 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
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
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
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
