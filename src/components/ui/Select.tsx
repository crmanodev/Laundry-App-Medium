import type { ReactNode, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string | null;
  options?: SelectOption[];
  children?: ReactNode;
}

export function Select({
  label,
  error,
  options,
  children,
  className,
  id,
  ...props
}: SelectProps) {
  const selectId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label
          htmlFor={selectId}
          className="text-sm font-medium text-ink-muted"
        >
          {label}
        </label>
      ) : null}
      <select
        id={selectId}
        aria-invalid={error ? true : undefined}
        className={cn(
          "h-10 w-full rounded-lg border border-line-strong bg-surface px-3 text-sm text-ink focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
          error && "border-danger",
          className,
        )}
        {...props}
      >
        {options
          ? options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))
          : children}
      </select>
      {error ? <p className="text-xs text-danger">{error}</p> : null}
    </div>
  );
}
