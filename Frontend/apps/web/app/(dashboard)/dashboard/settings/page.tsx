import { Bell, Building2, UserRound } from "lucide-react";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <DashboardContainer>
      <div className="max-w-4xl">
        <PageHeader
          label="Settings"
          title="Account settings"
          description="Manage profile, business details, notification preferences, and workspace settings."
        />

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
              Payment alerts, security updates, account activity, and risk alerts are enabled.
            </p>
          </div>
        </section>
      </div>
    </DashboardContainer>
  );
}