"use client";

import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  AlertCircle,
  HeartHandshake,
  Stethoscope,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { getTranslation, type Language } from "@/lib/i18n";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconPulse: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.175, 0.885, 0.32, 1.275],
    },
  },
};

const iconMap: Record<string, React.FC<any>> = {
  notDoctor: AlertCircle,
  selfTreatment: HeartHandshake,
  generalInfo: Stethoscope,
  emergency: ShieldCheck,
  emergencyNumbers: Phone,
};

const sectionsOrder = [
  "notDoctor",
  "selfTreatment",
  "generalInfo",
  "emergency",
  "emergencyNumbers",
] as const;

export function DisclaimerPage({ language }: { language: Language }) {
  const t = (key: string) => getTranslation(language, key);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="space-y-10 py-8 px-4 max-w-4xl mx-auto"
    >
      <motion.div variants={itemFadeUp} className="text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t("disclaimerPage.title")}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {t("disclaimerPage.subtitle")}
        </motion.p>
      </motion.div>

      <motion.div variants={itemFadeUp}>
        <Card className="p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-lg">
          <p className="text-amber-800 font-medium text-center text-lg leading-relaxed">
            {t("disclaimerPage.intro")}
          </p>
        </Card>
      </motion.div>
      <div className="space-y-8">
        {sectionsOrder.map((key, index) => {
          const Icon = iconMap[key];

          return (
            <motion.div
              key={key}
              variants={itemFadeUp}
              whileHover={{
                y: -4,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden">
                <div className="flex flex-row gap-6 items-start">
                  <motion.div
                    variants={iconPulse}
                    className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-red-100 to-amber-100 p-3 flex items-center justify-center shadow-md"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-10 h-10 text-red-600" />
                  </motion.div>

                  <motion.div
                    className="flex-1 pt-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                      {t(`disclaimerPage.sections.${key}.title`)}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
                      {t(`disclaimerPage.sections.${key}.text`)}
                    </p>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.9, ease: "easeOut" }}
        whileHover={{ scale: 1.01 }}
      >
        <Card className="p-10 md:p-14 bg-gradient-to-br from-red-600 to-rose-600 text-white text-center shadow-2xl border-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          >
            <ShieldCheck className="w-20 h-20 mx-auto mb-8 text-white/90" />
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl font-medium leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            {t("disclaimerPage.final")}
          </motion.p>

          <motion.p
            className="text-3xl md:text-5xl font-bold tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, type: "spring", stiffness: 120 }}
          >
            {t("disclaimerPage.bold")}
          </motion.p>
        </Card>
      </motion.div>
      <motion.p
        variants={itemFadeUp}
        className="text-center text-sm text-gray-500 italic whitespace-pre-line pt-8"
      >
        {t("disclaimerPage.footer")}
      </motion.p>
    </motion.div>
  );
}
