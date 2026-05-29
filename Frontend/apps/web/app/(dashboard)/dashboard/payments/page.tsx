"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send } from "lucide-react";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PaymentInput = {
  recipient: string;
  amount: string;
  currency: string;
  note: string;
};

const recentRecipients = [
  "alice@zentry.app",
  "client@nova.com",
  "finance@acme.com",
];

export default function PaymentsPage() {
  const form = useForm<PaymentInput>({
    defaultValues: {
      recipient: "",
      amount: "",
      currency: "USD",
      note: "",
    },
  });

  function onSubmit(values: PaymentInput) {
    console.log(values);
    toast.success("Payment request created successfully.");
    form.reset({
      recipient: "",
      amount: "",
      currency: "USD",
      note: "",
    });
  }

  return (
    <DashboardContainer>
      <PageHeader
        label="Payments"
        title="Send money"
        description="Create a secure payment request. Backend processing will be connected in the next phase."
      />

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl border bg-background">
              <Send className="size-5 text-muted-foreground" />
            </div>

            <div>
              <h2 className="font-semibold">New payment</h2>
              <p className="text-sm text-muted-foreground">
                Enter recipient and payment details.
              </p>
            </div>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Recipient</label>
              <Input
                placeholder="recipient@example.com"
                {...form.register("recipient", { required: true })}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_140px]">
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount</label>
                <Input
                  type="number"
                  placeholder="100.00"
                  {...form.register("amount", { required: true })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Currency</label>
                <Input {...form.register("currency")} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Note</label>
              <Input
                placeholder="Payment for project work"
                {...form.register("note")}
              />
            </div>

            <Button type="submit" className="w-full">
              Create payment
            </Button>
          </form>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="font-semibold">Recent recipients</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Quickly reuse trusted recipients.
          </p>

          <div className="mt-6 space-y-3">
            {recentRecipients.map((recipient) => (
              <button
                key={recipient}
                type="button"
                onClick={() => form.setValue("recipient", recipient)}
                className="w-full rounded-xl border bg-background px-4 py-3 text-left text-sm transition hover:bg-muted"
              >
                {recipient}
              </button>
            ))}
          </div>
        </div>
      </section>
    </DashboardContainer>
  );
}