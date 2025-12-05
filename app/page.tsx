// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { LanguageSwitcher } from "@/components/language-switcher"
// import { SymptomChecker } from "@/components/symptom-checker"
// import { MedicineLookup } from "@/components/medicine-lookup"
// import { HealthTips } from "@/components/health-tips"
// import { EmergencyGuidelines } from "@/components/emergency-guidelines"
// import { ResponsibleUse } from "@/components/responsible-use"
// import { type Language, getTranslation } from "@/lib/i18n"
// import { Menu, X } from "lucide-react"

// type Tab = "symptom" | "medicine" | "disclaimer" | "emergency" | "responsible"

// export default function Home() {
//   const [language, setLanguage] = useState<Language>("uz")
//   const [activeTab, setActiveTab] = useState<Tab>("symptom")
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   const navItems = [
//     { id: "symptom", label: getTranslation(language, "nav.symptomChecker"), color: "bg-primary" },
//     { id: "medicine", label: getTranslation(language, "nav.medicineLookup"), color: "bg-secondary" },
//     { id: "disclaimer", label: getTranslation(language, "nav.about"), color: "bg-accent" },
//     { id: "emergency", label: language === "uz" ? "Jiddiy" : language === "ru" ? "Скорая" : "Emergency", color: "bg-destructive", important: true },
//     { id: "responsible", label: language === "uz" ? "Mas'uliyat" : language === "ru" ? "Ответственность" : "Responsibility", color: "bg-accent" },
//   ]

//   return (
//     <main className="min-h-screen bg-background pb-24 md:pb-0">

//       <header className="border-b border-border bg-card sticky top-0 z-50">
//         <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="max-w-[70%]">
//             <h1 className="text-xl md:text-2xl font-bold text-primary leading-tight">
//               {getTranslation(language, "title")}
//             </h1>
//             <p className="text-xs text-muted-foreground mt-1 truncate">
//               {getTranslation(language, "subtitle")}
//             </p>
//           </div>
//           <div className="flex items-center gap-2">
//             <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
//             <Button
//               variant="ghost"
//               size="icon"
//               className="md:hidden"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>
//       </header>


//       {mobileMenuOpen && (
//         <div className="fixed inset-0 bg-background/95 backdrop-blur z-40 md:hidden">
//           <div className="p-4 space-y-2">
//             {navItems.map((item) => (
//               <Button
//                 key={item.id}
//                 variant={activeTab === item.id ? "default" : "outline"}
//                 className={`w-full justify-start text-left ${activeTab === item.id ? item.color + " text-white" : ""}`}
//                 onClick={() => {
//                   setActiveTab(item.id as Tab)
//                   setMobileMenuOpen(false)
//                 }}
//               >
//                 {item.important && " "} {item.label}
//               </Button>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="hidden md:block border-b border-border bg-card sticky top-[73px] z-40">
//         <div className="max-w-6xl mx-auto px-4 py-3">
//           <div className="flex flex-wrap gap-2">
//             {navItems.map((item) => (
//               <Button
//                 key={item.id}
//                 variant={activeTab === item.id ? "default" : "ghost"}
//                 onClick={() => setActiveTab(item.id as Tab)}
//                 className={activeTab === item.id ? `${item.color} hover:opacity-90 text-white` : ""}
//               >
//                 {item.important && " "} {item.label}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

    
//       <div className="max-w-6xl mx-auto px-4 py-6 pb-20">
//         {activeTab === "symptom" && <SymptomChecker language={language} />}
//         {activeTab === "medicine" && <MedicineLookup language={language} />}
//         {activeTab === "disclaimer" && (
//           <Card className="p-6 border-accent/30">
            
//           </Card>
//         )}
//         {activeTab === "emergency" && <EmergencyGuidelines language={language} />}
//         {activeTab === "responsible" && <ResponsibleUse language={language} />}

//         {activeTab === "symptom" && (
//           <div className="mt-8">
//             <HealthTips language={language} />
//           </div>
//         )}
//       </div>
//       <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border md:hidden z-50">
//         <div className="flex justify-around py-2">
//           {navItems.map((item) => (
//             <Button
//               key={item.id}
//               variant="ghost"
//               size="sm"
//               className={`flex flex-col items-center gap-1 ${activeTab === item.id ? "text-primary" : "text-muted-foreground"}`}
//               onClick={() => setActiveTab(item.id as Tab)}
//             >
//               <span className="text-xs">{item.label.split(" ")[0]}</span>
//               {item.important && <span className="text-[10px]"></span>}
//             </Button>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }
// app/page.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LanguageSwitcher } from "@/components/language-switcher"
import { SymptomChecker } from "@/components/symptom-checker"
import { MedicineLookup } from "@/components/medicine-lookup"
import { HealthTips } from "@/components/health-tips"
import { EmergencyGuidelines } from "@/components/emergency-guidelines"
import { ResponsibleUse } from "@/components/responsible-use"
import { getTranslation, type Language } from "@/lib/i18n"
import { MessageCircle, Pill, Info, AlertTriangle, Shield } from "lucide-react"

type Tab = "symptom" | "medicine" | "disclaimer" | "emergency" | "responsible"

const bottomTabs = [
  { id: "symptom" as const, icon: MessageCircle },
  { id: "medicine" as const, icon: Pill },
  { id: "disclaimer" as const, icon: Info },
  { id: "emergency" as const, icon: AlertTriangle, critical: true },
  { id: "responsible" as const, icon: Shield },
]

export default function Home() {
  const [language, setLanguage] = useState<Language>("uz")
  const [activeTab, setActiveTab] = useState<Tab>("symptom")

  return (
    <>
     
      <div className="md:hidden flex flex-col min-h-screen bg-background">
      
        <div className="p-4 bg-card border-b border-border">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary">
              {getTranslation(language, "title")}
            </h1>
            <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {getTranslation(language, "subtitle")}
          </p>
        </div>

      
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-6 pb-24">
            {activeTab === "symptom" && <SymptomChecker language={language} />}
            {activeTab === "medicine" && <MedicineLookup language={language} />}
            {activeTab === "disclaimer" && (
              <Card className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-primary">
                  {getTranslation(language, "full.about")}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {getTranslation(language, "disclaimer")}
                </p>
                <p className="text-sm font-medium text-destructive">
                  {getTranslation(language, "seekHelp")}
                </p>
              </Card>
            )}
            {activeTab === "emergency" && <EmergencyGuidelines language={language} />}
            {activeTab === "responsible" && <ResponsibleUse language={language} />}
            {activeTab === "symptom" && <div className="mt-8"><HealthTips language={language} /></div>}
          </div>
        </div>

     
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
          <div className="grid grid-cols-5">
            {bottomTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              const label = tab.id === "emergency" 
                ? "103" 
                : getTranslation(language, `tab.${tab.id}`)

              return (
                <Button
                  key={tab.id}
                  variant="ghost"
                  className={`flex flex-col items-center gap-1 py-3 px-1
                    ${isActive ? "text-primary" : "text-muted-foreground"}
                    ${tab.critical && isActive ? "text-destructive" : ""}
                  `}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon className={`h-6 w-6 ${tab.critical ? "fill-current" : ""}`} 
                        strokeWidth={isActive ? 2.5 : 1.8} />
                  <span className="text-[10px] font-medium whitespace-nowrap overflow-hidden text-ellipsis w-full px-1">
                    {label}
                  </span>
                  {isActive && <div className="absolute bottom-0 h-1 w-12 bg-primary rounded-full" />}
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      <main className="hidden md:block min-h-screen bg-background">

        <header className="border-b bg-card sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">{getTranslation(language, "title")}</h1>
              <p className="text-sm text-muted-foreground">{getTranslation(language, "subtitle")}</p>
            </div>
            <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
          </div>
        </header>

        <div className="border-b bg-card sticky top-[73px] z-40">
          <div className="max-w-6xl mx-auto px-6 py-3">
            <div className="flex gap-3">
              {bottomTabs.map((tab) => {
                const Icon = tab.icon
                const fullLabel = tab.id === "emergency" 
                  ? "Tez yordam (103)" 
                  : getTranslation(language, `full.${tab.id === "disclaimer" ? "about" : tab.id === "symptom" ? "symptomChecker" : "medicineLookup"}`) 
                    || getTranslation(language, `tab.${tab.id}`)

                return (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    onClick={() => setActiveTab(tab.id)}
                    className={activeTab === tab.id 
                      ? `${tab.critical ? "bg-destructive hover:bg-destructive/90" : "bg-primary"} text-white` 
                      : ""}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {fullLabel}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          {activeTab === "symptom" && <SymptomChecker language={language} />}
          {activeTab === "medicine" && <MedicineLookup language={language} />}
          {activeTab === "disclaimer" && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">{getTranslation(language, "full.about")}</h2>
              <p className="text-muted-foreground leading-relaxed">{getTranslation(language, "disclaimer")}</p>
              <p className="text-destructive font-medium mt-4">{getTranslation(language, "seekHelp")}</p>
            </Card>
          )}
          {activeTab === "emergency" && <EmergencyGuidelines language={language} />}
          {activeTab === "responsible" && <ResponsibleUse language={language} />}
          {activeTab === "symptom" && <div className="mt-12"><HealthTips language={language} /></div>}
        </div>
      </main>
    </>
  )
}