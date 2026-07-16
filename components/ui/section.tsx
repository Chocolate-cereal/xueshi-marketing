import { tokens } from '@/lib/design-tokens';
import { Container } from './container';

export function Section({ children, id, eyebrow, className = '', compact = false }: { children: React.ReactNode; id?: string; eyebrow?: string; className?: string; compact?: boolean }) {
  return (
    <section id={id} className={`${compact ? tokens.spacing.sectionCompact : tokens.spacing.section} ${className}`} aria-labelledby={id ? `${id}-heading` : undefined}>
      <Container>
        {eyebrow ? <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-500">{eyebrow}</p> : null}
        {children}
      </Container>
    </section>
  );
}
