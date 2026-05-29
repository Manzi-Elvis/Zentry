import { ReactNode } from 'react'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">Z</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Zentry</h1>
          <p className="text-muted-foreground">Tap. Send. Done.</p>
        </div>

        {/* Form Container */}
        <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
          {children}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          © 2024 Zentry. All rights reserved.
        </p>
      </div>
    </div>
  )
}
