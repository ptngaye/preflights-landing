"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Suspense } from "react";

const PipelineFlow = dynamic(() => import("./PipelineFlow"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full flex items-center justify-center">
      <div className="animate-pulse text-zinc-500">Loading diagram...</div>
    </div>
  ),
});

export function Pipeline() {
  const t = useTranslations("pipeline");

  const bullets = ["ask", "write", "keep"] as const;

  return (
    <section id="how-it-works" className="bg-zinc-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 md:p-8"
        >
          <Suspense
            fallback={
              <div className="h-[300px] w-full flex items-center justify-center">
                <div className="animate-pulse text-zinc-500">
                  Loading diagram...
                </div>
              </div>
            }
          >
            <PipelineFlow />
          </Suspense>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center gap-6 md:gap-12"
        >
          {bullets.map((key) => (
            <li key={key} className="flex items-center gap-3 text-zinc-300">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-500" />
              {t(`bullets.${key}`)}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
