import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  /**
   * primary:       filled with the accent colour, for the main action
   * outline-light: sand outline, for use on dark backgrounds and photos
   * outline-dark:  ink outline, for use on sand backgrounds
   */
  variant?: "primary" | "outline-light" | "outline-dark";
  className?: string;
}

const variantClasses = {
  primary: "bg-accent-fill text-on-accent hover:opacity-90",
  "outline-light": "border border-sand/70 text-sand hover:bg-ink-deep",
  "outline-dark": "border border-ink text-ink hover:bg-sand-deep",
};

/**
 * A link styled as a button. Internal pages ("/tours") use Next.js <Link>
 * for fast page changes; phone, WhatsApp and other addresses use a plain <a>.
 */
export default function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const classes = `tap-target inline-flex items-center justify-center gap-1 rounded-control px-3 py-1 text-base font-semibold transition-opacity ${variantClasses[variant]} ${className}`;

  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // WhatsApp and other websites open in a new tab; tel: links do not.
  const opensNewTab = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
