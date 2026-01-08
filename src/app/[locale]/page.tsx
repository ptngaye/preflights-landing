import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Separation } from "@/components/sections/Separation";
import { Pipeline } from "@/components/sections/Pipeline";
import { Outputs } from "@/components/sections/Outputs";
import { Workflow } from "@/components/sections/Workflow";
import { Integrations } from "@/components/sections/Integrations";
import { Positioning } from "@/components/sections/Positioning";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Separation />
        <Pipeline />
        <Outputs />
        <Workflow />
        <Integrations />
        <Positioning />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
