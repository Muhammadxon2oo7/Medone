"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Star, Users, Stethoscope, ChevronDown, CheckCircle2, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const SPECIALTIES = [
  { id: "lor", name: "LOR shifokori", color: "border-l-purple-500" },
  { id: "nevrolog", name: "Nevrolog", color: "border-l-blue-500" },
  { id: "kardiolog", name: "Kardiolog", color: "border-l-rose-500" },
  { id: "ginekolog", name: "Ginekolog", color: "border-l-pink-500" },
  { id: "oftalmolog", name: "Ko‘z shifokori", color: "border-l-indigo-500" },
  { id: "ortoped", name: "Ortoped", color: "border-l-amber-500" },
  { id: "stomatolog", name: "Stomatolog", color: "border-l-emerald-500" },
] as const;

const DOCTORS = [
  { id: "1", name: "Dr. Karimova Gulnora", spec: "lor", exp: 18, rating: 4.9, reviews: 342, price: 280000 },
  { id: "2", name: "Dr. Xo‘jayev Rustam", spec: "lor", exp: 14, rating: 4.7, reviews: 289, price: 250000 },
  { id: "3", name: "Dr. Sobirova Madina", spec: "nevrolog", exp: 22, rating: 5.0, reviews: 567, price: 350000 },
  { id: "4", name: "Dr. Usmonova Feruza", spec: "kardiolog", exp: 20, rating: 4.9, reviews: 623, price: 320000 },
  { id: "5", name: "Dr. Xo‘jayeva Nigora", spec: "ginekolog", exp: 19, rating: 5.0, reviews: 812, price: 300000 },
  { id: "6", name: "Dr. Ismoilov Jasur", spec: "oftalmolog", exp: 17, rating: 4.9, reviews: 456, price: 290000 },
  { id: "7", name: "Dr. Abdullayev Sardor", spec: "ortoped", exp: 21, rating: 4.8, reviews: 389, price: 340000 },
  { id: "8", name: "Dr. Yunusova Sevara", spec: "stomatolog", exp: 15, rating: 5.0, reviews: 921, price: 250000 },
] as const;

