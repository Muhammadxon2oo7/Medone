
import { NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

if (!GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY .env.local faylda yo‘q!")
}

interface Medicine {
  name: string
  usedFor: string
  sideEffects: string
  precautions: string
  disclaimer?: string
}

export async function POST(request: NextRequest) {
  if (!GEMINI_API_KEY) {
    return NextResponse.json(
      { response: "Server xatosi: API kalit topilmadi." },
      { status: 500 }
    )
  }

  try {
    const { medicineName, language = "uz" } = await request.json()

    if (!medicineName?.trim()) {
      return NextResponse.json({
        found: false,
        response: "Dori nomi bo‘sh bo‘lmasligi kerak.",
      })
    }

    const baseDisclaimerUz =
      "Bu umumiy ma’lumot. Shifokor yoki farmatsevt maslahatini hech qachon almashtirmaydi. Dori qabul qilishdan oldin albatta mutaxassis bilan maslahatlashing. Jiddiy holatlarda darhol 103 chaqiring!"

    const baseDisclaimerRu =
      "Это общая информация и не заменяет консультацию врача или фармацевта. Перед приёмом любых лекарств обязательно проконсультируйтесь со специалистом. При серьёзных симптомах — срочно вызывайте 103!"

    const baseDisclaimerEn =
      "This is general information only and does not replace advice from a doctor or pharmacist. Always consult a healthcare professional before taking any medicine. In serious cases, call emergency services immediately!"

    const disclaimer =
      language === "uz"
        ? baseDisclaimerUz
        : language === "ru"
        ? baseDisclaimerRu
        : baseDisclaimerEn

    const commonRules =
      "You are a health information assistant, NOT a doctor. You must NEVER provide exact dosage (mg, ml, how many times per day, duration of treatment) or prescribe treatment. Only give high-level, educational information."

    const userPrompt =
      language === "uz"
        ? `
${commonRules}

"${medicineName}" dorisi haqida umumiy MA’LUMOT bering.

Struktura bo‘yicha tushuntiring (lekin javobni faqat JSON formatida qaytaring):

1. Umumiy ta’rif (bu qanday dori, qaysi guruhga kiradi)
2. Asosiy qo‘llanilish sohasi (qaysi kasallik/simptomlar uchun odatda ishlatiladi)
3. Qanday ishlaydi (oddiy, tushunarli tilda)
4. Odatdagi keng tarqalgan yon ta’sirlari (faqat misollar, % yoki aniq sonlar shart emas)
5. Ogohlantirishlar va ehtiyot choralar (masalan: homiladorlik, allergiya, surunkali kasalliklar va hokazo bo‘yicha umumiy tavsiyalar)
6. Oxirida ogohlantirish: "${disclaimer}"

MUHIM:
- DOZA, nechta tabletka, necha marta ichish, necha kun ichish kabi aniq ma’lumotlarni YOZMANG.
- Retsept yozmang.
- Javobingiz faqat JSON bo‘lsin, izohlar YO‘Q, markdown YO‘Q, matn YO‘Q.

JSON format aynan shunday bo‘lsin:

{
  "name": "Dori nomi",
  "usedFor": "• band1\\n• band2 ...",
  "sideEffects": "• band1\\n• band2 ...",
  "precautions": "• band1\\n• band2 ...",
  "disclaimer": "${disclaimer}"
}
`
        : language === "ru"
        ? `
${commonRules}

Дайте ОБЩУЮ информацию о лекарстве "${medicineName}".

Объясните по структуре (но верните ответ ТОЛЬКО в формате JSON):

1. Общая характеристика (что за препарат, к какой группе относится)
2. Основные показания (при каких симптомах/заболеваниях обычно используется)
3. Как действует (простым понятным языком)
4. Наиболее частые побочные эффекты (примеры, без точных процентов)
5. Предупреждения и меры предосторожности (беременность, аллергия, хронические заболевания и т.п.)
6. В конце предупредите: "${disclaimer}"

ВАЖНО:
- НЕ указывайте дозировку, схему приёма и длительность лечения.
- НЕ назначайте лечение.
- Ответ должен быть ТОЛЬКО JSON, без пояснений, без markdown.

Формат JSON:

{
  "name": "Название препарата",
  "usedFor": "• пункт1\\n• пункт2 ...",
  "sideEffects": "• пункт1\\n• пункт2 ...",
  "precautions": "• пункт1\\n• пункт2 ...",
  "disclaimer": "${disclaimer}"
}
`
        : `
${commonRules}

Give GENERAL information about the medicine "${medicineName}".

Explain according to this structure (but return ONLY JSON):

1. General description (what the drug is, what group it belongs to)
2. Main uses (conditions/symptoms it is usually used for)
3. How it works (simple explanation)
4. Common side effects (examples only)
5. Warnings and precautions (pregnancy, allergies, chronic diseases, etc.)
6. At the end include warning: "${disclaimer}"

IMPORTANT:
- Do NOT provide dosage, schedule, or duration details.
- Do NOT prescribe treatment.
- Answer must be STRICT JSON, no markdown, no comments.

JSON format:

{
  "name": "Medicine name",
  "usedFor": "• item1\\n• item2 ...",
  "sideEffects": "• item1\\n• item2 ...",
  "precautions": "• item1\\n• item2 ...",
  "disclaimer": "${disclaimer}"
}
`

    const contents = [
      {
        role: "user" as const,
        parts: [{ text: userPrompt }],
      },
    ]

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 600,
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
        }),
      }
    )

    if (!res.ok) {
      const err = await res.text()
      console.error("Gemini API xatosi (medicine lookup):", err)
      return NextResponse.json({
        found: false,
        response:
          "Dori haqida hozircha ma’lumot bera olmayapman. Keyinroq urinib ko‘ring.",
      })
    }

    const data = await res.json()
    let raw = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

    if (!raw) {
      return NextResponse.json({
        found: false,
        response: "Ma’lumot olinmadi. Dori nomini yana bir bor tekshirib yozing.",
      })
    }

    if (raw.startsWith("```")) {
      raw = raw.replace(/^```[a-zA-Z]*\n?/, "").replace(/```$/, "").trim()
    }

    let medicine: Medicine

    try {
      medicine = JSON.parse(raw)

      if (!medicine.name) {
        medicine.name = medicineName
      }

      return NextResponse.json({
        found: true,
        medicine,
      })
    } catch (e) {
      console.error("JSON parse xatosi (medicine lookup):", e, raw)

      return NextResponse.json({
        found: true,
        medicine: {
          name: medicineName,
          usedFor: raw,
          sideEffects: "",
          precautions: "",
          disclaimer,
        },
      })
    }
  } catch (error) {
    console.error("Server xatosi (medicine lookup):", error)
    return NextResponse.json({
      found: false,
      response: "Texnik xatolik. Internet yoki server sozlamalarini tekshiring.",
    })
  }
}
