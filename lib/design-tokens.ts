export const tokens = {
  typography: {
    display: 'text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl',
    h1: 'text-4xl font-semibold tracking-[-0.035em] sm:text-5xl',
    h2: 'text-3xl font-semibold tracking-[-0.03em] sm:text-4xl',
    h3: 'text-xl font-semibold tracking-[-0.02em] sm:text-2xl',
    lead: 'text-lg leading-8 text-neutral-600 dark:text-neutral-300',
    body: 'text-base leading-7 text-neutral-600 dark:text-neutral-300',
    caption: 'text-sm leading-6 text-neutral-500 dark:text-neutral-400',
  },
  spacing: {
    section: 'py-20 sm:py-24 lg:py-28',
    sectionCompact: 'py-14 sm:py-16',
  },
  radius: {
    card: 'rounded-3xl',
    control: 'rounded-full',
  },
  shadow: {
    card: 'shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)]',
  },
  transitions: {
    base: 'transition duration-200 ease-out',
  },
  containers: {
    default: 'mx-auto w-full max-w-6xl px-6 lg:px-8',
    narrow: 'mx-auto w-full max-w-3xl px-6 lg:px-8',
  },
} as const;
