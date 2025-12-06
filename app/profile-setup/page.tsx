// app/profile-setup/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "@/firebase";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfileSetup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return;

    setLoading(true);
    try {
      let photoURL = auth.currentUser.photoURL || "";

      if (photo) {
        const storageRef = ref(storage, `profiles/${auth.currentUser.uid}`);
        await uploadBytes(storageRef, photo);
        photoURL = await getDownloadURL(storageRef);
      }

      await setDoc(doc(db, "users", auth.currentUser.uid), {
        firstName,
        lastName,
        phone,
        address,
        photoURL,
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        createdAt: new Date(),
      });

      toast.success("Profil muvaffaqiyatli yaratildi!");
      router.push("/");
    } catch (err) {
      toast.error("Profilni saqlashda xatolik");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="max-w-lg w-full p-8 border rounded-xl shadow-lg bg-white space-y-6">
        <h2 className="text-3xl font-bold text-center">Profilni to‘ldiring</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Ism</Label>
            <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div>
            <Label>Familiya</Label>
            <Input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
        </div>

        <div>
          <Label>Telefon raqam</Label>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>

        <div>
          <Label>Yashash manzili</Label>
          <Input value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>

        <div>
          <Label>Profil rasmi (ixtiyoriy)</Label>
          <Input type="file" accept="image/*" onChange={(e) => e.target.files && setPhoto(e.target.files[0])} />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Saqlanmoqda..." : "Saqlash va davom etish"}
        </Button>
      </form>
    </div>
  );
}