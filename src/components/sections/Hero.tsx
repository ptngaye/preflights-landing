"use client";

import { useTranslations } from "next-intl";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Spotlight } from "@/components/ui/spotlight";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";

const GITHUB_URL = "https://github.com/ptngaye/preflights";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <AuroraBackground className="pt-16">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* H1 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">{t("title")}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
              {t("titleAccent")}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            {t("subtitle")
              .split("**")
              .map((part, index) =>
                index % 2 === 1 ? (
                  <strong key={index} className="text-white font-semibold">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CTAButton href={GITHUB_URL} external>
              {t("ctaPrimary")}
            </CTAButton>
            <CTAButton href="#how-it-works" variant="secondary">
              {t("ctaSecondary")}
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