export default function ConsultPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [selectedSpec, setSelectedSpec] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookedDoctor, setBookedDoctor] = useState<typeof DOCTORS[number] | null>(null);
  const doctorsRef = useRef<HTMLElement>(null);

  const scrollToDoctors = useCallback(() => {
    doctorsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    if (selectedSpec) setTimeout(scrollToDoctors, 150);
  }, [selectedSpec, scrollToDoctors]);

  const handleBook = (doc: typeof DOCTORS[number]) => {
    if (!user) return setShowLogin(true);
    setBookedDoctor(doc);
    setShowSuccess(true);
  };

  const currentSpec = SPECIALTIES.find(s => s.id === selectedSpec);
  const filteredDoctors = selectedSpec ? DOCTORS.filter(d => d.spec === selectedSpec) : [];

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      {/* Hero — AppHeader uslubida */}
      <section className="pt-24 pb-16 px-6 text-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
            Mutaxassisga murojaat qiling
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tajribali shifokorlar bilan tezkor va qulay maslahat oling
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-10 text-gray-700">
            <div className="flex items-center gap-3">
              <Users className="w-7 h-7 text-blue-600" />
              <span className="font-medium">12 000+ bemor</span>
            </div>
            <div className="flex items-center gap-3">
              <Stethoscope className="w-7 h-7 text-teal-600" />
              <span className="font-medium">60+ mutaxassis</span>
            </div>
          </div>

          {!selectedSpec && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16"
            >
              <p className="text-gray-500 mb-4">Yo‘nalishni tanlang</p>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
                <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </section>

      <Separator className="w-full mx-auto" />

      {/* Specialties — AppHeader tablariga o‘xshash nafislik */}
      <section className="py-16 md:py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
          Yo‘nalishni tanlang
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full mx-auto">
          {SPECIALTIES.map((spec) => {
            const count = DOCTORS.filter(d => d.spec === spec.id).length;
            const isActive = selectedSpec === spec.id;

            return (
              <motion.button
                key={spec.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: isActive ? 1 : 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedSpec(isActive ? null : spec.id)}
                className={cn(
                  "relative group overflow-hidden rounded-2xl border-2 transition-all duration-500",
                  isActive
                    ? "bg-white shadow-2xl ring-4 ring-blue-100 scale-105 z-10"
                    : "bg-white/90 backdrop-blur-sm border-transparent hover:shadow-xl"
                )}
              >
                <div className={cn("absolute left-0 top-0 bottom-0 w-2 transition-transform", spec.color, isActive && "scale-y-150")} />

                <div className="py-10 px-6 text-center">
                  <p className={cn("font-semibold text-lg transition-colors", isActive ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900")}>
                    {spec.name}
                  </p>

                  
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Doctors — Premium Card Design */}
      <AnimatePresence mode="wait">
        {selectedSpec && (
          <motion.section
            ref={doctorsRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20 px-6 "
          >
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
              >
                {currentSpec?.name}
              </motion.h2>
              <p className="text-center mt-4 text-lg text-gray-600">Eng yuqori baholangan mutaxassislar</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                {filteredDoctors.map((doctor, i) => (
                  <DoctorCard key={doctor.id} doctor={doctor} index={i} onBook={handleBook} color={currentSpec!.color} />
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Modals — AppHeader uslubida */}
      <Dialog open={showLogin} onOpenChange={setShowLogin}>
        <DialogContent className="max-w-sm rounded-3xl border-0 shadow-2xl bg-white/95 backdrop-blur-xl">
          <div className="text-center py-10">
            <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <Stethoscope className="w-10 h-10 text-blue-600" />
            </div>
            <DialogTitle className="mt-6 text-2xl font-bold">Tizimga kirish kerak</DialogTitle>
            <DialogDescription className="mt-3 text-gray-600">
              Shifokorga yozilish uchun avval hisobingizga kiring
            </DialogDescription>
            <div className="mt-8 flex gap-4">
              <Button onClick={() => router.push("/login")} className="flex-1 bg-blue-600 hover:bg-blue-700">Kirish</Button>
              <Button onClick={() => router.push("/register")} variant="outline" className="flex-1">Roʻyxat</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-sm rounded-3xl border-0 shadow-2xl bg-white/95 backdrop-blur-xl">
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-14 h-14 text-green-600" />
            </div>
            <DialogTitle className="mt-8 text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Muvaffaqiyatli!
            </DialogTitle>
            <p className="mt-4 text-gray-700 text-lg">
              Siz <span className="font-bold">{bookedDoctor?.name}</span><br />
              bilan maslahatga yozildingiz
            </p>
            <Button onClick={() => setShowSuccess(false)} className="mt-8 w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700">
              Yaxshi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Premium Doctor Card — AppHeader vibe bilan
function DoctorCard({ doctor, index, onBook, color }: { doctor: typeof DOCTORS[number]; index: number; onBook: any; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/95 backdrop-blur">
        <div className="p-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-8 ring-white shadow-2xl flex justify-center items-center">
            {/* <img src="/doctor-placeholder.jpg" alt={doctor.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" /> */}
            <User className="w-28 h-28"/>
          </div>

          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
            <p className="text-gray-600 mt-1">{doctor.exp} yillik tajriba</p>
          </div>

          <div className="flex justify-center gap-1 my-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={cn("w-6 h-6", i < Math.floor(doctor.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200")} />
            ))}
            <span className="ml-3 font-medium text-gray-700">{doctor.rating} ({doctor.reviews})</span>
          </div>

          <Separator />

          <div className="flex items-center justify-between mt-8">
            <div>
              <p className="text-3xl font-bold text-gray-900">{doctor.price.toLocaleString()} soʻm</p>
              <p className="text-sm text-gray-500">onlayn konsultatsiya</p>
            </div>
            <Button size="lg" onClick={() => onBook(doctor)} className="rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Yozilish
            </Button>
          </div>

          <motion.div
            className={cn("absolute bottom-0 left-0 h-1.5", color.replace("border-l-", "bg-"))}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </Card>
    </motion.div>
  );
}