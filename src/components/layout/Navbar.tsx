import Link from "next/link";
import { WEBSITE_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

export function Navbar({ className }: { className?: string }) {
  return (
    <nav className={cn("items-center gap-6", className)}>
      {WEBSITE_NAV.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
