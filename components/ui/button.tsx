import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button"> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-accent text-white shadow-[0_8px_24px_rgb(158_104_98_/_0.18)] hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_12px_28px_rgb(158_104_98_/_0.24)]",
  secondary:
    "border border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft",
  ghost:
    "text-accent underline decoration-accent/30 underline-offset-6 hover:decoration-accent",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-11 items-center justify-center px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transform-none",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
