"use client"

import { Card } from "@/components/ui/card"
import type { Language } from "@/lib/i18n"

interface HealthTipsProps {
  language: Language
}

const tips: Record<Language, { title: string; items: string[] }> = {
  uz: {
    title: "Sog'liq qolish maslahatları",
    items: [
      "Har kuni 8 soat uxlang",
      "Ko'p suv iching - kamida 2 litr kuniga",
      "Muntazam harakat qiling - kamida 30 daqiqa",
      "Stress kam qiling - meditatsiya qiling",
      "Sog'liq oziqa isteʼmol qiling",
      "Qo'li bilan ovqatlanishdan avval yuvang",
    ],
  },
  ru: {
    title: "Советы по здоровью",
    items: [
      "Спите 8 часов в день",
      "Пейте много воды - минимум 2 литра",
      "Занимайтесь спортом - минимум 30 минут",
      "Снижайте стресс - медитируйте",
      "Ешьте здоровую пищу",
      "Мойте руки перед едой",
    ],
  },
  en: {
    title: "Health Tips",
    items: [
      "Sleep 8 hours per day",
      "Drink plenty of water - at least 2 liters",
      "Exercise regularly - at least 30 minutes",
      "Manage stress - try meditation",
      "Eat healthy foods",
      "Wash hands before eating",
    ],
  },
}

export function HealthTips({ language }: HealthTipsProps) {
  const tip = tips[language]

  return (
    <Card className="p-6 space-y-4 bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/30">
      <h3 className="font-semibold text-lg text-primary">{tip.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tip.items.map((item, idx) => (
          <div key={idx} className="flex gap-3">
            <div className="text-accent flex-shrink-0 font-bold">✓</div>
            <p className="text-sm text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
