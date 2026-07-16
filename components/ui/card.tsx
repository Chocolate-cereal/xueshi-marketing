import { tokens } from '@/lib/design-tokens';

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`${tokens.radius.card} ${tokens.shadow.card} border bg-white/80 p-6 dark:bg-charcoal-900/80 ${className}`}>{children}</div>;
}
