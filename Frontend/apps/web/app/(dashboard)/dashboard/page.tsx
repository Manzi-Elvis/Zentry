import { CreditCard, Send, ShieldCheck, Wallet } from "lucide-react";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";

const stats = [
  {
    title: "Total balance",
    value: "$12,840.50",
    description: "+12.5% from last month",
    icon: Wallet,
  },
  {
    title: "Monthly sent",
    value: "$3,420.00",
    description: "Across 18 transfers",
    icon: Send,
  },
  {
    title: "Active wallets",
    value: "4",
    description: "USD, EUR, GBP, RWF",
    icon: CreditCard,
  },
  {
    title: "Security score",
    value: "96%",
    description: "Strong account protection",
    icon: ShieldCheck,
  },
];

const wallets = [
  { name: "USD Wallet", description: "Available balance", value: "$8,240.50" },
  { name: "EUR Wallet", description: "Available balance", value: "€2,180.00" },
  { name: "GBP Wallet", description: "Available balance", value: "£1,150.00" },
  { name: "RWF Wallet", description: "Available balance", value: "RWF 1,650,000" },
];

const transactions = [
  { name: "Freelance payout", status: "Completed", amount: "+$2,400.00" },
  { name: "Currency conversion", status: "Completed", amount: "-$320.00" },
  { name: "Client invoice", status: "Pending", amount: "+$980.00" },
];

export default function DashboardPage() {
  return (
    <DashboardContainer>
      <PageHeader
        label="Welcome back"
        title="Financial dashboard"
        description="Track balances, transfers, wallet activity, and security from one clean workspace."
      />

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Wallet overview</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Your active balances across currencies.
          </p>

          <div className="mt-6 space-y-4">
            {wallets.map((wallet) => (
              <div
                key={wallet.name}
                className="flex items-center justify-between gap-4 rounded-xl border bg-background px-4 py-3"
              >
                <div>
                  <p className="font-medium">{wallet.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {wallet.description}
                  </p>
                </div>

                <p className="text-right font-semibold">{wallet.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Recent activity</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Latest financial movements.
          </p>

          <div className="mt-6 space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.name}
                className="flex items-center justify-between gap-4 rounded-xl border bg-background px-4 py-3"
              >
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.status}
                  </p>
                </div>

                <p className="font-semibold">{transaction.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardContainer>
  );
}