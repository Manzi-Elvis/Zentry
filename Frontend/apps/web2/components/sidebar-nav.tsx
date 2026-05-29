'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  LayoutDashboard,
  Wallet,
  Send,
  History,
  Lock,
  Settings,
  LogOut,
  Menu,
  X,
  Moon,
  Sun,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

const mainNav = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Wallets',
    href: '/wallets',
    icon: Wallet,
  },
  {
    title: 'Payments',
    href: '/payments',
    icon: Send,
  },
  {
    title: 'Transactions',
    href: '/transactions',
    icon: History,
  },
]

const bottomNav = [
  {
    title: 'Security',
    href: '/security',
    icon: Lock,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
]

export function SidebarNav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-card border-b border-border h-16 px-4 flex items-center justify-between z-50">
        <div className="font-bold text-lg text-primary">Zentry</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 top-16"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col transition-transform lg:translate-x-0 lg:top-0 z-50',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          'lg:static lg:h-screen'
        )}
      >
        {/* Logo - Desktop Only */}
        <div className="hidden lg:flex items-center h-16 px-6 border-b border-border">
          <div className="font-bold text-xl text-primary">Zentry</div>
        </div>

        {/* Mobile Padding */}
        <div className="h-16 lg:hidden" />

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {mainNav.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                )}
              >
                <Icon size={20} />
                <span>{item.title}</span>
              </Link>
            )
          })}
        </nav>

        {/* Bottom Navigation */}
        <div className="border-t border-border p-4 space-y-1">
          {bottomNav.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                )}
              >
                <Icon size={20} />
                <span>{item.title}</span>
              </Link>
            )
          })}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium text-foreground hover:bg-secondary"
          >
            {theme === 'dark' ? (
              <>
                <Sun size={20} />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={20} />
                <span>Dark Mode</span>
              </>
            )}
          </button>

          {/* Logout */}
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium text-destructive hover:bg-secondary">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}
