import Link from "next/link";
import { getDict } from "@/lib/i18n";

export default function NotFound() {
  const dict = getDict();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-32 text-center">
      <p className="text-6xl font-semibold tracking-tight text-primary">404</p>
      <h1 className="text-xl font-medium text-ink">{dict.notFound.title}</h1>
      <p className="max-w-md text-sm leading-6 text-ink-muted">
        {dict.notFound.description}
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-on-primary transition-colors hover:bg-primary-hover"
      >
        {dict.common.backToHome}
      </Link>
    </div>
  );
}
