"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

export interface FileUploadProps {
  label?: string;
  accept?: string;
  hint?: string;
  className?: string;
}

export function FileUpload({
  label = "Click to upload a file",
  accept,
  hint = "PNG, JPG or PDF up to 10MB",
  className,
}: FileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <label
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-4 py-6 text-center transition-colors hover:border-zinc-400 hover:bg-zinc-100",
        className,
      )}
    >
      <input
        type="file"
        accept={accept}
        className="sr-only"
        onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
      />
      <span className="text-sm font-medium text-zinc-700">{label}</span>
      <span className="text-xs text-zinc-400">
        {fileName ?? hint}
      </span>
    </label>
  );
}
