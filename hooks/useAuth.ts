// hooks/useAuth.ts
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;        // null bo‘lishi kerak, undefined emas
  phoneNumber: string | null;
  // Firestore’dan keladigan qo‘shimcha maydonlar
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
}

export type AuthState = {
  user: UserProfile | null;
  loading: boolean;
};

export default function useAuth(): AuthState {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Firebase Auth dan kelgan asosiy ma'lumotlar
        const baseUser: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,     // bu yerda null yoki string
          phoneNumber: firebaseUser.phoneNumber,
        };

        // Firestore’dan qo‘shimcha profil ma'lumotlarini olish
        try {
          const docRef = doc(db, "users", firebaseUser.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const extraData = docSnap.data();
            setUser({
              ...baseUser,
              ...extraData,           // firstName, lastName, phone, address, photoURL (agar yangilangan bo‘lsa)
              photoURL: extraData.photoURL ?? firebaseUser.photoURL, // agar Firestore’da yangi rasm bo‘lsa
            });
          } else {
            setUser(baseUser);
          }
        } catch (err) {
          console.error("Firestore o‘qishda xato:", err);
          setUser(baseUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}