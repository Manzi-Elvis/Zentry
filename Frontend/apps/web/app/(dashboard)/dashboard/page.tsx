import { CreditCard, Send, ShieldCheck, Wallet } from "lucide-react";

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

const transactions = [
  {
    name: "Freelance payout",
    amount: "+$2,400.00",
    status: "Completed",
  },
  {
    name: "Currency conversion",
    amount: "-$320.00",
    status: "Completed",
  },
  {
    name: "Client invoice",
    amount: "+$980.00",
    status: "Pending",
  },
];

export default function DashboardPage() {
  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm text-muted-foreground">Welcome back</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Financial dashboard
          </h1>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.title} className="rounded-2xl border bg-card p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <Icon className="size-5 text-muted-foreground" />
                </div>

                <p className="mt-4 text-2xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
              </div>
            );
          })}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div>
              <h2 className="text-lg font-semibold">Wallet overview</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Your active balances across currencies.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {["USD", "EUR", "GBP", "RWF"].map((currency, index) => (
                <div
                  key={currency}
                  className="flex items-center justify-between rounded-xl border bg-background px-4 py-3"
                >
                  <div>
                    <p className="font-medium">{currency} Wallet</p>
                    <p className="text-sm text-muted-foreground">Available balance</p>
                  </div>

                  <p className="font-semibold">
                    {index === 0 && "$8,240.50"}
                    {index === 1 && "€2,180.00"}
                    {index === 2 && "£1,150.00"}
                    {index === 3 && "RWF 1,650,000"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div>
              <h2 className="text-lg font-semibold">Recent activity</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Latest financial movements.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.name}
                  className="flex items-center justify-between rounded-xl border bg-background px-4 py-3"
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
      </div>
    </main>
  );
}