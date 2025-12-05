export interface MedicineEntry {
  id: string
  names: {
    en: string
    ru: string
    uz: string
  }
  info: {
    en: {
      usedFor: string
      sideEffects: string
      precautions: string
    }
    ru: {
      usedFor: string
      sideEffects: string
      precautions: string
    }
    uz: {
      usedFor: string
      sideEffects: string
      precautions: string
    }
  }
}

export const medicineDatabase: MedicineEntry[] = [
  {
    id: "paracetamol",
    names: { en: "Paracetamol", ru: "Парацетамол", uz: "Parasetamol" },
    info: {
      en: {
        usedFor: "Relief of fever and mild to moderate pain (headache, toothache, muscle pain, cold symptoms).",
        sideEffects: "Rare: allergic reactions, rash, liver damage with overdose.",
        precautions: "Do not exceed 4g (4000mg) per day for adults. Avoid alcohol. Consult doctor if symptoms persist >3-5 days."
      },
      ru: {
        usedFor: "Снижение температуры и облегчение слабой/умеренной боли (головная, зубная боль, при простуде).",
        sideEffects: "Редко: аллергия, сыпь, повреждение печени при передозировке.",
        precautions: "Не более 4 г в сутки взрослым. Избегать алкоголя. Обратиться к врачу, если симптомы >3–5 дней."
      },
      uz: {
        usedFor: "Isitmani tushirish va engil-oʻrtacha ogʻriqni (bosh, tish, mushak ogʻrigʻi, shamollash) yoʻqotish.",
        sideEffects: "Kamdan-kam: allergiya, toshma, haddan tashqari dozada jigar shikastlanishi.",
        precautions: "Kattalar uchun kuniga 4 g dan oshirmang. Spirtli ichimliklardan saqlaning. 3-5 kundan ortiq davom etsa shifokorga murojaat qiling."
      }
    }
  },
  {
    id: "ibuprofen",
    names: { en: "Ibuprofen", ru: "Ибупрофен", uz: "Ibuprofen" },
    info: {
      en: {
        usedFor: "Pain relief, fever reduction, inflammation (headache, menstrual pain, arthritis, injuries).",
        sideEffects: "Stomach upset, heartburn, ulcers (rare), increased blood pressure.",
        precautions: "Take with food. Not recommended for people with stomach ulcers, kidney disease, or asthma triggered by NSAIDs."
      },
      ru: {
        usedFor: "Обезболивание, снижение температуры и воспаления (головная боль, менструальные боли, артрит).",
        sideEffects: "Расстройство желудка, изжога, язва (редко), повышение давления.",
        precautions: "Принимать с едой. Противопоказан при язве желудка, тяжелых болезнях почек, астме на НПВС."
      },
      uz: {
        usedFor: "Ogʻriq qoldiruvchi, isitma tushiruvchi va yalligʻlanishga qarshi (bosh ogʻrigʻi, hayz ogʻrigʻi, boʻgʻim kasalliklari).",
        sideEffects: "Oshqozon buzilishi, qiziloʻngach yonishi, yaralar (kam), qon bosimi koʻtarilishi.",
        precautions: "Ovqat bilan qabul qiling. Oshqozon yarasi, buyrak kasalligi, NPVS sababli astmasi borlar uchun tavsiya etilmaydi."
      }
    }
  },
  {
    id: "aspirin",
    names: { en: "Aspirin", ru: "Аспирин", uz: "Aspirin" },
    info: {
      en: {
        usedFor: "Mild pain, fever, inflammation; low-dose for prevention of heart attack and stroke.",
        sideEffects: "Stomach irritation, bleeding risk, ringing in ears (high doses).",
        precautions: "Not for children under 16 (risk of Reye’s syndrome). Avoid before surgery."
      },
      ru: {
        usedFor: "Слабая боль, жар, воспаление; в малых дозах — профилактика инфаркта и инсульта.",
        sideEffects: "Раздражение желудка, риск кровотечений, звон в ушах.",
        precautions: "Не давать детям до 16 лет (синдром Рейе). Не принимать перед операциями."
      },
      uz: {
        usedFor: "Engil ogʻriq, isitma, yalligʻlanish; kichik dozalarda yurak xuruji va insultning oldini olish.",
        sideEffects: "Oshqozonni bezovta qilishi, qon ketish xavfi, quloqda shangʻillash.",
        precautions: "16 yoshgacha bolalarga berilmaydi (Reye sindromi xavfi). Operatsiyadan oldin qoʻllanilmaydi."
      }
    }
  },
  {
    id: "amoxicillin",
    names: { en: "Amoxicillin", ru: "Амоксициллин", uz: "Amoksitsillin" },
    info: {
      en: {
        usedFor: "Bacterial infections (ear, throat, sinus, urinary tract, skin).",
        sideEffects: "Diarrhea, nausea, rash, allergic reactions (rarely anaphylaxis).",
        precautions: "Complete full course. Inform doctor about penicillin allergy."
      },
      ru: {
        usedFor: "Бактериальные инфекции (уши, горло, пазухи, мочевыводящие пути).",
        sideEffects: "Диарея, тошнота, сыпь, аллергия (анафилаксия редко).",
        precautions: "Пройти полный курс. Сообщить врачу об аллергии на пенициллин."
      },
      uz: {
        usedFor: "Bakterial infeksiyalar (quloq, tomoq, sinus, siydik yoʻllari, teri).",
        sideEffects: "Diareya, koʻngil aynishi, toshma, allergik reaksiyalar (juda kam anafilaksiya).",
        precautions: "Toʻliq kursni tugatish kerak. Penitsillin allergiyasi haqida shifokorga ayting."
      }
    }
  },
  {
    id: "omeprazole",
    names: { en: "Omeprazole", ru: "Омепразол", uz: "Omeprazol" },
    info: {
      en: {
        usedFor: "Heartburn, GERD, stomach ulcers, excessive stomach acid.",
        sideEffects: "Headache, diarrhea, stomach pain; long-term: risk of bone fractures, vitamin B12 deficiency.",
        precautions: "Long-term use only under medical supervision."
      },
      ru: {
        usedFor: "Изжога, ГЭРБ, язва желудка, повышенная кислотность.",
        sideEffects: "Головная боль, диарея; длительно — риск переломов костей, дефицит B12.",
        precautions: "Длительное применение только под контролем врача."
      },
      uz: {
        usedFor: "Qiziloʻngach yonishi, oshqozon yarasi, oshqozon kislotasi koʻpayishi.",
        sideEffects: "Bosh ogʻrigʻi, diareya; uzoq muddat — suyak sinishi va B12 yetishmovchiligi xavfi.",
        precautions: "Uzoq muddat faqat shifokor nazoratida qoʻllaniladi."
      }
    }
  },
  {
    id: "metformin",
    names: { en: "Metformin", ru: "Метформин", uz: "Metformin" },
    info: {
      en: {
        usedFor: "Type 2 diabetes – lowers blood sugar.",
        sideEffects: "Nausea, diarrhea, metallic taste, rarely lactic acidosis.",
        precautions: "Take with meals. Stop before contrast X-ray studies."
      },
      ru: {
        usedFor: "Сахарный диабет 2 типа — снижение уровня сахара в крови.",
        sideEffects: "Тошнота, диарея, металлический привкус, редко молочнокислый ацидоз.",
        precautions: "Принимать с едой. Отменить перед рентгеном с контрастом."
      },
      uz: {
        usedFor: "2-turi qandli diabet – qon shakarini pasaytiradi.",
        sideEffects: "Koʻngil aynishi, diareya, temir taʼmi, juda kam – laktik atsidoz.",
        precautions: "Ovqat bilan qabul qiling. Kontrastli rentgen oldidan toʻxtating."
      }
    }
  },
  {
    id: "loratadine",
    names: { en: "Loratadine", ru: "Лоратадин", uz: "Loratadin" },
    info: {
      en: {
        usedFor: "Allergic rhinitis, hives, itching.",
        sideEffects: "Very rare – headache, drowsiness (much less than older antihistamines).",
        precautions: "Safe for long-term use. Can be taken with or without food."
      },
      ru: {
        usedFor: "Аллергический ринит, крапивница, зуд.",
        sideEffects: "Очень редко — головная боль, сонливость (гораздо меньше, чем у старых антигистаминов).",
        precautions: "Можно длительно. С едой или без — не важно."
      },
      uz: {
        usedFor: "Allergik rinit, eshakemi, qichishish.",
        sideEffects: "Juda kam – bosh ogʻrigʻi, uyquchanlik (eski antigistaminlarga nisbatan ancha kam).",
        precautions: "Uzoq muddat xavfsiz. Ovqat bilan yoki ovqatsiz qabul qilinsa boʻladi."
      }
    }
  },
  {
    id: "captopril",
    names: { en: "Captopril", ru: "Каптоприл", uz: "Kaptopril" },
    info: {
      en: {
        usedFor: "High blood pressure, heart failure, after heart attack.",
        sideEffects: "Dry cough, dizziness, taste disturbance, low blood pressure.",
        precautions: "Monitor blood pressure. Avoid potassium supplements."
      },
      ru: {
        usedFor: "Артериальная гипертензия, сердечная недостаточность, после инфаркта.",
        sideEffects: "Сухой кашель, головокружение, изменение вкуса, гипотония.",
        precautions: "Контролировать АД. Избегать калиевых добавок."
      },
      uz: {
        usedFor: "Yuqori qon bosimi, yurak yetishmovchiligi, infarktdan keyin.",
        sideEffects: "Quruq yoʻtal, bosh aylanishi, taʼm buzilishi, past bosim.",
        precautions: "Qon bosimini nazorat qiling. Kaliy qoʻshimchalaridan saqlaning."
      }
    }
  },
  {
    id: "salbutamol",
    names: { en: "Salbutamol", ru: "Сальбутамол", uz: "Salbutamol" },
    info: {
      en: {
        usedFor: "Asthma, COPD – bronchodilator (relieves wheezing and shortness of breath).",
        sideEffects: "Tremor, palpitations, headache.",
        precautions: "Not for regular daily use without inhaled steroids in asthma."
      },
      ru: {
        usedFor: "Бронхиальная астма, ХОЗЛ — бронходилататор.",
        sideEffects: "Тремор, сердцебиение, головная боль.",
        precautions: "Не для постоянного применения без ингаляционных стероидов при астме."
      },
      uz: {
        usedFor: "Bronxial astma, surunkali oʻpka kasalligi – bronxlarni kengaytiruvchi.",
        sideEffects: "Qoʻl titrashi, yurak urishi tezlashishi, bosh ogʻrigʻi.",
        precautions: "Astma bilan doimiy qoʻllash uchun emas (ingalyatsion steroidlarsiz)."
      }
    }
  },
{
    id: "paracetamol",
    names: { en: "Paracetamol", ru: "Парацетамол", uz: "Parasetamol" },
    info: {
      en: { usedFor: "Fever, mild to moderate pain (headache, toothache, cold).", sideEffects: "Rare allergic reactions, liver damage in overdose.", precautions: "Max 4g/day for adults. Avoid alcohol." },
      ru: { usedFor: "Жар, слабая/умеренная боль (голова, зубы, простуда).", sideEffects: "Редко аллергия, при передозировке — печень.", precautions: "Не более 4 г/сутки. Не с алкоголем." },
      uz: { usedFor: "Isitma, engil-o‘rtacha og‘riq (bosh, tish, shamollash).", sideEffects: "Kamdan-kam allergiya, haddan tashqari dozada jigar shikastlanishi.", precautions: "Kattalar uchun kuniga 4 g dan oshirmang. Spirtli ichimlik bilan birga emas." }
    }
  },
  {
    id: "ibuprofen",
    names: { en: "Ibuprofen", ru: "Ибупрофен", uz: "Ibuprofen" },
    info: {
      en: { usedFor: "Pain, fever, inflammation (joints, menstrual pain, injuries).", sideEffects: "Stomach irritation, ulcers (rare), hypertension.", precautions: "Take with food. Avoid in peptic ulcer." },
      ru: { usedFor: "Боль, жар, воспаление (суставы, месячные, травмы).", sideEffects: "Раздражение желудка, язва (редко).", precautions: "С едой. Противопоказано при язве." },
      uz: { usedFor: "Og‘riq, isitma, yallig‘lanish (bo‘g‘im, hayz, shikastlanish).", sideEffects: "Oshqozonni bezovta qilishi, yara (kam).", precautions: "Ovqat bilan. Oshqozon yarasi bo‘lsa mumkin emas." }
    }
  },
  {
    id: "nurofen",
    names: { en: "Nurofen (Ibuprofen)", ru: "Нурофен", uz: "Nurofen" },
    info: {
      en: { usedFor: "Same as ibuprofen – very popular brand in Uzbekistan.", sideEffects: "Same as ibuprofen.", precautions: "Same as ibuprofen." },
      ru: { usedFor: "То же, что ибупрофен – самая популярная марка.", sideEffects: "Те же.", precautions: "Те же." },
      uz: { usedFor: "Ibuprofen bilan bir xil – O‘zbekistonda eng mashhur brend.", sideEffects: "Ibuprofen bilan bir xil.", precautions: "Ibuprofen bilan bir xil." }
    }
  },
  {
    id: "aspirin",
    names: { en: "Aspirin", ru: "Аспирин", uz: "Aspirin" },
    info: {
      en: { usedFor: "Pain, fever, inflammation; low dose for heart protection.", sideEffects: "Stomach bleeding risk, ringing in ears.", precautions: "Not for children <16 (Reye syndrome)." },
      ru: { usedFor: "Боль, жар; малые дозы — защита сердца.", sideEffects: "Кровотечения из желудка, звон в ушах.", precautions: "Не детям до 16 лет (синдром Рейе)." },
      uz: { usedFor: "Og‘riq, isitma; kichik dozalarda yurak himoyasi.", sideEffects: "Oshqozondan qon ketishi, quloq shang‘illashi.", precautions: "16 yoshgacha bolalarga yo‘q (Reye sindromi)." }
    }
  },
  {
    id: "analgin",
    names: { en: "Metamizole (Analgin)", ru: "Анальгин", uz: "Analgin" },
    info: {
      en: { usedFor: "Severe pain and high fever (very common in Uzbekistan).", sideEffects: "Rare but serious: agranulocytosis.", precautions: "Short-term use only." },
      ru: { usedFor: "Сильная боль и высокая температура (очень популярен).", sideEffects: "Редко, но опасно: агранулоцитоз.", precautions: "Только короткими курсами." },
      uz: { usedFor: "Kuchli og‘riq va yuqori isitma (O‘zbekistonda juda keng tarqalgan).", sideEffects: "Juda kam, lekin og‘ir: agranulotsitoz.", precautions: "Faqat qisqa muddat." }
    }
  },
  {
    id: "no-spa",
    names: { en: "Drotaverine (No-Spa)", ru: "Но-шпа", uz: "No-shpa" },
    info: {
      en: { usedFor: "Spasms of stomach, intestines, bile ducts, menstrual pain.", sideEffects: "Rare: dizziness, low blood pressure.", precautions: "Safe in pregnancy (category B)." },
      ru: { usedFor: "Спазмы желудка, кишечника, желчных путей, месячные.", sideEffects: "Редко головокружение, снижение давления.", precautions: "Разрешена при беременности." },
      uz: { usedFor: "Oshqozon, ichak, o‘t yo‘llari spazmlari, hayz og‘rig‘i.", sideEffects: "Kamdan-kam bosh aylanishi, bosim tushishi.", precautions: "Homiadorlikda ruxsat etilgan." }
    }
  },
  {
    id: "citramon",
    names: { en: "Citramon (Paracetamol + Aspirin + Caffeine)", ru: "Цитрамон", uz: "Tsitramon" },
    info: {
      en: { usedFor: "Headache, toothache, mild pain (very popular in Uzbekistan).", sideEffects: "Stomach irritation, insomnia from caffeine.", precautions: "Not on empty stomach." },
      ru: { usedFor: "Головная, зубная боль (самый народный препарат).", sideEffects: "Раздражение желудка, бессонница от кофеина.", precautions: "Не на голодный желудок." },
      uz: { usedFor: "Bosh va tish og‘rig‘i (eng xalq dorisi).", sideEffects: "Oshqozon bezovtalanishi, kofein tufayli uyqusizlik.", precautions: "Och qoringa ichmang." }
    }
  },
  {
    id: "amoxicillin",
    names: { en: "Amoxicillin", ru: "Амоксициллин", uz: "Amoksitsillin" },
    info: {
      en: { usedFor: "Bacterial infections of throat, ear, urinary tract, skin.", sideEffects: "Diarrhea, rash, allergy.", precautions: "Finish full course." },
      ru: { usedFor: "Ангина, отит, инфекции мочевых путей.", sideEffects: "Понос, сыпь, аллергия.", precautions: "Допить весь курс." },
      uz: { usedFor: "Angina, otit, siydik yo‘li va teri infeksiyalari.", sideEffects: "Diareya, toshma, allergiya.", precautions: "To‘liq kursni ichib tugating." }
    }
  },
  {
    id: "azithromycin",
    names: { en: "Azithromycin", ru: "Азитромицин", uz: "Azitromitsin" },
    info: {
      en: { usedFor: "Respiratory infections, tonsillitis, chlamydia (3–5 day course).", sideEffects: "Nausea, diarrhea.", precautions: "Take 1 hour before or 2 hours after food." },
      ru: { usedFor: "Пневмония, ангина, хламидиоз (3–5 дней).", sideEffects: "Тошнота, понос.", precautions: "За 1 ч до еды или через 2 ч после." },
      uz: { usedFor: "Nafas yo‘llari infeksiyalari, angina, xlamidiya (3-5 kunlik kurs).", sideEffects: "Ko‘ngil aynishi, diareya.", precautions: "Ovqatdan 1 soat oldin yoki 2 soat keyin." }
    }
  },
  {
    id: "ceftriaxone",
    names: { en: "Ceftriaxone", ru: "Цефтриаксон", uz: "Seftriakson" },
    info: {
      en: { usedFor: "Serious bacterial infections (injections).", sideEffects: "Pain at injection site, diarrhea.", precautions: "Only by prescription, intramuscular or IV." },
      ru: { usedFor: "Тяжелые инфекции (уколы).", sideEffects: "Боль в месте укола, понос.", precautions: "Только по рецепту, в/м или в/в." },
      uz: { usedFor: "Og‘ir bakterial infeksiyalar (ukol).", sideEffects: "Ukol joyida og‘riq, diareya.", precautions: "Faqat retsept bo‘yicha, mushak ichiga yoki vena ichiga." }
    }
  },
  {
    id: "ciprofloxacin",
    names: { en: "Ciprofloxacin", ru: "Ципрофлоксацин", uz: "Siprofloksatsin" },
    info: {
      en: { usedFor: "Urinary tract, prostate, severe intestinal infections.", sideEffects: "Nausea, tendon pain (rare).", precautions: "Avoid dairy products and antacids at the same time." },
      ru: { usedFor: "Мочевыводящие пути, простатит, тяжелые кишечные инфекции.", sideEffects: "Тошнота, редко — боли в сухожилиях.", precautions: "Не запивать молоком и антацидами." },
      uz: { usedFor: "Siydik yo‘llari, prostata, og‘ir ichak infeksiyalari.", sideEffects: "Ko‘ngil aynishi, kam hollarda paylarda og‘riq.", precautions: "Sut va kislotalik pasaytiruvchi dori bilan birga ichmang." }
    }
  },
  {
    id: "omeprazole",
    names: { en: "Omeprazole", ru: "Омепразол", uz: "Omeprazol" },
    info: {
      en: { usedFor: "Heartburn, gastritis, stomach ulcers.", sideEffects: "Headache, diarrhea (long-term: B12 deficiency).", precautions: "Take before breakfast." },
      ru: { usedFor: "Изжога, гастрит, язва желудка.", sideEffects: "Головная боль, понос; длительно — дефицит B12.", precautions: "Утром до еды." },
      uz: { usedFor: "Qizilo‘ngach yonishi, gastrit, oshqozon yarasi.", sideEffects: "Bosh og‘rig‘i, diareya; uzoq muddat B12 yetishmovchiligi.", precautions: "Ertalab nonushtadan oldin." }
    }
  },
  {
    id: "pancreatin",
    names: { en: "Pancreatin (Mezim, Creon)", ru: "Панкреатин", uz: "Pankreatin" },
    info: {
      en: { usedFor: "Indigestion, fatty food intolerance, chronic pancreatitis.", sideEffects: "Very rare.", precautions: "Take with meals." },
      ru: { usedFor: "Тяжесть после еды, хронический панкреатит.", sideEffects: "Практически нет.", precautions: "Во время еды." },
      uz: { usedFor: "Ovqat hazm qilmaslik, yog‘li ovqatga toqatsizlik.", sideEffects: "De yarliq yo‘q.", precautions: "Ovqat bilan birga." }
    }
  },
  {
    id: "loratadin",
    names: { en: "Loratadine", ru: "Лоратадин", uz: "Loratadin" },
    info: {
      en: { usedFor: "Allergies, hay fever, hives.", sideEffects: "Almost none (non-drowsy).", precautions: "Safe for long-term use." },
      ru: { usedFor: "Аллергия, поллиноз, крапивница.", sideEffects: "Практически нет.", precautions: "Можно длительно." },
      uz: { usedFor: "Allergiya, gulchang allergiyasi, eshakemi.", sideEffects: "Uyqu keltirmaydi, deyarli nojo‘ya ta’siri yo‘q.", precautions: "Uzoq muddat ishlatish mumkin." }
    }
  },
  {
    id: "xylometazoline",
    names: { en: "Xylometazoline (Otrivin, Xymelin)", ru: "Ксилометазолин", uz: "Ksilen" },
    info: {
      en: { usedFor: "Nasal congestion (cold, sinusitis).", sideEffects: "Rebound congestion if >5 days.", precautions: "Max 5–7 days." },
      ru: { usedFor: "Заложенность носа.", sideEffects: "Медикаментозный ринит при длительном использовании.", precautions: "Не дольше 5–7 дней." },
      uz: { usedFor: "Burun bitishi (shamollash, sinusit).", sideEffects: "5 kundan ortiq ishlatilsa teskari ta’sir.", precautions: "Eng ko‘p 5-7 kun." }
    }
  },
  {
    id: "activated-charcoal",
    names: { en: "Activated Charcoal", ru: "Активированный уголь", uz: "Faollashtirilgan ko‘mir" },
    info: {
      en: { usedFor: "Food poisoning, bloating, intoxication.", sideEffects: "Constipation, black stool.", precautions: "Take 1–2 hours apart from other medicines." },
      ru: { usedFor: "Пищевое отравление, вздутие, интоксикация.", sideEffects: "Запор, черный кал.", precautions: "От других лекарств — с интервалом 1–2 ч." },
      uz: { usedFor: "Ovqat zaharlanishi, qorin dam bo‘lishi.", sideEffects: "Ich qotishi, najas qora bo‘lishi.", precautions: "Boshqa dorilardan 1-2 soat farq bilan." }
    }
  },
  {
    id: "loperamide",
    names: { en: "Loperamide (Imodium)", ru: "Лоперамид", uz: "Loperamid" },
    info: {
      en: { usedFor: "Acute diarrhea (non-infectious).", sideEffects: "Constipation, bloating.", precautions: "Not for bloody diarrhea or fever." },
      ru: { usedFor: "Понос (неинфекционный).", sideEffects: "Запор, вздутие.", precautions: "Нельзя при кровавом поносе и температуре." },
      uz: { usedFor: "O‘tkir diareya (yuqumli bo‘lmagan).", sideEffects: "Ich ketmasligi, qorin dam bo‘lishi.", precautions: "Qonli yoki isitma bilan bo‘lsa bo‘lmaydi." }
    }
  },
  {
    id: "nifedipine",
    names: { en: "Nifedipine", ru: "Нифедипин", uz: "Nifedipin" },
    info: {
      en: { usedFor: "High blood pressure crises, angina.", sideEffects: "Headache, flushing, ankle swelling.", precautions: "Do not bite extended-release tablets." },
      ru: { usedFor: "Гипертонические кризы, стенокардия.", sideEffects: "Головная боль, приливы, отеки ног.", precautions: "Таблетки пролонгированного действия не разжевывать." },
      uz: { usedFor: "Yuqori bosim krizlari, ko‘krak qisishi.", sideEffects: "Bosh og‘rig‘i, yuz qizarishi, oyoq shishishi.", precautions: "Uzoq ta’sirli tabletkalarni chaynamang." }
    }
  },
  {
    id: "enalapril",
    names: { en: "Enalapril", ru: "Эналаприл", uz: "Enalapril" },
    info: {
      en: { usedFor: "Hypertension, heart failure.", sideEffects: "Dry cough, dizziness.", precautions: "Monitor potassium and kidney function." },
      ru: { usedFor: "Гипертония, сердечная недостаточность.", sideEffects: "Сухой кашель, головокружение.", precautions: "Контроль калия и почек." },
      uz: { usedFor: "Yuqori qon bosimi, yurak yetishmovchiligi.", sideEffects: "Quruq yo‘tal, bosh aylanishi.", precautions: "Kaliy va buyrak ko‘rsatkichlarini nazorat qiling." }
    }
  },
  {
    id: "metronidazole",
    names: { en: "Metronidazole", ru: "Метронидазол", uz: "Metronidazol" },
    info: {
      en: { usedFor: "Anaerobic infections, giardiasis, trichomoniasis.", sideEffects: "Metallic taste, nausea, no alcohol!", precautions: "Avoid alcohol during and 48h after." },
      ru: { usedFor: "Анаэробные инфекции, лямблиоз, трихомониаз.", sideEffects: "Металлический привкус, тошнота, нельзя алкоголь!", precautions: "Алкоголь запрещен во время лечения и 2 суток после." },
      uz: { usedFor: "Anaerob infeksiyalar, lyambliya, trixomoniaz.", sideEffects: "Temir ta’mi, ko‘ngil aynishi, spirtli ichimlik mutlaqo mumkin emas!", precautions: "Davolash vaqtida va undan keyin 2 kun spirtli ichimlik ichmang." }
    }
  },
  // Agar yana koʻproq kerak boʻlsa (masalan, 50–100 ta dori), shu struktura boʻyicha davom ettirish mumkin.
  // Yana qoʻshib beraymi?
]

export function searchMedicines(query: string): MedicineEntry[] {
  const lowerQuery = query.toLowerCase().trim()
  if (!lowerQuery) return []

  return medicineDatabase.filter((medicine) => {
    return (
      medicine.names.en.toLowerCase().includes(lowerQuery) ||
      medicine.names.ru.toLowerCase().includes(lowerQuery) ||
      medicine.names.uz.toLowerCase().includes(lowerQuery)
    )
  })
}