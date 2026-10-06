"use client";

import { useState } from "react";
import Link from "next/link";
import { WEBSITE_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

export function MobileMenu({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-50"
      >
        {open ? "✕" : "☰"}
      </button>

      {open ? (
        <nav className="absolute right-0 top-11 z-50 w-48 overflow-hidden rounded-lg border border-zinc-200 bg-white py-1 shadow-lg">
          {WEBSITE_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
