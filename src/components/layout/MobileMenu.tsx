"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CONTACT_PHONE,
  WEBSITE_NAV,
  WHATSAPP_URL,
} from "@/lib/constants";
import { getDict } from "@/lib/i18n";
import { cn } from "@/lib/utils/cn";

export function MobileMenu({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dict = getDict();

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        aria-label={open ? dict.common.closeMenu : dict.common.openMenu}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink transition-colors hover:bg-surface-soft"
      >
        <span aria-hidden className="text-lg leading-none">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open ? (
        <div className="fixed inset-x-0 top-16 z-50 border-b border-line bg-surface shadow-xl md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {WEBSITE_NAV.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : !item.href.includes("#") &&
                    pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-primary-soft text-primary"
                      : "text-ink hover:bg-surface-soft",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-line pt-4">
              <a
                href={`tel:${CONTACT_PHONE}`}
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full border border-line-strong text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                {dict.common.call}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#25D366] text-sm font-semibold text-white"
              >
                {dict.common.whatsappShort}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
