"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen items-center justify-center bg-zinc-950 text-slate-50 transition-bg overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={cn(
            `
            [--aurora:repeating-linear-gradient(100deg,var(--violet-500)_10%,var(--purple-300)_15%,var(--violet-200)_20%,var(--indigo-400)_25%,var(--violet-400)_30%)]
            [background-image:var(--aurora)]
            [background-size:300%_200%]
            [background-position:50%_50%]
            absolute
            inset-0
            opacity-30
            blur-[100px]
            will-change-transform
            `,
            `[--violet-500:#8b5cf6]`,
            `[--purple-300:#d8b4fe]`,
            `[--violet-200:#ddd6fe]`,
            `[--indigo-400:#818cf8]`,
            `[--violet-400:#a78bfa]`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        >
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 [background-image:inherit] [background-size:inherit]"
          />
        </motion.div>
      </div>
      {children}
    </div>
  );
};
