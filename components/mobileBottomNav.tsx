
"use client"
import { MessageCircle, Pill, Info, AlertTriangle } from "lucide-react"

const tabs = [
  { id: "symptom", icon: MessageCircle, label: "tab.symptom" },
  { id: "medicine", icon: Pill, label: "tab.medicine" },
  { id: "disclaimer", icon: Info, label: "tab.disclaimer" },
  { id: "emergency", icon: AlertTriangle, label: "103", critical: true },
]

interface MobileBottomNavProps {
  activeTab: string
  onTabChange: (tab: any) => void
  t: (key: string) => string
}

export function MobileBottomNav({ activeTab, onTabChange, t }: MobileBottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-200 z-50">
      <div className="grid grid-cols-4 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          const isCritical = tab.critical

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center py-3 group relative"
            >
              <div className={`p-3 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? isCritical 
                    ? "bg-red-100 text-red-600 shadow-lg" 
                    : "bg-blue-100 text-blue-600 shadow-lg"
                  : "text-gray-500 group-hover:text-gray-700"
              }`}>
                <Icon className="h-6 w-6" strokeWidth={isActive ? 2.5 : 1.8} />
              </div>
              <span className={`text-[10px] mt-1 font-medium transition-colors ${
                isActive 
                  ? isCritical ? "text-red-600" : "text-blue-600"
                  : "text-gray-500"
              }`}>
                {tab.label === "103" ? "103" : t(tab.label)}
              </span>
              {isActive && (
                <div className={`absolute -top-1 h-1 w-12 rounded-full ${
                  isCritical ? "bg-red-500" : "bg-blue-500"
                }`} />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}