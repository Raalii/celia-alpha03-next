// lib/useUser.ts
"use client";
import { useSession } from "next-auth/react";
export function useUser() {
  const { data } = useSession();
  return data?.user ?? null; // { id, email, role, exp, ... }
}
