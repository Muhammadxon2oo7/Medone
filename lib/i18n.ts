export type Language = "uz" | "ru" | "en"

export const translations = {
  uz: {
    title: "Med103",
    subtitle: "AI yordamchisi",


    tab: {
      symptom: "Maslahat",
      medicine: "Dorilar",
      disclaimer: "Ogohlantirish",
      emergency: "103",
      responsible: "Mas'uliyat",
      f2f: "Mutaxassisga murojaat"
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

    disclaimerPage: {
      title: "Muhim eslatma",
      subtitle: "Bu ilova faqat ma’lumot uchun mo‘ljallangan",
      intro: "Biz sizning sog‘lig‘ingiz uchun qayg‘uramiz. Quyidagi ma’lumotlarni diqqat bilan o‘qing.",

      sections: {
        notDoctor: {
          title: "Bu ilova shifokor emas",
          text: "Bu dastur hech qachon professional tibbiy maslahat, tashxis yoki davolash o‘rnini bosa olmaydi. Har qanday sog‘liq muammosida faqat malakali shifokorga murojaat qiling."
        },
        selfTreatment: {
          title: "O‘z-o‘zini davolash xavfli",
          text: "Hech qachon internetdagi ma’lumotlar asosida dori ichmang, dozalarni o‘zgartirmang yoki shifokor ko‘rsatmasini e’tiborsiz qoldirmang. Bu jiddiy oqibatlarga olib kelishi mumkin."
        },
        generalInfo: {
          title: "Ma’lumotlar umumiy xarakterga ega",
          text: "Bu yerda keltirilgan barcha ma’lumotlar (dori haqida, simptomlar, maslahatlar) faqat umumiy ma’lumot berish uchun. Har bir odamning organizmi turlicha bo‘ladi."
        },
        emergency: {
          title: "Favqulodda holatlarda darhol yordam chaqiring",
          text: "Agar sizda yoki yaqiningizda quyidagi holatlardan biri bo‘lsa – darhol 103 chaqing:\n• Ko‘krakdagi og‘riq\n• Nafas qisilishi\n• Husini yo‘qotish\n• Kuchli qon ketishi\n• To‘satdan zaiflik yoki gapira olmaslik"
        },
        emergencyNumbers: {
          title: "Tez yordam raqamlari (O‘zbekiston)",
          text: "103 – Tez tibbiy yordam\n101 – Yong‘in xavfsizligi\n102 – Militsiya\n1050 – Zaharlanish markazi"
        }
      },

      final: "Sog‘lig‘ingiz – eng qimmat narsa. Uni hech qachon xavf ostiga qo‘ymang.",
      bold: "Shifokor – sizning eng yaxshi do‘stingiz!",
      footer: "Ushbu ilova O‘zbekiston Sog‘liqni saqlash vazirligi tomonidan tasdiqlanmagan.\nBarcha huquqlar himoyalangan © 2025 \ndasturchi: Muhammadxon.uz"
    },

 
    disclaimer: "Bu umumiy ma’lumot. Shifokor o‘rnini bosa olmaydi!",
    seekHelp: "Jiddiy bo‘lsa — darhol 103 chaqiring!",

    emergencyPage: {
      callButton: "103 — TEZ YORDAM CHAQRISH",
      callNow: "Hayotni saqlab qolish uchun bir soniya ham kechiktirmang!",
      whenToCall: "Qachon darhol 103 chaqirish kerak?",
      firstAidTitle: "Hayotni saqlab qoluvchi birinchi yordam",
      numbersTitle: "O‘zbekistondagi tez yordam raqamlari",

      cases: [
        { title: "Ko‘krakdagi og‘riq", desc: "Yurak xuruji bo‘lishi mumkin" },
        { title: "Nafas qisilishi", desc: "O‘pka yoki yurak muammosi" },
        { title: "Hushini yo‘qotish", desc: "Insult, travma yoki qand yetishmovchiligi" },
        { title: "40°C dan yuqori isitma", desc: "Ayniqsa bolalarda xavfli" },
        { title: "Bolada talvasa", desc: "Konvulsiya – darhol chaqiring!" },
        { title: "Katta kuyish", desc: "3-daraja yoki nafas yo‘lida" },
      ] as const,

      firstAid: [
        {
          title: "Kuchli qon ketish",
          steps: [
            "Toza mato bilan qattiq bosing",
            "Qo‘l/oyoqni yurakdan yuqoriga ko‘taring",
            "5-10 daqiqa bosib turing",
            "Qon to‘xtamasa – darhol 103"
          ] as const
        },
        {
          title: "Bo‘g‘ilish",
          steps: [
            "Orqadan quchoqlab qattiq bosing (Heimlich)",
            "5 marta orqaga urish + 5 marta qorinni bosish",
            "Hushini yo‘qotsa – KPR boshlang"
          ] as const
        },
        {
          title: "Yurak xuruji gumoni",
          steps: [
            "Darhol 103 chaqiring",
            "Bemorni o‘tqazib qo‘ying yoki yotqizing",
            "Agar allergiya bo‘lmasa – aspirin 300 mg chaynash"
          ] as const
        },
        {
          title: "Insult belgilari (F.A.S.T)",
          steps: [
            "Yuz osilib qoldimi?",
            "Qo‘l zaiflashdimi?",
            "Nutq buzildimi?",
            "Vaqtni boy bermang – 103!"
          ] as const
        }
      ] as const
    }
  
  },


  ru: {
    title: "Помощник здоровья",
    subtitle: "AI-помощник",

    tab: {
      symptom: "Симптомы",
      medicine: "Лекарства",
      disclaimer: "Важно",
      emergency: "103",
      responsible: "Ответственность",
      f2f: "Консультация специалиста"

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

    disclaimerPage: {
      title: "Важное предупреждение",
      subtitle: "Это приложение предназначено только для информации",
      intro: "Мы заботимся о вашем здоровье. Пожалуйста, внимательно прочитайте следующее.",

      sections: {
        notDoctor: {
          title: "Это приложение — не врач",
          text: "Это приложение никогда не заменит профессиональную медицинскую консультацию, диагностику или лечение. При любых проблемах со здоровьем обращайтесь только к квалифицированному врачу."
        },
        selfTreatment: {
          title: "Самолечение опасно",
          text: "Никогда не принимайте лекарства, не меняйте дозировки и не игнорируйте назначения врача на основе информации из интернета. Это может привести к тяжёлым последствиям."
        },
        generalInfo: {
          title: "Информация носит общий характер",
          text: "Все данные (о лекарствах, симптомах, советах) предоставлены исключительно в ознакомительных целях. Реакция организма у каждого человека индивидуальна."
        },
        emergency: {
          title: "В экстренных случаях звоните в скорую",
          text: "Если у вас или близкого есть хотя бы один из симптомов — немедленно звоните 103:\n• Боль в груди\n• Одышка\n• Потеря сознания\n• Сильное кровотечение\n• Внезапная слабость или нарушение речи"
        },
        emergencyNumbers: {
          title: "Экстренные номера (Узбекистан)",
          text: "103 – Скорая помощь\n101 – Пожарная служба\n102 – Полиция\n1050 – Центр отравлений"
        }
      },

      final: "Ваше здоровье — самое ценное. Никогда не рискуйте им.",
      bold: "Врач — ваш лучший друг!",
      footer: "Приложение не сертифицировано Минздравом Узбекистана.\nВсе права защищены © 2025"
    },

    disclaimer: "Это общая информация. Не заменяет врача!",
    seekHelp: "Срочно — звоните 103!",

    emergencyPage: {
  callButton: "103 — ВЫЗВАТЬ СКОРУЮ",
  callNow: "Не теряйте ни секунды — это может спасти жизнь!",
  whenToCall: "Когда немедленно вызывать скорую помощь?",
  firstAidTitle: "Первая помощь, спасающая жизнь",
  numbersTitle: "Экстренные номера Узбекистана",

  cases: [
    { title: "Боль в груди", desc: "Возможен инфаркт" },
    { title: "Одышка", desc: "Проблемы с лёгкими или сердцем" },
    { title: "Потеря сознания", desc: "Инсульт, травма или гипогликемия" },
    { title: "Температура выше 40°C", desc: "Особенно опасно для детей" },
    { title: "Судороги у ребёнка", desc: "Фебрильные судороги — срочно!" },
    { title: "Сильный ожог", desc: "3-я степень или поражение дыхательных путей" },
  ] as const,

  firstAid: [
    {
      title: "Сильное кровотечение",
      steps: [
        "Плотно прижмите чистую ткань",
        "Поднимите конечность выше сердца",
        "Держите 5–10 минут",
        "Если кровь не останавливается — срочно 103"
      ] as const
    },
    {
      title: "Удушье",
      steps: [
        "Приём Хеймлиха: обхватите сзади и резко надавите",
        "5 ударов по спине + 5 надавливаний на живот",
        "Если потерял сознание — начинайте СЛР"
      ] as const
    },
    {
      title: "Подозрение на инфаркт",
      steps: [
        "Срочно вызывайте 103",
        "Усадите или уложите человека",
        "Если нет аллергии — дайте разжевать аспирин 300 мг"
      ] as const
    },
    {
      title: "Признаки инсульта (F.A.S.T)",
      steps: [
        "Лицо — асимметрия?",
        "Рука — слабость?",
        "Речь — нарушена?",
        "Время — не теряйте, звоните 103!"
      ] as const
    }
  ] as const
},
  },

  en: {
    title: "Health Assistant",
    subtitle: "AI helper",

    tab: {
      symptom: "Symptoms",
      medicine: "Meds",
      disclaimer: "Important",
      emergency: "103",
      responsible: "Responsibility",
      f2f: "Consult a Specialist"
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

    disclaimerPage: {
      title: "Important Disclaimer",
      subtitle: "This app is for informational purposes only",
      intro: "We care about your health. Please read the following carefully.",

      sections: {
        notDoctor: {
          title: "This app is not a doctor",
          text: "This application can never replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider."
        },
        selfTreatment: {
          title: "Self-medication is dangerous",
          text: "Never take medications, change dosages, or ignore doctor’s instructions based on online information. It may lead to serious consequences."
        },
        generalInfo: {
          title: "Information is general in nature",
          text: "All information provided (about medicines, symptoms, tips) is for educational purposes only. Every person’s body reacts differently."
        },
        emergency: {
          title: "In emergencies — call for help immediately",
          text: "If you or someone near you has any of these — call 103 immediately:\n• Chest pain\n• Difficulty breathing\n• Loss of consciousness\n• Severe bleeding\n• Sudden weakness or speech problems"
        },
        emergencyNumbers: {
          title: "Emergency numbers (Uzbekistan)",
          text: "103 – Ambulance\n101 – Fire service\n102 – Police\n1050 – Poison control center"
        }
      },

      final: "Your health is priceless. Never put it at risk.",
      bold: "A doctor is your best friend!",
      footer: "This app is not approved by the Ministry of Health of Uzbekistan.\nAll rights reserved © 2025"
    },

    disclaimer: "General info only. Not medical advice!",
    seekHelp: "Emergency? Call 103 now!",
  emergencyPage: {
  callButton: "103 — CALL AMBULANCE NOW",
  callNow: "Every second counts — this could save a life!",
  whenToCall: "When to call emergency services immediately?",
  firstAidTitle: "Life-saving first aid",
  numbersTitle: "Emergency numbers in Uzbekistan",

  cases: [
    { title: "Chest pain", desc: "May be a heart attack" },
    { title: "Difficulty breathing", desc: "Lung or heart problem" },
    { title: "Loss of consciousness", desc: "Stroke, trauma or low blood sugar" },
    { title: "Fever above 40°C", desc: "Especially dangerous in children" },
    { title: "Seizures in a child", desc: "Febrile seizures — call immediately!" },
    { title: "Severe burn", desc: "3rd degree or airway involvement" },
  ] as const,

  firstAid: [
    {
      title: "Severe bleeding",
      steps: [
        "Apply firm pressure with clean cloth",
        "Elevate limb above heart level",
        "Maintain pressure for 5–10 minutes",
        "If bleeding doesn’t stop — call 103 immediately"
      ] as const
    },
    {
      title: "Choking",
      steps: [
        "Heimlich maneuver: hug from behind and thrust",
        "5 back blows + 5 abdominal thrusts",
        "If unconscious — start CPR"
      ] as const
    },
    {
      title: "Suspected heart attack",
      steps: [
        "Call 103 immediately",
        "Sit or lay the person down",
        "If no allergy — chew aspirin 300 mg"
      ] as const
    },
    {
      title: "Stroke signs (F.A.S.T)",
      steps: [
        "Face drooping?",
        "Arm weakness?",
        "Speech difficulty?",
        "Time to call 103 — NOW!"
      ] as const
    }
  ] as const
}
  },
}

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split(".")
  let value: any = translations[lang]
  for (const k of keys) {
    value = value?.[k]
    if (value === undefined) return key
  }
  return typeof value === "string" ? value : key
}
export const getData = <T>(lang: Language, key: string): T => {
  const keys = key.split(".")
  let value: any = translations[lang]
  for (const k of keys) {
    value = value?.[k]
    if (value === undefined) break
  }
  return value as T
}