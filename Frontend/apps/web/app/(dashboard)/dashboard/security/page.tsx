import { KeyRound, LockKeyhole, ShieldCheck, Smartphone } from "lucide-react";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { Button } from "@/components/ui/button";

const securityItems = [
  { title: "MFA", value: "Enabled", description: "Extra protection on sign in", icon: ShieldCheck },
  { title: "Passkeys", value: "Ready", description: "Modern passwordless access", icon: KeyRound },
  { title: "Devices", value: "2", description: "Trusted active devices", icon: Smartphone },
  { title: "Sessions", value: "Protected", description: "Secure session monitoring", icon: LockKeyhole },
];

export default function SecurityPage() {
  return (
    <DashboardContainer>
      <PageHeader
        label="Security"
        title="Account protection"
        description="Manage authentication, trusted devices, sessions, and risk controls."
      />

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {securityItems.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </section>

      <section className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Security recommendations</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Your account is currently protected. Keep MFA enabled, review trusted
          devices regularly, and monitor account activity for unusual behavior.
        </p>

        <Button className="mt-6">Review security settings</Button>
      </section>
    </DashboardContainer>
  );
}