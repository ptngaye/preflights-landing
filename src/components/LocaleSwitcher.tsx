"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      {routing.locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          {index > 0 && <span className="text-zinc-600 mx-1">|</span>}
          <button
            onClick={() => switchLocale(loc)}
            className={`uppercase transition-colors ${
              locale === loc
                ? "text-white font-medium"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
