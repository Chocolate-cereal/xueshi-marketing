export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full border bg-white px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-charcoal-900 dark:text-neutral-300">{children}</span>;
}
