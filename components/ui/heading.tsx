import { tokens } from '@/lib/design-tokens';

type HeadingProps = { children: React.ReactNode; as?: 'h1' | 'h2' | 'h3'; size?: 'display' | 'h1' | 'h2' | 'h3'; id?: string; className?: string };

export function Heading({ children, as: Tag = 'h2', size = 'h2', id, className = '' }: HeadingProps) {
  return <Tag id={id} className={`${tokens.typography[size]} text-balance text-navy-950 dark:text-white ${className}`}>{children}</Tag>;
}
