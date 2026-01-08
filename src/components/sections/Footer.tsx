"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

const GITHUB_URL = "https://github.com/ptngaye/preflights";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Preflights"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="text-zinc-400 text-sm">{t("tagline")}</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              {t("github")}
            </Link>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-500 text-sm">{t("license")}</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} Preflights. Open source under
            Apache-2.0.
          </p>
        </div>
      </div>
    </footer>
  );
}
