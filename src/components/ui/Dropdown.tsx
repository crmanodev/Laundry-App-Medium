"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export interface DropdownItem {
  label: string;
  /** Renders as a link when provided; otherwise uses `onClick`. */
  href?: string;
  onClick?: () => void;
}

export interface DropdownProps {
  /** Element that triggers the menu (usually a button label). */
  trigger: ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
  className?: string;
}

export function Dropdown({
  trigger,
  items,
  align = "left",
  className,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className={cn("relative inline-block", className)}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1 rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
      >
        {trigger}
        <span aria-hidden className="text-xs text-zinc-400">▾</span>
      </button>
      {open ? (
        <div
          role="menu"
          className={cn(
            "absolute z-20 mt-1 min-w-40 overflow-hidden rounded-lg border border-zinc-200 bg-white py-1 shadow-lg",
            align === "right" ? "right-0" : "left-0",
          )}
        >
          {items.map((item, index) => {
            const content = (
              <span className="block w-full px-3 py-1.5 text-left text-sm text-zinc-700 transition-colors hover:bg-zinc-50">
                {item.label}
              </span>
            );
            return item.href ? (
              <Link
                key={`${item.label}-${index}`}
                href={item.href}
                role="menuitem"
                className="block"
                onClick={() => setOpen(false)}
              >
                {content}
              </Link>
            ) : (
              <button
                key={`${item.label}-${index}`}
                type="button"
                role="menuitem"
                className="block w-full"
                onClick={() => {
                  item.onClick?.();
                  setOpen(false);
                }}
              >
                {content}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
