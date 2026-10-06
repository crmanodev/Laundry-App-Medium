import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export function Radio({ label, className, ...props }: RadioProps) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-2 text-sm text-zinc-700",
        className,
      )}
    >
      <input
        type="radio"
        className="h-4 w-4 border-zinc-300 text-zinc-900 accent-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
        {...props}
      />
      {label}
    </label>
  );
}
