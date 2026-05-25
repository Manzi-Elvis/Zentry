import { Bell, CheckCircle2, ShieldAlert } from "lucide-react";

const notifications = [
  {
    title: "Payment received",
    description: "You received $980 from Client invoice.",
    icon: CheckCircle2,
  },
  {
    title: "Security check",
    description: "New login detected from a trusted device.",
    icon: ShieldAlert,
  },
  {
    title: "Wallet update",
    description: "Your USD wallet balance was updated.",
    icon: Bell,
  },
];

export default function NotificationsPage() {
  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm text-muted-foreground">Notifications</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Recent alerts
        </h1>

        <section className="mt-8 space-y-4">
          {notifications.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex gap-4 rounded-2xl border bg-card p-5 shadow-sm">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-background">
                  <Icon className="size-5 text-muted-foreground" />
                </div>

                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}