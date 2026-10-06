import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

/** Page section with a centered max-width container. */
export function Section({
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-4 sm:px-6",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
