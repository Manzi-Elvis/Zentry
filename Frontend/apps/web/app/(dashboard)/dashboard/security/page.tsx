import { LockKeyhole, ShieldCheck, Smartphone, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { title: "MFA", status: "Enabled", icon: ShieldCheck },
  { title: "Passkeys", status: "Ready", icon: KeyRound },
  { title: "Device control", status: "2 devices", icon: Smartphone },
  { title: "Session security", status: "Protected", icon: LockKeyhole },
];

export default function SecurityPage() {
  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm text-muted-foreground">Security</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Account protection
        </h1>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="rounded-2xl border bg-card p-5 shadow-sm">
                <Icon className="size-5 text-muted-foreground" />
                <h2 className="mt-5 font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{item.status}</p>
              </div>
            );
          })}
        </section>

        <section className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Security recommendations</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Your account is protected. Keep MFA enabled and review devices regularly.
          </p>

          <Button className="mt-6">Review security</Button>
        </section>
      </div>
    </main>
  );
}