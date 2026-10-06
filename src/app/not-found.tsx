import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-32 text-center">
      <p className="text-6xl font-semibold tracking-tight text-zinc-900">
        404
      </p>
      <h1 className="text-xl font-medium text-zinc-700">Page not found</h1>
      <p className="max-w-md text-sm leading-6 text-zinc-500">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex h-10 items-center rounded-lg bg-zinc-900 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
      >
        Back to home
      </Link>
    </div>
  );
}
