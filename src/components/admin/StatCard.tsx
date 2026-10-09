import { cn } from "@/lib/utils/cn";

export interface StatCardProps {
  label: string;
  value: string;
  hint?: string;
  className?: string;
}

export function StatCard({ label, value, hint, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-surface p-5",
        className,
      )}
    >
      <p className="text-sm text-ink-muted">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        {value}
      </p>
      {hint ? <p className="mt-1 text-xs text-ink-faint">{hint}</p> : null}
    </div>
  );
}
