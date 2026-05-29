import { ReactNode } from 'react'
import { SidebarNav } from './sidebar-nav'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      <SidebarNav />
      <main className="flex-1 overflow-auto">
        <div className="pt-16 lg:pt-0 pb-6">
          {children}
        </div>
      </main>
    </div>
  )
}
