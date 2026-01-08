"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { CTAButton } from "@/components/CTAButton";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const GITHUB_URL = "https://github.com/ptngaye/preflights";

export function Header() {
  const t = useTranslations("header");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "problem", href: "#problem" },
    { key: "howItWorks", href: "#how-it-works" },
    { key: "output", href: "#output" },
    { key: "integrations", href: "#integrations" },
    { key: "faq", href: "#faq" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Preflights"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="font-semibold text-white text-lg">Preflights</span>
          </Link>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <LocaleSwitcher />
            <CTAButton href={GITHUB_URL} external className="hidden sm:flex">
              {t("cta")}
            </CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}
