// export type Language = "uz" | "ru" | "en"

// export const translations = {
//   uz: {
//     title: "Sog'liq Yordamchisi",
//     subtitle: "AI-powered health guidance",
//     nav: {
//       symptomChecker: "Simptom Tekshiruvi",
//       medicineLookup: "Dori Qidiruvi",
//       firstAid: "Birinchi Yordamni",
//       about: "Haqida",
//     },
//     chat: {
//       placeholder: "Sizning sog'liq muammoingizni tavsiflab bering...",
//       send: "Jo'natish",
//       askQuestion: "Savolingizni beringiz",
//     },
//     medicine: {
//       search: "Dori nomini kiriting",
//       usedFor: "Ishlatiladi:",
//       sideEffects: "Yana ta'sirlari:",
//       precautions: "Ogohlantirish:",
//       notFound: "Dori topilmadi",
//     },
//     disclaimer: "Muhim: Bu ma'lumot umumiy maluma bo'lib, professional tibbiy maslahat emas.",
//     seekHelp: "Agar belgilangan muammo shiddatli bo'lsa, darhol shifoxonaga murojaat qiling.",
//   },
//   ru: {
//     title: "Помощник здоровья",
//     subtitle: "AI-powered health guidance",
//     nav: {
//       symptomChecker: "Проверка симптомов",
//       medicineLookup: "Поиск лекарств",
//       firstAid: "Первая помощь",
//       about: "О нас",
//     },
//     chat: {
//       placeholder: "Опишите вашу проблему со здоровьем...",
//       send: "Отправить",
//       askQuestion: "Задайте вопрос",
//     },
//     medicine: {
//       search: "Введите название лекарства",
//       usedFor: "Используется для:",
//       sideEffects: "Побочные эффекты:",
//       precautions: "Предупреждения:",
//       notFound: "Лекарство не найдено",
//     },
//     disclaimer: "Важно: Эта информация общего характера и не является профессиональной медицинской консультацией.",
//     seekHelp: "Если проблема серьезная, немедленно обратитесь в больницу.",
//   },
//   en: {
//     title: "Health Assistant",
//     subtitle: "AI-powered health guidance",
//     nav: {
//       symptomChecker: "Symptom Checker",
//       medicineLookup: "Medicine Lookup",
//       firstAid: "First Aid",
//       about: "About",
//     },
//     chat: {
//       placeholder: "Describe your health concern...",
//       send: "Send",
//       askQuestion: "Ask a question",
//     },
//     medicine: {
//       search: "Enter medicine name",
//       usedFor: "Used for:",
//       sideEffects: "Side effects:",
//       precautions: "Precautions:",
//       notFound: "Medicine not found",
//     },
//     disclaimer: "Important: This information is general guidance and not a substitute for professional medical advice.",
//     seekHelp: "If the issue is severe, seek immediate medical attention.",
//   },
// }

// export const getTranslation = (lang: Language, key: string): string => {
//   const keys = key.split(".")
//   let value: any = translations[lang]
//   for (const k of keys) {
//     value = value[k]
//     if (!value) return key
//   }
//   return value
// }

// lib/i18n.ts
export type Language = "uz" | "ru" | "en"

export const translations = {
  uz: {
    title: "Sog‘liq Yordamchisi",
    subtitle: "AI yordamchisi",
    tab: {
      symptom: "Maslahat",
      medicine: "Dorilar",
      about: "Haqida",
      emergency: "103",
      responsible: "Mas'uliyat",
    },
   
    full: {
      symptomChecker: "Simptom Tekshiruvi",
      medicineLookup: "Dori Qidiruvi",
      about: "Ilova haqida",
    },
    chat: {
      placeholder: "Muammoingizni yozing...",
      send: "Yuborish",
      askQuestion: "Savolingizni bering",
    },
    medicine: {
      search: "Dori nomini kiriting",
      usedFor: "Qo‘llaniladi:",
      sideEffects: "Nojo‘ya ta‘siri:",
      precautions: "Ehtiyot choralari:",
      notFound: "Dori topilmadi",
    },
    disclaimer: "Bu umumiy ma’lumot. Shifokor o‘rnini bosa olmaydi!",
    seekHelp: "Jiddiy bo‘lsa — darhol 103 chaqiring!",
  },
  ru: {
    title: "Помощник здоровья",
    subtitle: "AI-помощник",
    tab: {
      symptom: "Симптомы",
      medicine: "Лекарства",
      about: "О нас",
      emergency: "103",
      responsible: "Ответственность",
    },
    full: {
      symptomChecker: "Проверка симптомов",
      medicineLookup: "Поиск лекарств",
      about: "О приложении",
    },
    chat: {
      placeholder: "Опишите проблему...",
      send: "Отправить",
      askQuestion: "Задайте вопрос",
    },
    medicine: {
      search: "Название лекарства",
      usedFor: "Применяется:",
      sideEffects: "Побочные:",
      precautions: "Осторожно:",
      notFound: "Не найдено",
    },
    disclaimer: "Это общая информация. Не заменяет врача!",
    seekHelp: "Срочно — звоните 103!",
  },
  en: {
    title: "Health Assistant",
    subtitle: "AI helper",
    tab: {
      symptom: "Symptoms",
      medicine: "Meds",
      about: "About",
      emergency: "103",
      responsible: "Responsibility",
    },
    full: {
      symptomChecker: "Symptom Checker",
      medicineLookup: "Medicine Search",
      about: "About App",
    },
    chat: {
      placeholder: "Describe your issue...",
      send: "Send",
      askQuestion: "Ask a question",
    },
    medicine: {
      search: "Medicine name",
      usedFor: "Used for:",
      sideEffects: "Side effects:",
      precautions: "Precautions:",
      notFound: "Not found",
    },
    disclaimer: "General info only. Not medical advice!",
    seekHelp: "Emergency? Call 103 now!",
  },
}

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split(".")
  let value: any = translations[lang]
  for (const k of keys) {
    value = value?.[k]
    if (value === undefined) return key
  }
  return value || key
}