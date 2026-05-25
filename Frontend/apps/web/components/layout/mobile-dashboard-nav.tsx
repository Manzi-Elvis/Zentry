"use client";

import Link from "next/link";
import {
  BarChart3,
  Bell,
  CreditCard,
  Home,
  Menu,
  ReceiptText,
  Send,
  Settings,
  ShieldCheck,
  UsersRound,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Wallets", href: "/dashboard/wallets", icon: Wallet },
  { label: "Payments", href: "/dashboard/payments", icon: Send },
  { label: "Transactions", href: "/dashboard/transactions", icon: CreditCard },
  { label: "Invoices", href: "/dashboard/invoices", icon: ReceiptText },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Team", href: "/dashboard/team", icon: UsersRound },
  { label: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { label: "Security", href: "/dashboard/security", icon: ShieldCheck },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function MobileDashboardNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="flex lg:hidden">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="border-b px-6 py-4 text-left">
          <SheetTitle>Zentry</SheetTitle>
        </SheetHeader>

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
                {item.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}