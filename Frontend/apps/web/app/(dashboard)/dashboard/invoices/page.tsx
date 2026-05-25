import { FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const invoices = [
  {
    id: "INV-001",
    client: "Acme Studio",
    amount: "$1,200.00",
    status: "Paid",
  },
  {
    id: "INV-002",
    client: "Nova Labs",
    amount: "$850.00",
    status: "Pending",
  },
  {
    id: "INV-003",
    client: "Bright Agency",
    amount: "$2,400.00",
    status: "Draft",
  },
];

export default function InvoicesPage() {
  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Invoices</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Manage client invoices
            </h1>
          </div>

          <Button>
            <Plus className="mr-2 size-4" />
            New invoice
          </Button>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="rounded-2xl border bg-card p-5 shadow-sm">
              <FileText className="size-5 text-muted-foreground" />

              <p className="mt-5 text-sm text-muted-foreground">{invoice.id}</p>
              <h2 className="mt-1 font-semibold">{invoice.client}</h2>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-xl font-bold">{invoice.amount}</p>
                <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  {invoice.status}
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}