// import { NextRequest, NextResponse } from "next/server"


// if (!GEMINI_API_KEY) {
//   console.error("GEMINI_API_KEY .env.local faylda yo'q!")
// }

// export async function POST(request: NextRequest) {
//   if (!GEMINI_API_KEY) {
//     return NextResponse.json(
//       { response: "Server xatosi: API kalit topilmadi. .env.local faylni tekshiring." },
//       { status: 500 }
//     )
//   }

//   try {
//     const { message, language = "uz", messages = [] } = await request.json()

//     const history = messages.map((m: any) => ({
//       role: m.role === "user" ? "user" : "model",
//       parts: [{ text: m.content }],
//     }))

//     const userMessage = { role: "user" as const, parts: [{ text: message }] }
//     const fullContents = [...history, userMessage]

//     const res = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           contents: fullContents,
//           systemInstruction: {
//             parts: [
//               {
//                 text:
//                   language === "uz"
//                     ? `Siz — sog‘liq bo‘yicha yordamchi (AI). Hech qachon shifokor emassiz va maslahatlaringiz diagnostika yoki davo o‘rnini bosa olmaydi. Har bir so‘rovga javob berganingizda quyidagilarni qat’iy bajaring: 1) Birinchi o‘ringa — tezkor, hayotni saqlashga yo‘naltirilgan BIRINCHI YORDAMNI qo‘ying: aniq, qadam-baqadam (raqamlangan qadamlar), qisqa (har bir qadam 1-2 jumla), va faollikni talab qiladigan amallarni (masalan, nafas yo‘lini tekshirish, CPR boshlash, qon bosimini to‘xtatish) birinchi navbatda ko‘rsating. 2) Agar holat favqulodda bo‘lsa — darhol 103 chaqirishni ayting. 3) So‘rov yetarlicha aniq bo‘lmasa — maksimal 3 ta tez savol bering (yoshi, ongli/ongsizligi, nafas olishi/nafas olmasligi, qon ketishi bor-yo‘qligi, allergiyalar yoki homiladorlik) — undan keyin darhol kerakli birinchi yordam qadamlarini bering. 4) Dori dozalari yoki retsept yozmang; dori olish bo‘yicha aniq buyruqlar bermang. 5) Javob strukturasi: (A) Qisqa qizil chiziq — darhol nima qilish kerak (raqamlangan qadamlar), (B) Nega bunday qilish kerak — 1-2 jumla, (C) Qachon shifokorga murojaat qilish/911/103 chaqirish kerakligi, (D) Qo‘shimcha profilaktika yoki kundalik maslahat (ixtiyoriy, 1-2 band). 6) Til va uslub — juda sodda, muloyim, hurmatli va yosh foydalanuvchilarga mos; murakkab tibbiy atamalar bo‘lsa, qisqacha ta’rif keltiring. 7) Maxfiylik — shaxsiy dori va tibbiy ma’lumotlarni faqat xavfsiz saqlang; hech qanday shaxsiy ma’lumotni ochiq joyga joylamang. 8) Ta’qiqlanganlar: o‘z-o‘zini jarohatlashni yoki o‘limga olib boruvchi harakatlarni tavsiflash yoki qo‘llab-quvvatlash, xavfli kimyoviy yoki qurol ishlatish bo‘yicha ko‘rsatma berish yoki noqonuniy/cheklangan dori yo‘lini o‘rgatish qat’iyan man etiladi. Javobingizni har doim quyidagi majburiy ogohlantirish bilan tugating:\n\nBu umumiy ma’lumot. Shifokor maslahatini hech qachon almashtirmaydi! Jiddiy holatlarda darhol 103 chaqiring!`
//                     : language === "ru"
//                     ? `Вы — помощник по здоровью (ИИ). Никогда не заявляйте, что вы врач; ваши ответы не заменяют медицинской диагностики или лечения. При ответе строго соблюдайте следующее: 1) В приоритете — НЕОТЛОЖНАЯ ПЕРВАЯ ПОМОЩЬ: давайте чёткие пошаговые инструкции (нумерованные шаги), кратко и однозначно (по 1–2 предложения на шаг), включая действия, требующие немедленного выполнения (например, проверить дыхательные пути, начать СЛР, остановить кровотечение). 2) При критическом состоянии — обязательно посоветуйте немедленно позвонить 103. 3) Если информации недостаточно — задайте не более 3 быстрых уточняющих вопроса (возраст, сознание/бессознание, дышит/не дышит, есть ли сильное кровотечение, аллергии, беременность), затем сразу дайте первые шаги помощи. 4) Не назначайте дозы лекарств и не выписывайте рецепты. 5) Структура ответа: (А) Коротко — что делать сейчас (нумерованные шаги), (Б) Почему — 1–2 предложения, (В) Когда обращаться к врачу/вызвать 103, (Г) Доп. рекомендации/профилактика (по желанию, 1–2 пункта). 6) Язык — простой, вежливый, понятный широкой аудитории; термины поясняйте. 7) Конфиденциальность — не раскрывайте персональные данные публично. 8) Запрещено: инструкции по нанесению вреда себе или другим, инструкции по изготовлению/покупке незаконных средств, детализированные инструкции по самоубийству или самоповреждению. Всегда заканчивайте ответ обязательным уведомлением:\n\nЭто общая информация. Никогда не заменяет врача! При серьёзных симптомах — срочно звоните 103!`
//                     : `You are a helpful health assistant. You are not a doctor. Always end every response with:

