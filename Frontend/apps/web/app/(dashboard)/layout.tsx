import Link from "next/link";

import {
  BarChart3,
  CreditCard,
  Home,
  Menu,
  ReceiptText,
  Send,
  Settings,
 ShieldCheck,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Wallets",
    href: "/dashboard/wallets",
    icon: Wallet,
  },
  {
    label: "Payments",
    href: "/dashboard/payments",
    icon: Send,
  },
  {
    label: "Transactions",
    href: "/dashboard/transactions",
    icon: CreditCard,
  },
  {
    label: "Invoices",
    href: "/dashboard/invoices",
    icon: ReceiptText,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Security",
    href: "/dashboard/security",
    icon: ShieldCheck,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

function DashboardNav() {
  return (
    <nav className="space-y-1 p-4">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-background hover:text-foreground"
          >
            <Icon className="size-4" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        {/* Desktop Sidebar */}
        <aside className="hidden border-r bg-card lg:block">
          <div className="flex h-16 items-center border-b px-6">
            <Link
              href="/dashboard"
              className="text-xl font-bold tracking-tight"
            >
              Zentry
            </Link>
          </div>

          <DashboardNav />
        </aside>

        {/* Main Content */}
        <section className="flex flex-col">
          {/* Header */}
          <header className="flex h-16 items-center justify-between border-b px-4 sm:px-6">
            <div className="flex items-center gap-3">
              {/* Mobile Sidebar */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="flex lg:hidden"
                  >
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="left" className="w-72 p-0">
                  <div className="flex h-16 items-center border-b px-6">
                    <Link
                      href="/dashboard"
                      className="text-xl font-bold tracking-tight"
                    >
                      Zentry
                    </Link>
                  </div>

                  <DashboardNav />
                </SheetContent>
              </Sheet>

              <div>
                <p className="text-sm text-muted-foreground">
                  Workspace
                </p>
              </div>
            </div>

            {/* User */}
            <div className="rounded-full border px-3 py-1 text-sm">
              Elvis
            </div>
          </header>

          {/* Page Content */}
          <div className="flex-1">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}