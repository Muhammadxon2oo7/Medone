"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { type Language, getTranslation } from "@/lib/i18n"

interface MedicineInfo {
  name: string
  usedFor: string
  sideEffects: string
  precautions: string
}

interface MedicineLookupProps {
  language: Language
}

export function MedicineLookup({ language }: MedicineLookupProps) {
  const [search, setSearch] = useState("")
  const [medicine, setMedicine] = useState<MedicineInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const handleSearch = async () => {
    if (!search.trim()) return

    setLoading(true)
    setNotFound(false)
    setMedicine(null)

    try {
      const response = await fetch("/api/medicine-lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ medicineName: search, language }),
      })

      const data = await response.json()

      if (data.found) {
        setMedicine(data.medicine)
      } else {
        setNotFound(true)
      }
    } catch (error) {
      console.error("Error:", error)
      setNotFound(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full space-y-4">
      {/* Search Input */}
      <div className="flex gap-2">
        <Input
          placeholder={getTranslation(language, "medicine.search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          disabled={loading}
          className="flex-1"
        />
        <Button
          onClick={handleSearch}
          disabled={loading || !search.trim()}
          className="bg-secondary hover:bg-secondary/90"
        >
          {loading ? <Spinner className="h-4 w-4" /> : getTranslation(language, "chat.send")}
        </Button>
      </div>

      {/* Results */}
      {notFound && (
        <Card className="p-4 bg-destructive/10 border-destructive/20">
          <p className="text-sm text-destructive">{getTranslation(language, "medicine.notFound")}</p>
        </Card>
      )}

      {medicine && (
        <Card className="p-6 space-y-4 border-accent/30 bg-card">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">{medicine.name}</h3>

            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-foreground mb-1">{getTranslation(language, "medicine.usedFor")}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{medicine.usedFor}</p>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-1">{getTranslation(language, "medicine.sideEffects")}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{medicine.sideEffects}</p>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-1">{getTranslation(language, "medicine.precautions")}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{medicine.precautions}</p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
