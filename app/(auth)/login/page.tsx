"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { data } = useSession(); // session mise à jour quand signIn réussit
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false, // ⬅️ pas de redirection automatique
    });

    setLoading(false);

    if (res?.error) {
      // TODO: toast erreur
      return;
    }

    // session.user.role est à jour
    const role = data?.user.role;
    if (role === "TEACHER") router.replace("/teacher");
    else if (role === "STUDENT") router.replace("/student");
    else if (role === "ECOLE") router.replace("/ecole/kpi");
    else router.replace("/");
  }

  return (
    <SessionProvider>
      <div className="flex min-h-screen items-center justify-center bg-muted p-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-xl font-semibold">Connexion</CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" name="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter className="mt-8">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Connexion…" : "Se connecter"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </SessionProvider>
  );
}
