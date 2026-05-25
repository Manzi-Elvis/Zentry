import { BarChart3, TrendingUp, Wallet } from "lucide-react";

const metrics = [
  {
    title: "Revenue tracked",
    value: "$18,420.00",
    description: "+18% this month",
    icon: TrendingUp,
  },
  {
    title: "Wallet growth",
    value: "24%",
    description: "Across active balances",
    icon: Wallet,
  },
  {
    title: "Transfer volume",
    value: "$42,890.00",
    description: "Total processed value",
    icon: BarChart3,
  },
];

export default function AnalyticsPage() {
  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm text-muted-foreground">Analytics</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Financial insights
          </h1>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <div key={metric.title} className="rounded-2xl border bg-card p-5 shadow-sm">
                <Icon className="size-5 text-muted-foreground" />
                <p className="mt-5 text-sm text-muted-foreground">{metric.title}</p>
                <h2 className="mt-2 text-2xl font-bold">{metric.value}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{metric.description}</p>
              </div>
            );
          })}
        </section>

        <section className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Monthly activity</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            A visual chart will be connected here when real backend data is ready.
          </p>

          <div className="mt-8 grid h-64 grid-cols-6 items-end gap-3">
            {[45, 70, 55, 90, 65, 82].map((height, index) => (
              <div key={index} className="flex h-full items-end rounded-xl bg-background p-2">
                <div
                  className="w-full rounded-lg bg-primary"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}