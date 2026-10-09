"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WEBSITE_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={cn("items-center gap-6", className)}>
      {WEBSITE_NAV.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : !item.href.includes("#") && pathname.startsWith(item.href);

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all hover:text-primary",
              isActive
                ? "text-primary after:w-full"
                : "text-ink-muted hover:after:w-full",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
