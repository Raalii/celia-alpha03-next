import ExplicationLevel from "./components/ExplicationLevel";
import MetricCard from "./components/MetricCard";
import ProductivityBar from "./components/ProductivityBar";
import ProgressChart from "./components/ProgressChart";
import ProgressClass from "./components/ProgressClass";

export default function StudentDashboard() {
  return (
    <section className="flex flex-col gap-8 px-6">
      <h1 className="text-center text-3xl font-bold">Tableau de bord</h1>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        <MetricCard
          label="Taux d'implication global"
          value="68 %"
          delta="+7 %"
        />
        <MetricCard label="Moyenne actuelle" value="14.8/20" />
        <MetricCard label="Exercices réalisés" value="18" delta="+10" />
        <MetricCard label="XP ce mois" value="+448 XP" delta="+95 XP" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-xl bg-card p-6 shadow-sm dark:bg-card">
          <div className="flex w-full justify-between">
            <p className="mb-2 text-sm font-medium">
              Progression des compétences
            </p>
            <p className="mb-2 text-sm font-regular italic text-blue-500">
              Anglais
            </p>
          </div>
          <ProgressChart />
          <div className="mt-12">
            <ExplicationLevel />
          </div>
        </div>
        <div>
          <div className="rounded-xl bg-card p-6 shadow-sm dark:bg-card">
            <p className="mb-2 text-sm font-medium">Productivité (heures)</p>
            <ProductivityBar />
          </div>

          <div className="rounded-xl bg-card p-6 shadow-sm dark:bg-card xl:col-span-2 mt-8">
            <p className="mb-2 text-sm font-medium">
              Taux de concentration en classe
            </p>
            <ProgressClass />
          </div>
        </div>
      </div>
    </section>
  );
}
