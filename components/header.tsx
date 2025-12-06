"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";
import { MessageCircle, Pill, Info, AlertTriangle } from "lucide-react";
import { useLenis } from "lenis/react";

type Tab = "symptom" | "medicine" | "disclaimer" | "emergency";

const tabs = [
  { id: "symptom" as const, icon: MessageCircle, label: "tab.symptom" },
  { id: "medicine" as const, icon: Pill, label: "tab.medicine" },
  { id: "disclaimer" as const, icon: Info, label: "tab.disclaimer" },
  {
    id: "emergency" as const,
    icon: AlertTriangle,
    label: "tab.emergency",   
    critical: true,
  },
];

interface AppHeaderProps {
  language: "uz" | "ru" | "en";
  onLanguageChange: (lang: "uz" | "ru" | "en") => void;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  t: (key: string) => string;
}

export function AppHeader({
  language,
  onLanguageChange,
  activeTab,
  onTabChange,
  t,
}: AppHeaderProps) {
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!lenis) return;
    const handleScroll = ({ scroll }: { scroll: number }) => {
      setScrolled(scroll > 30);
    };
    lenis.on("scroll", handleScroll);
    return () => lenis.off("scroll", handleScroll);
  }, [lenis]);

  return (
    <>

      <header className="md:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <Image src="/logo.png" alt="Logo" width={70} height={70} className="object-contain" priority />
          <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
        </div>
      </header>

<header className="hidden md:block sticky top-0 z-50  ">
 
  <div
    className={cn(
      "transition-transform duration-700 ease-out",
      scrolled ? "-translate-y-24" : "translate-y-0"
    )}
  >
 
    <div className="flex items-center justify-between px-8 h-24 border-b border-gray-100">
      <div className="flex items-center gap-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className={cn("object-contain transition-all duration-500", scrolled && "opacity-0 scale-75")}
          priority
        />
        <div className={cn("transition-all duration-500", scrolled && "opacity-0 -translate-y-4")}>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <p className="text-gray-600 text-sm mt-1">{t("subtitle")}</p>
        </div>
      </div>
      <div className={cn("transition-transform duration-500", scrolled && "scale-95")}>
        <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
      </div>
    </div>

  
    <div
      className={cn(
        "bg-white/95 backdrop-blur-md border-t border-gray-100 transition-all duration-500",
        scrolled ? "py-3 shadow-lg" : "py-4 shadow-md"
      )}
    >
      <div className="px-8">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <Button
                key={tab.id}
                variant={isActive ? "default" : "outline"}
                size="lg"
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex items-center gap-2.5 px-5 font-medium whitespace-nowrap transition-all",
                  isActive && tab.critical
                    ? "bg-red-600 hover:bg-red-700 text-white shadow-md"
                    : isActive
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                    : "hover:bg-blue-50",
                  scrolled ? "h-11 text-sm" : "h-12 text-base"
                )}
              >
                <Icon className={cn("transition-all", scrolled ? "h-4.5 w-4.5" : "h-5 w-5")} />
                {tab.id === "emergency" ? (
                  <span className="font-bold">Tez yordam (103)</span>
                ) : (
                  t(
                    `full.${
                      tab.id === "disclaimer"
                        ? "about"
                        : tab.id === "symptom"
                        ? "symptomChecker"
                        : "medicineLookup"
                    }`
                  ) || t(tab.label)
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</header>
    </>
  );
}