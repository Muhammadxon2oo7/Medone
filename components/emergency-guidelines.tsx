"use client"

import { Card } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import type { Language } from "@/lib/i18n"

interface EmergencyGuidelinesProps {
  language: Language
}

const emergencyData: Record<
  Language,
  {
    title: string
    emergencyTitle: string
    emergencySigns: string[]
    firstAidTitle: string
    firstAidTips: { title: string; steps: string[] }[]
  }
> = {
  uz: {
    title: "Shoshqaloq va Ogohlantiruvchi Belgilari",
    emergencyTitle: "Darhol Shifoxonaga Murojaat Qiling:",
    emergencySigns: [
      "Tizzdan og'riq yoki qiyshiq nafas olish",
      "Og'ir jiddiy qon oqishi",
      "Aqldan ketish yoki bilim yo'qolishi",
      "Og'ir allergiya reaktsiyalari (muz, qichish)",
      "Keskin ko'z og'riqlari",
      "Keskin qorin og'riqlari",
      "Harorat 40°C dan oshib ketdi va keskin bumiltlangan",
      "Jinoiy zararlanish",
    ],
    firstAidTitle: "Asosiy Birinchi Yordamni",
    firstAidTips: [
      {
        title: "Keskin jiyalash",
        steps: [
          "Quruvchi mulfillari bilan o'rah",
          "Soyada yoki ochiq havoda o'tkazish",
          "Soyab havo to'g'isida",
          "Agar harorat 103°F (39.4°C) dan oshsa, shifo'xonaga murojaat qiling",
        ],
      },
      {
        title: "Minord kesab",
        steps: [
          "Yarani toza suvda yuvang",
          "Steril gazga bosing",
          "Kerak bo'lsa antibiotic malhami qo'llang",
          "Agar yarani katta bo'lsa yoki qon kelib chiqsa, tibbiy yordamni qidiring",
        ],
      },
      {
        title: "Bosh og'rigim",
        steps: [
          "Tinch va soyaviy joyda yotting",
          "Sovuq suv iching yoki kompres qo'llang",
          "Stressni kamaytiring",
          "Agar 48 soatdan ko'p bo'lsa yoki o'zgarsa, shifo'xonaga murojaat qiling",
        ],
      },
    ],
  },
  ru: {
    title: "Неотложные и Предупреждающие Признаки",
    emergencyTitle: "Немедленно Обратитесь в Больницу:",
    emergencySigns: [
      "Боль в груди или затруднение дыхания",
      "Сильное кровотечение",
      "Потеря сознания или спутанность сознания",
      "Тяжелые аллергические реакции (опухоль, отек горла)",
      "Острая боль в глазах",
      "Острая боль в животе",
      "Температура выше 40°C с ознобом",
      "Серьезные травмы",
    ],
    firstAidTitle: "Основная Первая Помощь",
    firstAidTips: [
      {
        title: "При лихорадке",
        steps: [
          "Оберните прохладными тканями",
          "Отдыхайте в прохладном месте",
          "Пейте прохладную воду",
          "При температуре выше 39.4°C обратитесь к врачу",
        ],
      },
      {
        title: "При небольших ранах",
        steps: [
          "Промойте рану чистой водой",
          "Надавите стерильной марлей",
          "Нанесите антибактериальную мазь при необходимости",
          "При больших ранах или кровотечении обратитесь к врачу",
        ],
      },
      {
        title: "При головной боли",
        steps: [
          "Отдыхайте в тихом, прохладном месте",
          "Пейте воду",
          "Приложите холодный компресс",
          "Если боль продолжается более 48 часов, обратитесь к врачу",
        ],
      },
    ],
  },
  en: {
    title: "Emergency and Warning Signs",
    emergencyTitle: "Seek Immediate Medical Attention For:",
    emergencySigns: [
      "Chest pain or difficulty breathing",
      "Severe bleeding",
      "Loss of consciousness or confusion",
      "Severe allergic reactions (swelling, throat closure)",
      "Sudden vision changes or severe eye pain",
      "Severe abdominal pain",
      "Fever above 40°C (104°F) with chills",
      "Serious injuries or trauma",
    ],
    firstAidTitle: "Basic First Aid Guide",
    firstAidTips: [
      {
        title: "For Fever",
        steps: [
          "Wrap in cool, damp cloths",
          "Rest in a cool environment",
          "Drink cool water or electrolyte solution",
          "Seek medical help if temperature exceeds 103°F (39.4°C)",
        ],
      },
      {
        title: "For Minor Wounds",
        steps: [
          "Rinse wound with clean water",
          "Apply pressure with sterile gauze",
          "Apply antibiotic ointment if available",
          "Seek help if bleeding is severe or wound is deep",
        ],
      },
      {
        title: "For Headaches",
        steps: [
          "Rest in a quiet, dark room",
          "Drink water to stay hydrated",
          "Apply a cold compress to forehead",
          "Seek medical attention if pain persists beyond 48 hours",
        ],
      },
    ],
  },
}

export function EmergencyGuidelines({ language }: EmergencyGuidelinesProps) {
  const data = emergencyData[language]

  return (
    <div className="space-y-6">

      <Alert className="border-destructive/50 bg-destructive/10">
        <AlertTitle className="text-destructive font-semibold">{data.emergencyTitle}</AlertTitle>
        <AlertDescription>
          <ul className="space-y-2 mt-3">
            {data.emergencySigns.map((sign, idx) => (
              <li key={idx} className="flex gap-2 text-sm">
                <span className="text-destructive font-bold">•</span>
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </AlertDescription>
      </Alert>

      <Card className="p-6 space-y-6 border-accent/30">
        <h3 className="text-xl font-semibold text-primary">{data.firstAidTitle}</h3>

        {data.firstAidTips.map((tip, idx) => (
          <div key={idx} className="space-y-2 pb-4 border-b border-border last:border-0 last:pb-0">
            <h4 className="font-medium text-foreground">{tip.title}</h4>
            <ul className="space-y-1">
              {tip.steps.map((step, sidx) => (
                <li key={sidx} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary flex-shrink-0">→</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Card>
    </div>
  )
}
