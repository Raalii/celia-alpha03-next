// app/page.tsx  (Server Component)
import LogoutButton from "@/components/LogoutButton";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  // 1) Pas de session → page publique
  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">Bienvenue sur CELIA α</h1>
        <Link
          href="/login"
          className="rounded bg-primary px-4 py-2 text-white hover:bg-primary/90"
        >
          Se connecter
        </Link>
      </main>
    );
  }

  const role = (session.user as { role: string }).role;

  // 2) Redirection automatique selon rôle (sauf GHOST)
  if (role === "TEACHER") redirect("/teacher");
  if (role === "STUDENT") redirect("/student");
  if (role === "ECOLE") redirect("/ecole/kpi");

  // 3) Cas GHOST : on reste sur /
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Coucou, fantôme 👻</h1>
      <LogoutButton />
    </main>
  );
}