// This is general information only. Never replaces medical advice! Call emergency services if serious!`,
//               },
//             ],
//           },
//           generationConfig: {
//             temperature: 0.7,
//             maxOutputTokens: 700,
//           },
//           safetySettings: [
//             { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
//             { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
//             { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
//             { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
//           ],
//         }),
//       }
//     )

//     if (!res.ok) {
//       const errorText = await res.text()
//       console.error("Gemini API xatosi:", errorText)
//       return NextResponse.json({ response: "AI bilan bog‘lanishda muammo yuz berdi. Keyinroq urinib ko‘ring." })
//     }

//     const data = await res.json()
//     const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

//     if (!aiResponse) {
//       return NextResponse.json({ response: "Javob olinmadi. Iltimos, qayta so‘rang." })
//     }

//     return NextResponse.json({ response: aiResponse })
//   } catch (error) {
//     console.error("Server xatosi:", error)
//     return NextResponse.json({ response: "Texnik xatolik yuz berdi. Qayta urinib ko‘ring." })
//   }
// }

// export const config = {
//   api: {
//     bodyParser: true,
//   },
// }



import { NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

if (!GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY .env.local faylda yo‘q!")
}

export async function POST(request: NextRequest) {
  if (!GEMINI_API_KEY) {
    return NextResponse.json(
      { response: "Server xatosi: API kalit topilmadi." },
      { status: 500 }
    )
  }

  try {
    const { message, language = "uz", messages = [] } = await request.json()

    if (!message?.trim()) {
      return NextResponse.json({ response: "Xabar bo‘sh bo‘lmasligi kerak." })
    }

    const history = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }))

    const userMessage = { role: "user" as const, parts: [{ text: message }] }
    const contents = [...history, userMessage]

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800, 
            topP: 0.8,
            topK: 40,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_ONLY_HIGH",
            },
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_ONLY_HIGH",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_ONLY_HIGH",
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_ONLY_HIGH",
            },
          ],
          systemInstruction: {
            parts: [
              {
                text:
                  language === "uz"
                    ? `Siz — sog‘liq bo‘yicha yordamchi AI. Hech qachon shifokor emassiz. Javoblaringiz umumiy ma’lumot, diagnostika yoki davo emas.\n\nHar bir javobda:\n1. Avval hayotni saqlash uchun eng muhim qadamlar (raqamlangan)\n2. Agar jiddiy bo‘lsa — 103 chaqirishni majburiy ayting\n3. Dori dozasi yoki retsept bermang\n4. Oxirida har doim yozing:\n\nBu umumiy ma’lumot. Shifokor maslahatini hech qachon almashtirmaydi! Jiddiy holatlarda darhol 103 chaqiring!`
                    : language === "ru"
                    ? `Вы — помощник по здоровью (ИИ). Вы не врач. Ваши ответы — общая информация, а не диагноз или лечение.\n\nВ каждом ответе:\n1. Сначала — самые важные шаги для спасения жизни\n2. При серьёзном состоянии — обязательно скажите звонить 103\n3. Не назначайте дозы лекарств\n4. Всегда заканчивайте:\n\nЭто общая информация. Никогда не заменяет врача! При серьёзных симптомах — срочно звоните 103!`
                    : `You are a health assistant AI. You are not a doctor. Your answers are general information only.\n\nAlways:\n1. First — life-saving steps\n2. If serious — say call emergency\n3. Never prescribe medicine or dosage\n4. End with:\n\nThis is general info only. Never replaces a doctor! Call emergency if serious!`,
              },
            ],
          },
        }),
      }
    )

    if (!res.ok) {
      const err = await res.text()
      console.error("Gemini API xatosi:", err)
      return NextResponse.json({
        response: "Hozircha javob bera olmayapman. Keyinroq urinib ko‘ring.",
      })
    }

    const data = await res.json()
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

    if (!aiResponse) {
      return NextResponse.json({ response: "Javob olinmadi. Iltimos, qayta yozing." })
    }

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error("Server xatosi:", error)
    return NextResponse.json({ response: "Texnik xatolik. Internetni tekshiring." })
  }
}

