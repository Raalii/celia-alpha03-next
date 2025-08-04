// app/(protected)/student/components/RightColumn.tsx

import { Calendar } from "lucide-react";
import { RankCard } from "./RankCard";

const nextClasses = [
  { title: "Anglais", teacher: "Rayane Ain Seba", color: "bg-blue-500" },
  { title: "Math classes", teacher: "Ramzi Zaki", color: "bg-blue-500" },
  { title: "Biology classes", teacher: "Lina Marino", color: "bg-blue-500" },
  { title: "Physics classes", teacher: "Ranti Sumiarti", color: "bg-blue-500" },
];

export default function RightColumn() {
  return (
    <aside className="flex w-full max-w-xs flex-col gap-6">
      {/* Profil & Rank */}
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/60?u=1"
          alt=""
          className="h-12 w-12 rounded-full"
        />
        <div>
          <p className="font-semibold">Hassan BOUMAAZA</p>
          <p className="text-sm text-muted-foreground">Student</p>
        </div>
      </div>

      <RankCard rank="Abeille" xp={3191} xpToNext={540} level={9} />

      {/* Calendrier (placeholder) */}
      <div className="rounded-xl bg-card p-4 shadow-sm dark:bg-card">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Calendar size={16} /> Janvier 2024
        </div>
        <p className="mt-4 text-center text-muted-foreground text-xs">
          (mini calendrier à venir)
        </p>
      </div>

      {/* Next classes */}
      <div className="space-y-3">
        <p className="font-semibold">Mes prochains cours</p>
        {nextClasses.map((c) => (
          <div
            key={c.title}
            className="flex items-center gap-3 rounded-xl bg-card p-3 shadow-sm dark:bg-card"
          >
            <span className={`h-3 w-3 rounded-full ${c.color}`} />
            <div className="flex flex-col">
              <p className="text-sm font-medium">{c.title}</p>
              <p className="text-xs text-muted-foreground">{c.teacher}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
