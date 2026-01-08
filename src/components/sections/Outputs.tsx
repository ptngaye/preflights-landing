"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FileText, ListTodo, Database } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const outputItems = [
  { key: "adr", icon: FileText },
  { key: "task", icon: ListTodo },
  { key: "state", icon: Database },
] as const;

export function Outputs() {
  const t = useTranslations("outputs");

  return (
    <section id="output" className="bg-black py-24 md:py-32">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outputItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <CardSpotlight className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-violet-500/10">
                        <Icon className="w-6 h-6 text-violet-400" />
                      </div>
                      <span className="text-xs font-mono text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
                        {t(`cards.${item.key}.label`)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {t(`cards.${item.key}.title`)}
                    </h3>
                    <p className="text-zinc-400 flex-grow">
                      {t(`cards.${item.key}.description`)}
                    </p>
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
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 text-center text-lg text-zinc-400"
        >
          {t("closing")}
        </motion.p>
      </div>
    </section>
  );
}
