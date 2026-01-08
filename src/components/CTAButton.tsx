"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 text-sm";

  const variants = {
    primary:
      "bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/10",
    secondary:
      "border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600",
  };

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], className)}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
