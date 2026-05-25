import { Plus, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const members = [
  { name: "Elvis Manzi", role: "Owner", status: "Active" },
  { name: "Finance Manager", role: "Finance", status: "Invited" },
  { name: "Developer", role: "Developer", status: "Active" },
];

export default function TeamPage() {
  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Team</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Team management
            </h1>
          </div>

          <Button>
            <Plus className="mr-2 size-4" />
            Invite member
          </Button>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {members.map((member) => (
            <div key={member.name} className="rounded-2xl border bg-card p-5 shadow-sm">
              <UsersRound className="size-5 text-muted-foreground" />
              <h2 className="mt-5 font-semibold">{member.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{member.role}</p>
              <span className="mt-5 inline-flex rounded-full border px-3 py-1 text-xs text-muted-foreground">
                {member.status}
              </span>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}