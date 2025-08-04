// components/RankCard.tsx
import Image from "next/image";

export function RankCard({
  rank,
  xp,
  xpToNext,
  level,
}: {
  rank: "Abeille" | "Sentinelle" | "Unknown";
  xp: number;
  xpToNext: number;
  level: number;
}) {
  const img =
    rank === "Abeille"
      ? "/img/gamification_abeille.png"
      : rank === "Sentinelle"
      ? "/img/gamification_sentinelle.png"
      : "/img/gamification_unkown.png";

  return (
    <div className="flex items-center gap-4 rounded-2xl bg-card p-4 shadow-sm dark:bg-card">
      <Image src={img} alt={rank} width={64} height={64} />
      <div className="flex-1">
        <p className="text-lg font-semibold">{xp} XP</p>
        <div className="my-1 h-3 w-full overflow-hidden rounded-full bg-accent">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${(xp / (xp + xpToNext)) * 100}%` }}
          />
        </div>
        <p className="text-sm text-primary">
          {rank} — Niveau {level}
        </p>
      </div>
      <Image
        src="/img/gamification_unkown.png"
        alt="Prochain rang"
        width={40}
        height={40}
      />
    </div>
  );
}
