"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Loader2, Search, Pill, AlertCircle, Check, AlertTriangle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

interface Medicine {
  name: string
  usedFor: string
  sideEffects: string
  precautions: string
  disclaimer?: string
}

const translations = {
  uz: {
    placeholder: "Dori nomini kiriting...",
    search: "Qidirish",
    loading: "Yuklanmoqda...",
    notFound: (q: string) => `«${q}» topilmadi`,
    tryAgain: "Boshqa nom bilan urining",
    usedFor: "Qo‘llaniladi",
    sideEffects: "Yon ta‘sirlari",
    precautions: "Diqqat",
    disclaimer: "Bu faqat ma’lumot. Shifokor maslahati zarur!",
  },
  ru: {
    placeholder: "Название лекарства...",
    search: "Найти",
    loading: "Загрузка...",
    notFound: (q: string) => `«${q}» не найдено`,
    tryAgain: "Попробуйте другое название",
    usedFor: "Применение",
    sideEffects: "Побочные эффекты",
    precautions: "Осторожно",
    disclaimer: "Только справочная информация. Обязательно проконсультируйтесь с врачом!",
  },
  en: {
    placeholder: "Medicine name...",
    search: "Search",
    loading: "Loading...",
    notFound: (q: string) => `No info for «${q}»`,
    tryAgain: "Try another name",
    usedFor: "Used for",
    sideEffects: "Side effects",
    precautions: "Caution",
    disclaimer: "General information only. Always consult a doctor!",
  },
} as const

export function MedicineLookup({ 
  language = "uz" 
}: { language?: "uz" | "ru" | "en" }) {
  const [query, setQuery] = useState("")
  const [medicine, setMedicine] = useState<Medicine | null>(null)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const t = translations[language]

  const search = async () => {
    if (!query.trim()) return

    setLoading(true)
    setNotFound(false)
    setMedicine(null)

    try {
      const res = await fetch("/api/medicine-lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ medicineName: query.trim(), language }),
      })
      const data = await res.json()

      if (!res.ok || !data.found) {
        setNotFound(true)
      } else {
        setMedicine(data.medicine)
      }
    } catch {
      setNotFound(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen  ">
      <div className="mx-auto space-y-5">

        {/* Qidiruv */}
        <Card className="p-4 shadow-lg border-0">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder={t.placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && search()}
                disabled={loading}
                className="h-12 pl-10 text-base border-gray-200 focus:border-blue-500"
              />
            </div>
            <Button
              onClick={search}
              disabled={loading || !query.trim()}
              className="h-12 px-6 bg-blue-600 hover:bg-blue-700"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
            </Button>
          </div>
        </Card>

        {/* Topilmadi */}
        {notFound && (
          <Card className="p-8 text-center bg-red-50 border-0">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-3" />
            <p className="text-lg font-medium text-red-800">{t.notFound(query)}</p>
            <p className="text-gray-600 mt-1">{t.tryAgain}</p>
          </Card>
        )}

        {/* Natija – ixcham va aniq */}
        {medicine && (
          <div className="space-y-4">
            {/* Sarlavha */}
            <Card className="p-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0">
              <div className="flex items-center gap-3">
                <Pill className="h-8 w-8" />
                <h1 className="text-2xl font-bold">{medicine.name}</h1>
              </div>
            </Card>

            {/* Qo‘llanilishi */}
            {medicine.usedFor && (
              <Card className="p-5 border-0">
                <div className="flex gap-4">
                  <div className="p-2 h-[40px] bg-green-100 rounded-lg">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-800 mb-1">{t.usedFor}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                      {medicine.usedFor}
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Yon ta‘sirlari */}
            {medicine.sideEffects && (
              <Card className="p-5 border-0">
                <div className="flex gap-4">
                  <div className="p-2 bg-amber-100 rounded-lg h-[40px]">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-800 mb-1">{t.sideEffects}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                      {medicine.sideEffects}
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Ehtiyot */}
            {medicine.precautions && (
              <Card className="p-5 border-0">
                <div className="flex gap-4">
                  <div className="p-2 bg-rose-100 rounded-lg h-[40px]">
                    <Info className="h-6 w-6 text-rose-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-rose-800 mb-1">{t.precautions}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                      {medicine.precautions}
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Ogohlantirish */}
            <Card className="p-5 bg-red-600 text-white border-0 text-center">
              <p className="font-medium">{t.disclaimer}</p>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}