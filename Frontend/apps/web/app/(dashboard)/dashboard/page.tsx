import { CreditCard, Send, ShieldCheck, Wallet } from "lucide-react";

const stats = [
  {
    title: "Total balance",
    value: "$12,840.50",
    icon: Wallet,
  },
  {
    title: "Monthly sent",
    value: "$3,420.00",
    icon: Send,
  },
  {
    title: "Active wallets",
    value: "4",
    icon: CreditCard,
  },
  {
    title: "Security score",
    value: "96%",
    icon: ShieldCheck,
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-8 text-foreground">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm text-muted-foreground">Welcome back</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Financial dashboard
          </h1>
        </div>

        <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.title} className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <Icon className="size-5 text-muted-foreground" />
                </div>

                <p className="mt-4 text-2xl font-bold">{stat.value}</p>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}