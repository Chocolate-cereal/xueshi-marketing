import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button"> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary:
    "border border-border bg-surface text-foreground hover:border-accent hover:bg-accent-soft",
  ghost: "text-accent hover:text-accent-hover",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
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
