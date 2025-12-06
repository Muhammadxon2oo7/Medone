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

