import { ArrowDownLeft, ArrowUpRight, Plus, Wallet } from "lucide-react";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";

const wallets = [
  { currency: "USD", name: "US Dollar Wallet", balance: "$8,240.50", status: "Active" },
  { currency: "EUR", name: "Euro Wallet", balance: "€2,180.00", status: "Active" },
  { currency: "GBP", name: "British Pound Wallet", balance: "£1,150.00", status: "Active" },
  { currency: "RWF", name: "Rwandan Franc Wallet", balance: "RWF 1,650,000", status: "Active" },
];

export default function WalletsPage() {
  return (
    <DashboardContainer>
      <PageHeader
        label="Wallets"
        title="Multi-currency wallets"
        description="Hold, manage, send, and receive money across multiple currencies."
        action={
          <Button>
            <Plus className="mr-2 size-4" />
            Add wallet
          </Button>
        }
      />

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {wallets.map((wallet) => (
          <div key={wallet.currency} className="rounded-2xl border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex size-11 items-center justify-center rounded-xl border bg-background">
                <Wallet className="size-5 text-muted-foreground" />
              </div>

              <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                {wallet.status}
              </span>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">{wallet.currency}</p>
            <h2 className="mt-1 font-semibold">{wallet.name}</h2>
            <p className="mt-4 text-2xl font-bold">{wallet.balance}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" size="sm">
                <ArrowUpRight className="mr-2 size-4" />
                Send
              </Button>

              <Button variant="outline" size="sm">
                <ArrowDownLeft className="mr-2 size-4" />
                Receive
              </Button>
            </div>
          </div>
        ))}
      </section>
    </DashboardContainer>
  );
}