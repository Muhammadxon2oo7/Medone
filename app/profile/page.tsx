"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "@/firebase";
import useAuth from "@/hooks/useAuth";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Loader2,
  Camera,
  Edit2,
  Save,
  X,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  User,
} from "lucide-react";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  // Yuklanganda ma'lumotlarni to'ldirish
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setPhone(user.phone || "");
      setAddress(user.address || "");
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!user) {
    router.push("/login");
    return null;
  }

  const displayName = user.firstName
    ? `${user.firstName} ${user.lastName || ""}`.trim()
    : user.email?.split("@")[0] || "Foydalanuvchi";

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    if (!auth.currentUser) return;

    setSaving(true);
    try {
      let photoURL = user.photoURL;

      if (photo) {
        const storageRef = ref(storage, `profiles/${auth.currentUser.uid}`);
        await uploadBytes(storageRef, photo);
        photoURL = await getDownloadURL(storageRef);
      }

      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        firstName,
        lastName,
        phone,
        address,
        photoURL: photoURL || null,
      });

      toast.success("Profil muvaffaqiyatli yangilandi!");
      setIsEditing(false);
      router.refresh();
    } catch (err) {
      toast.error("Saqlashda xatolik yuz berdi");
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setPhoto(null);
    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setPhone(user.phone || "");
    setAddress(user.address || "");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Orqaga
        </button>

        <Card className="overflow-hidden shadow-2xl border-0">
          <CardHeader className="relative pb-32 pt-12 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 text-center">
              <div className="relative inline-block">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-8 ring-white/30 shadow-2xl bg-white/20 backdrop-blur-sm">
                  {
                    <div className="flex items-center justify-center w-full h-full text-7xl font-bold text-white/90">
                      {displayName[0].toUpperCase()}
                    </div>
                  }
                </div>

                {isEditing && (
                  <label className="absolute bottom-2 right-2 bg-white rounded-full p-4 shadow-2xl cursor-pointer hover:scale-110 transition-all">
                    <Camera className="w-6 h-6 text-blue-600" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <h1 className="text-4xl font-bold mt-6 drop-shadow-lg">
                {displayName}
              </h1>
              <p className="text-white/90 mt-2 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                {user.email}
              </p>
              <Badge
                variant="secondary"
                className="mt-4 text-lg px-4 py-1 bg-white/20 backdrop-blur"
              >
                Shaxsiy profil
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="relative -mt-20 px-8 pb-10">
            <div className="bg-white rounded-3xl shadow-xl p-8 border">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  Shaxsiy ma'lumotlar
                </h2>
                {!isEditing ? (
                  <Button
                    onClick={() => setIsEditing(true)}
                    size="lg"
                    className="gap-2"
                  >
                    <Edit2 className="w-5 h-5" />
                    Tahrirlash
                  </Button>
                ) : (
                  <div className="flex gap-3">
                    <Button onClick={handleCancel} variant="outline" size="lg">
                      <X className="w-5 h-5 mr-2" />
                      Bekor qilish
                    </Button>
                    <Button
                      onClick={handleSave}
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={saving}
                    >
                      {saving ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Saqlanmoqda...
                        </>
                      ) : (
                        <>
                          <Save className="w-5 h-5 mr-2" />
                          Saqlash
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>

              <Separator className="mb-8" />

              <div className="grid md:grid-cols-2 gap-8 text-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">To'liq ism</p>
                    {isEditing ? (
                      <div className="flex gap-3 mt-2">
                        <Input
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Ism"
                        />
                        <Input
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Familiya"
                        />
                      </div>
                    ) : (
                      <p className="font-semibold text-gray-800">
                        {user.firstName || "—"} {user.lastName || ""}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefon raqam</p>
                    {isEditing ? (
                      <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+998 99 123 45 67"
                        className="mt-2 max-w-xs"
                      />
                    ) : (
                      <p className="font-semibold text-gray-800">
                        {user.phone || "—"}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 md:col-span-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Yashash manzili</p>
                    {isEditing ? (
                      <Input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Toshkent sh., Chilanzar tumani..."
                        className="mt-2"
                      />
                    ) : (
                      <p className="font-semibold text-gray-800">
                        {user.address || "—"}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
