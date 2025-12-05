"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Globe } from "lucide-react"
import type { Language } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
}

const languageLabels: Record<Language, { short: string; full: string }> = {
  uz: { short: "UZ", full: "O‘zbek" },
  ru: { short: "RU", full: "Русский" },
  en: { short: "EN", full: "English" },
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const current = languageLabels[currentLanguage]

  return (
    <Select value={currentLanguage} onValueChange={(value) => onLanguageChange(value as Language)}>
      <SelectTrigger className="w-[100px] md:w-[120px] h-9 border-primary/20">
        <Globe className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />
        <SelectValue>
          <span className="font-medium">{current.short}</span>
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        {(["uz", "ru", "en"] as Language[]).map((lang) => {
          const label = languageLabels[lang]
          return (
            <SelectItem key={lang} value={lang}>
              <div className="flex items-center gap-3">
                <span className="font-bold text-sm w-8">{label.short}</span>
                <span className="text-sm">{label.full}</span>
              </div>
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}