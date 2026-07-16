import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button"> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-foreground text-background shadow-soft hover:-translate-y-0.5 hover:shadow-lg",
  secondary: "border border-border bg-surface text-foreground hover:border-foreground/30",
  ghost: "text-muted hover:bg-muted/10 hover:text-foreground",
};

export function Button({ href, variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
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
