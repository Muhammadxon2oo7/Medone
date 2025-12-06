// components/userinfo.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase";
import useAuth from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut } from "lucide-react";

export function UserInfo() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="flex items-center gap-3 animate-pulse">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div className="hidden lg:block">
          <div className="h-4 bg-gray-300 rounded w-32" />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <Button
        size="sm"
        onClick={() => router.push("/login")}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Kirish
      </Button>
    );
  }

  const displayName = user.firstName
    ? `${user.firstName} `
    : user.email?.split("@")[0] || "Foydalanuvchi";

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-3 hover:bg-gray-100 rounded-xl px-3 py-2 transition-all duration-200 group">
          {/* Avatar */}
          {(
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all">
              {displayName[0].toUpperCase()}
            </div>
          )}

          {/* Ism (faqat desktopda) */}
          <div className="hidden lg:flex flex-col items-start">
            <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              {displayName}
            </span>
            {user.phone && (
              <span className="text-xs text-gray-500">{user.phone}</span>
            )}
          </div>

          {/* Kichik strelka */}
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 mt-2">
        <DropdownMenuItem
          onClick={() => {
            setOpen(false);
            router.push("/profile");
          }}
          className="cursor-pointer flex items-center gap-3 text-gray-700 hover:bg-blue-50"
        >
          <User className="w-4 h-4" />
          <span>Profil</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer flex items-center gap-3 text-red-600 hover:bg-red-50 font-medium"
        >
          <LogOut className="w-4 h-4" />
          <span>Chiqish</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}