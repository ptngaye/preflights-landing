"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Terminal, Puzzle, Shield } from "lucide-react";

const items = [
  { key: "cli", icon: Terminal },
  { key: "mcp", icon: Puzzle },
  { key: "guardrail", icon: Shield },
] as const;

export function Integrations() {
  const t = useTranslations("integrations");

  return (
    <section id="integrations" className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <ul className="space-y-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.key}
                  className="flex items-start gap-4 text-lg text-zinc-300"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-violet-500/10 mt-1">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <span>
                    {t(`bullets.${item.key}`)
                      .split("**")
                      .map((part, i) =>
                        i % 2 === 1 ? (
                          <strong key={i} className="text-white font-semibold">
                            {part}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                  </span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
