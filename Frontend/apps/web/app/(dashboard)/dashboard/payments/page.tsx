import { CalendarClock, Repeat, Send, Split } from "lucide-react";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";

const paymentTypes = [
  { title: "Send money", description: "Transfer funds instantly to another Zentry user.", icon: Send },
  { title: "Scheduled payments", description: "Plan payments for future dates with visibility.", icon: CalendarClock },
  { title: "Recurring payments", description: "Automate repeated payments for subscriptions or teams.", icon: Repeat },
  { title: "Split payments", description: "Divide payments across multiple recipients or wallets.", icon: Split },
];

export default function PaymentsPage() {
  return (
    <DashboardContainer>
      <PageHeader
        label="Payments"
        title="Move money securely"
        description="Create transfers, scheduled payments, recurring payments, and split payments."
      />

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {paymentTypes.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="rounded-2xl border bg-card p-5 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-xl border bg-background">
                <Icon className="size-5 text-muted-foreground" />
              </div>

              <h2 className="mt-6 font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>

              <Button className="mt-6 w-full" variant="outline">
                Start
              </Button>
            </div>
          );
        })}
      </section>
    </DashboardContainer>
  );
}