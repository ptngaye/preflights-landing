"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Lightbulb, FileText, Code } from "lucide-react";

const items = [
  { key: "decide", icon: Lightbulb, color: "violet" },
  { key: "specify", icon: FileText, color: "purple" },
  { key: "implement", icon: Code, color: "indigo" },
] as const;

const colorClasses = {
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    border: "border-violet-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
  },
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    border: "border-indigo-500/20",
  },
};

export function Separation() {
  const t = useTranslations("separation");

  return (
    <section className="bg-black py-24 md:py-32">
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
          <p className="text-lg text-zinc-400">{t("intro")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            const colors = colorClasses[item.color];
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-2xl border ${colors.border} bg-zinc-900/50 p-8 text-center`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} mb-6`}
                >
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t(`${item.key}.title`)}
                </h3>
                <p className="text-zinc-400">{t(`${item.key}.description`)}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
            {t("closing")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
