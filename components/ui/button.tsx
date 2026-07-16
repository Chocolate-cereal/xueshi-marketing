import Link from 'next/link';
import { tokens } from '@/lib/design-tokens';

type ButtonProps = { children: React.ReactNode; href: string; variant?: 'primary' | 'secondary' };

export function Button({ children, href, variant = 'primary' }: ButtonProps) {
  const variants = {
    primary: 'bg-navy-950 text-white hover:bg-navy-800 dark:bg-white dark:text-charcoal-950 dark:hover:bg-neutral-200',
    secondary: 'border bg-white text-navy-950 hover:bg-neutral-50 dark:bg-charcoal-900 dark:text-white dark:hover:bg-charcoal-800',
  };
  return (
    <Link href={href} className={`${tokens.radius.control} ${tokens.transitions.base} ${variants[variant]} inline-flex min-h-11 items-center justify-center px-5 py-2.5 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-charcoal-950`}>
      {children}
    </Link>
  );
}
