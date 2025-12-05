import { searchMedicines } from "@/lib/medicines-db"
import type { Language } from "@/lib/i18n"
import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { medicineName, language } = await request.json()

    const dbResults = searchMedicines(medicineName)

    if (dbResults.length > 0) {
      const medicine = dbResults[0]
      const info = medicine.info[language as Language] || medicine.info.en

      const disclaimer =
        language === "uz"
          ? "\n\n⚠️ ESLATMA: Bu ta'lim ma'lumatdir. Dori qabul qilishdan oldin doktor yoki fаrmaceut bilan maslahat qiling."
          : language === "ru"
            ? "\n\n⚠️ ВНИМАНИЕ: Это образовательная информация. Проконсультируйтесь с врачом или фармацевтом перед приемом."
            : "\n\n⚠️ DISCLAIMER: This is educational information. Consult a doctor or pharmacist before taking any medicine."

      return Response.json({
        found: true,
        medicine: {
          name: medicine.names[language as Language] || medicine.names.en,
          usedFor: info.usedFor + disclaimer,
          sideEffects: info.sideEffects,
          precautions: info.precautions,
        },
      })
    }

    const langName = language === "uz" ? "Uzbek" : language === "ru" ? "Russian" : "English"

    const systemPrompt = `You are a medicine information specialist. Provide factual, general information about medicines in ${langName}.

IMPORTANT: You provide EDUCATIONAL information only, NOT medical advice.

For any requested medicine, respond with ONLY a valid JSON object (no other text) with this exact format:

{
  "found": true/false,
  "medicine": {
    "name": "Official medicine name",
    "usedFor": "General conditions it is commonly used for",
    "sideEffects": "Common side effects",
    "precautions": "General precautions and warnings"
  }
}

SAFETY RULES:
- ONLY provide information about real, well-known medicines
- Include disclaimer about consulting professionals
- If unsure, return {"found": false}`

    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      system: systemPrompt,
      prompt: `Provide educational information about: ${medicineName}`,
      temperature: 0.2,
      
    })

    const result = JSON.parse(text)
    if (result.found && result.medicine) {
      const disclaimer =
        language === "uz"
          ? "\n\n⚠️ ESLATMA: Bu ta'lim ma'lumatdir. Dori qabul qilishdan oldin doktor yoki fаrmaceut bilan maslahat qiling."
          : language === "ru"
            ? "\n\n⚠️ ВНИМАНИЕ: Это образовательная информация. Проконсультируйтесь с врачом или фармацевтом перед приемом."
            : "\n\n⚠️ DISCLAIMER: This is educational information. Consult a doctor or pharmacist before taking any medicine."

      result.medicine.precautions += disclaimer
    }
    return Response.json(result)
  } catch (error) {
    console.error("Error:", error)
    return Response.json({ found: false }, { status: 500 })
  }
}
