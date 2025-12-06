"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";
import { MessageCircle, Pill, Info, AlertTriangle, Shield } from "lucide-react";

type Tab = "symptom" | "medicine" | "disclaimer" | "emergency" | "responsible";

const tabs = [
  { id: "symptom" as const, icon: MessageCircle, label: "tab.symptom" },
  { id: "medicine" as const, icon: Pill, label: "tab.medicine" },
  { id: "disclaimer" as const, icon: Info, label: "tab.disclaimer" },
  {
    id: "emergency" as const,
    icon: AlertTriangle,
    label: "103",
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     
      <header className="md:hidden bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="px-2 py-2 flex items-center justify-between">
          <div>
             <Image
                  src="/logo.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
           
          </div>
          <LanguageSwitcher
            currentLanguage={language}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </header>

      <header className="hidden md:block sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200">
        <div
          className={cn(
            "transition-all duration-500 ease-out overflow-hidden",
            scrolled
              ? "h-0 py-0 border-b-0"
              : "h-24 py-6 border-b border-gray-100"
          )}
        >
          <div className="px-8 flex items-center justify-between h-full">
            <div className="flex items-center gap-6">
              <div
                className={cn(
                  "transition-all duration-500",
                  scrolled ? "w-0 opacity-0" : "w-20 opacity-100"
                )}
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>

              <div
                className={cn(
                  "transition-all duration-500",
                  scrolled && "opacity-0 -translate-y-4"
                )}
              >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {t("title")}
                </h1>
                <p className="text-gray-600 text-sm mt-1">{t("subtitle")}</p>
              </div>
            </div>

            <div
              className={cn(
                "transition-transform duration-500",
                scrolled && "scale-90 origin-right"
              )}
            >
              <LanguageSwitcher
                currentLanguage={language}
                onLanguageChange={onLanguageChange}
              />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md border-t border-gray-100 shadow-sm">
          <div className="px-8 py-3.5">
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
                        : "hover:bg-blue-100"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {tab.id === "emergency"
                      ? "Tez yordam (103)"
                      : t(
                          `full.${
                            tab.id === "disclaimer"
                              ? "about"
                              : tab.id === "symptom"
                              ? "symptomChecker"
                              : "medicineLookup"
                          }`
                        ) || t(tab.label)}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
