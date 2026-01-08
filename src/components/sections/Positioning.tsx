"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const isNotItems = ["codeGen", "agent", "workflow"] as const;
const isItems = ["clarification", "capture", "safety"] as const;

export function Positioning() {
  const t = useTranslations("positioning");

  return (
    <section className="bg-zinc-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Is Not */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {t("isNot.title")}
            </h3>
            <ul className="space-y-4">
              {isNotItems.map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <div className="flex-shrink-0 p-1 rounded-full bg-red-500/10">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-zinc-400">
                    {t(`isNot.items.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Is */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {t("is.title")}
            </h3>
            <ul className="space-y-4">
              {isItems.map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <div className="flex-shrink-0 p-1 rounded-full bg-violet-500/20">
                    <Check className="w-4 h-4 text-violet-400" />
                  </div>
                  <span className="text-zinc-200">{t(`is.items.${key}`)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
