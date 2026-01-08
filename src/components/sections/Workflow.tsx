"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const steps = ["step1", "step2", "step3", "step4"] as const;

export function Workflow() {
  const t = useTranslations("workflow");

  return (
    <section className="bg-zinc-950 py-24 md:py-32">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-mono text-sm">
                    {index + 1}
                  </span>
                  <p className="text-zinc-300 pt-1">{t(`steps.${step}`)}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-zinc-500 font-mono">
                  terminal
                </span>
              </div>
              {/* Terminal content */}
              <div className="p-4 font-mono text-sm">
                <div className="text-zinc-500">
                  <span className="text-green-400">$</span> preflights start
                </div>
                <div className="mt-2 text-zinc-400">
                  <span className="text-violet-400">?</span> What do you want to
                  build?
                </div>
                <div className="mt-1 text-zinc-300 pl-2">
                  <span className="text-zinc-500">&gt;</span> Add user
                  authentication with OAuth
                </div>
                <div className="mt-3 text-zinc-400">
                  <span className="text-violet-400">?</span> Session storage
                  preference?
                </div>
                <div className="mt-1 text-zinc-300 pl-2">
                  <span className="text-zinc-500">&gt;</span> JWT in httpOnly
                  cookies
                </div>
                <div className="mt-3 text-green-400">
                  <span className="text-zinc-500">✓</span> Decision recorded
                  (ADR-042)
                </div>
                <div className="text-green-400">
                  <span className="text-zinc-500">✓</span> Execution plan
                  generated
                </div>
                <div className="mt-2 text-zinc-500">
                  Ready for your AI agent.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600"
        >
          {t("punchline")}
        </motion.p>
      </div>
    </section>
  );
}
