"use client";

import { useState } from "react";

import { SymptomChecker } from "@/components/symptom-checker";
import { MedicineLookup } from "@/components/medicine-lookup";
import { EmergencyGuidelines } from "@/components/emergency-guidelines";
import { HealthTips } from "@/components/health-tips";
import { getTranslation, type Language } from "@/lib/i18n";
import { AppHeader } from "@/components/header";
import { MobileBottomNav } from "@/components/mobileBottomNav";
import { DisclaimerPage } from "@/components/DisclaimerPage";
import ReactLenis from "lenis/react";
import ConsultPage from "@/components/consult";

export default function Home() {
  const [language, setLanguage] = useState<Language>("uz");
  const [activeTab, setActiveTab] = useState<
    "symptom" | "medicine" | "disclaimer" | "emergency" | "f2f"
  >("symptom");

  const t = (key: string) => getTranslation(language, key);

  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,

        lerp: 0.07,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        autoRaf: true,
      }}
    >
      <>
        <AppHeader
          language={language}
          onLanguageChange={setLanguage}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          t={t}
        />

        <div className="md:hidden flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="flex-1 overflow-y-auto pb-32 px-5 pt-6 space-y-8">
            {activeTab === "symptom" && <SymptomChecker language={language} />}
            {activeTab === "medicine" && <MedicineLookup language={language} />}
            {activeTab === "disclaimer" && (
              <DisclaimerPage language={language} />
            )}

            {activeTab === "emergency" && (
              <EmergencyGuidelines language={language} />
            )}

            {activeTab === "symptom" && (
              <div className="mt-8">
                <HealthTips language={language} />
              </div>
            )}
            {activeTab === "f2f" && <ConsultPage />}
          </div>

          <MobileBottomNav
            activeTab={activeTab}
            onTabChange={setActiveTab}
            t={t}
          />
        </div>

        <div className="hidden md:block min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="max-w-5xl mx-auto">
            <main className="py-12 px-8">
              <div className="space-y-12">
                {activeTab === "symptom" && (
                  <SymptomChecker language={language} />
                )}
                {activeTab === "medicine" && (
                  <MedicineLookup language={language} />
                )}
                {activeTab === "disclaimer" && (
                  <DisclaimerPage language={language} />
                )}
                {activeTab === "emergency" && (
                  <EmergencyGuidelines language={language} />
                )}

                {activeTab === "symptom" && (
                  <div className="mt-16">
                    <HealthTips language={language} />
                  </div>
                )}
                {activeTab === "f2f" && <ConsultPage />}
              </div>
            </main>
          </div>
        </div>
      </>
    </ReactLenis>
  );
}
