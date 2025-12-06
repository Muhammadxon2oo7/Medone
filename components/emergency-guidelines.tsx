"use client";

import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  HeartPulse,
  AlertTriangle,
  Siren,
  Thermometer,
  Baby,
  Flame,
} from "lucide-react";
import { getTranslation, getData, type Language } from "@/lib/i18n";

const fadeUp: Variants = {
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

const icons = [
  HeartPulse,
  AlertTriangle,
  Siren,
  Thermometer,
  Baby,
  Flame,
] as const;
const iconColors = [
  "text-red-600",
  "text-orange-600",
  "text-red-700",
  "text-red-600",
  "text-pink-600",
  "text-orange-700",
] as const;
const iconBgs = [
  "bg-red-100",
  "bg-orange-100",
  "bg-red-100",
  "bg-red-100",
  "bg-pink-100",
  "bg-orange-100",
] as const;

export function EmergencyGuidelines({ language }: { language: Language }) {
  const casesData = getData<{ title: string; desc: string }[]>(
    language,
    "emergencyPage.cases"
  );
  const firstAidData = getData<{ title: string; steps: readonly string[] }[]>(
    language,
    "emergencyPage.firstAid"
  );

  return (
    <div className="min-h-screen bg-gradient-to-b  pb-10">
      <div className=" mx-auto px-4 py-8 space-y-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="text-center px-4 sm:px-6"
        >
          <Button
            size="lg"
            className={`
      w-full 
      max-w-2xl 
      mx-auto 
      h-24 
      sm:h-28 
      md:h-32 
      bg-gradient-to-r from-red-600 to-rose-600 
      hover:from-red-700 hover:to-rose-700 
      shadow-2xl 
      rounded-3xl 
      animate-pulse 
      border-4 
      border-white/70 
      flex 
      items-center 
      justify-center 
      gap-3 
      sm:gap-5 
      transition-all 
      duration-300
    `}
            onClick={() => (window.location.href = "tel:103")}
          >
            <Phone
              className="
      w-10 h-10 
      sm:w-14 sm:h-14 
      md:w-16 md:h-16 
      lg:w-20 lg:h-20 
      flex-shrink-0 
      drop-shadow-lg
    "
            />

            <span
              className="
      font-bold 
      tracking-wider 
      text-xl 
      sm:text-xl 
      md:text-2xl 
      lg:text-2xl 
      xl:text-3xl 
      leading-tight
      drop-shadow-md
    "
            >
              <span className="block sm:hidden">103 — TEZ YORDAM</span>

              <span className="hidden sm:block">
                {getTranslation(language, "emergencyPage.callButton")}
              </span>
            </span>
          </Button>

          <p
            className="
    mt-5 
    text-lg 
    sm:text-xl 
    md:text-2xl 
    lg:text-3xl 
    font-bold 
    text-red-700 
    leading-tight 
    px-4 
    drop-shadow-sm
  "
          >
            {getTranslation(language, "emergencyPage.callNow")}
          </p>
        </motion.div>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-8">
            {getTranslation(language, "emergencyPage.whenToCall")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {casesData.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group"
                >
                  <Card
                    className={`p-6 h-full border-2 border-transparent hover:border-red-400 transition-all duration-300 shadow-lg hover:shadow-2xl ${iconBgs[i]} rounded-2xl`}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div
                        className={`p-5 rounded-full ${iconBgs[i]} group-hover:scale-110 transition-transform duration-300 shadow-md`}
                      >
                        <Icon className={`w-14 h-14 ${iconColors[i]}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-8">
            {getTranslation(language, "emergencyPage.firstAidTitle")}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {firstAidData.map((aid, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Card className="p-7 shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-3xl">
                  <h3 className="text-xl md:text-2xl font-bold text-emerald-800 mb-5 text-center">
                    {aid.title}
                  </h3>
                  <ol className="space-y-4">
                    {aid.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <Badge className="mt-1 min-w-10 h-10 rounded-full text-lg font-bold bg-emerald-600 text-white shadow-md">
                          {j + 1}
                        </Badge>
                        <span className="text-gray-700 text-base md:text-lg leading-relaxed pt-1">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="inline-block p-10 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-2xl rounded-3xl border-4 border-white/30">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              {getTranslation(language, "emergencyPage.numbersTitle")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xl md:text-2xl">
              <div className="space-y-2">
                <div className="text-5xl font-bold">103</div>
                <div className="text-lg opacity-90">Tez yordam</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">101</div>
                <div className="text-lg opacity-90">Yong‘in</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">102</div>
                <div className="text-lg opacity-90">Militsiya</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">1050</div>
                <div className="text-lg opacity-90">Zaharlanish</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
