import { Bell, Building2, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm text-muted-foreground">Settings</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Account settings
        </h1>

        <section className="mt-8 space-y-6">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <UserRound className="size-5 text-muted-foreground" />
              <h2 className="font-semibold">Profile</h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Input placeholder="Full name" defaultValue="Elvis Manzi" />
              <Input placeholder="Email" defaultValue="elvis@example.com" />
            </div>

            <Button className="mt-6">Save changes</Button>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Building2 className="size-5 text-muted-foreground" />
              <h2 className="font-semibold">Business profile</h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Input placeholder="Business name" />
              <Input placeholder="Country" defaultValue="Rwanda" />
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Bell className="size-5 text-muted-foreground" />
              <h2 className="font-semibold">Notifications</h2>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Payment alerts, security updates, and account activity notifications are enabled.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}