import { tokens } from '@/lib/design-tokens';

export function Container({ children, narrow = false, className = '' }: { children: React.ReactNode; narrow?: boolean; className?: string }) {
  return <div className={`${narrow ? tokens.containers.narrow : tokens.containers.default} ${className}`}>{children}</div>;
}
