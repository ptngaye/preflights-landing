"use client";

import { useTranslations } from "next-intl";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  GitBranch,
  RefreshCw,
  HelpCircle,
} from "lucide-react";

const icons = {
  implicit: AlertTriangle,
  inconsistencies: GitBranch,
  rework: RefreshCw,
  debt: HelpCircle,
};

const cardKeys = ["implicit", "inconsistencies", "rework", "debt"] as const;

export function Problem() {
  const t = useTranslations("problem");

  return (
    <section id="problem" className="bg-zinc-950 py-24 md:py-32">
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
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            {t("intro")
              .split("**")
              .map((part, index) =>
                index % 2 === 1 ? (
                  <strong key={index} className="text-white">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardKeys.map((key, index) => {
            const Icon = icons[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardSpotlight>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-violet-500/10">
                      <Icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {t(`cards.${key}.title`)}
                      </h3>
                      <p className="text-zinc-400">
                        {t(`cards.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-xl text-zinc-300 font-medium"
        >
          {t("closing")}
        </motion.p>
      </div>
    </section>
  );
}
