// components/MetricCard.tsx
import { Card, CardContent } from "@/components/ui/card";

type Props = { label: string; value: string; delta?: string };

export default function MetricCard({ label, value, delta }: Props) {
  return (
    <Card className="rounded-xl border border-[#2e2e2e] py-4">
      <CardContent className="px-6">
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm text-muted-foreground mt-2">{label}</p>
        {delta && (
          <p className="mt-1 text-xs text-green-600 dark:text-green-400">
            {delta} depuis le mois dernier
          </p>
        )}
      </CardContent>
    </Card>
  );
}
