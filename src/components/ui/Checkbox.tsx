import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-2 text-sm text-zinc-700",
        className,
      )}
    >
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-zinc-300 text-zinc-900 accent-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
        {...props}
      />
      {label}
    </label>
  );
}
