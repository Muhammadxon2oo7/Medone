"use client"

import { Card } from "@/components/ui/card"
import type { Language } from "@/lib/i18n"

interface ResponsibleUseProps {
  language: Language
}

const responsibleUseData: Record<
  Language,
  {
    title: string
    sections: { heading: string; content: string }[]
  }
> = {
  uz: {
    title: "Mas'ul Ishlatish va Cheklovalar",
    sections: [
      {
        heading: "Bu Platformaning Maqsadi",
        content:
          "Bu platform umum sog'liq ma'lumotini taqdim etadi. Bu professional tibbiy maslahat emas, tanishlantiruvchi ma'lumot emas va tibbiy maslahat almashtiromaydi. Salliqaning har qanday muammosi uchun lisenziyalangan healthcare professional bilan maslahat qiling.",
      },
      {
        heading: "Cheklovalar",
        content:
          "Bu platform ot diagnoze qilmaydi, tora qaytarmaydi, chuqur bahosi bermaydi, hamkorlik yo'l ko'rsatmaydi yoki shoshqaloq tibbiy shartlar bilan muolaja qilmaydi. Har qanday jiddiy sog'liq muammosi uchun darhol shifo'xonaga murojaat qiling.",
      },
      {
        heading: "Shaxsiy Mas'uliyat",
        content:
          "Bu platformadan olingan ma'lumot asosida qabul qilgan har qanday qaror uchun siz mas'ul. Salliqani to'g'ri shakarda nislat qilish uchun litsenziyalangan professional bilan maslahat qiling.",
      },
      {
        heading: "Priyaddan Tashqari",
        content:
          "Biz har qanday salliqaning soniga, kelib chiqishoviga yoki to'layvon atrofida biron qayta jaza olish haqida mas'ul emas. Platform SHART TIBBIY MASLAHATI EMAS deb bilang.",
      },
    ],
  },
  ru: {
    title: "Ответственное Использование и Ограничения",
    sections: [
      {
        heading: "Назначение этой платформы",
        content:
          "Эта платформа предоставляет общую информацию о здоровье. Это не профессиональная медицинская консультация, не замена медицинскому обслуживанию. Для любых проблем со здоровьем проконсультируйтесь с лицензированным медицинским специалистом.",
      },
      {
        heading: "Ограничения",
        content:
          "Эта платформа не диагностирует заболевания, не прописывает лекарства, не проводит обследования, не дает лечение и не обслуживает неотложные медицинские состояния. При серьезных проблемах со здоровьем немедленно обратитесь в больницу.",
      },
      {
        heading: "Личная ответственность",
        content:
          "Вы несете личную ответственность за любое решение, принятое на основе информации с этой платформы. Всегда консультируйтесь с лицензированным профессионалом здравоохранения для надлежащего медицинского обслуживания.",
      },
      {
        heading: "Отказ от ответственности",
        content:
          "Мы не несем ответственность за какие-либо убытки, травмы или негативные последствия, возникающие из-за использования этой платформы. Используйте эту платформу только для получения общей информации.",
      },
    ],
  },
  en: {
    title: "Responsible Use and Limitations",
    sections: [
      {
        heading: "Purpose of This Platform",
        content:
          "This platform provides general health information. It is not professional medical advice and does not replace healthcare services. For any health concerns, consult with a licensed healthcare professional.",
      },
      {
        heading: "Limitations",
        content:
          "This platform does not diagnose diseases, prescribe medications, provide examinations, recommend treatments, or handle medical emergencies. For serious health issues, seek immediate medical attention.",
      },
      {
        heading: "Personal Responsibility",
        content:
          "You are personally responsible for any decisions made based on information from this platform. Always consult with a licensed healthcare professional for proper medical care.",
      },
      {
        heading: "Liability Disclaimer",
        content:
          "We are not liable for any injuries, losses, or negative consequences resulting from the use of this platform. Use this platform only for general information purposes.",
      },
    ],
  },
}

export function ResponsibleUse({ language }: ResponsibleUseProps) {
  const data = responsibleUseData[language]

  return (
    <Card className="p-6 space-y-6 border-destructive/20 bg-destructive/5">
      <h2 className="text-2xl font-bold text-primary">{data.title}</h2>

      <div className="space-y-4">
        {data.sections.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="font-semibold text-foreground">{section.heading}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
