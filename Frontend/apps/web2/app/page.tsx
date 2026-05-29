'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Check,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function LandingPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-card/50 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">Z</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">Zentry</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Sign in
            </Link>
            <Link href="/signup">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Tap. Send.{' '}
              <span className="text-primary">Done.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of financial transactions. Fast, secure, and
              intuitive payment management for modern users.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start free trial
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary"
              >
                Sign in to account
              </Button>
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            {['24/7 Support', 'Bank-level Security', 'Instant Transfers'].map((feature) => (
              <div
                key={feature}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-foreground"
              >
                <Check size={16} className="text-primary" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-xl mb-4">
                  <Zap size={32} className="text-primary" />
                </div>
                <p className="text-foreground font-medium">Dashboard Preview</p>
                <p className="text-sm text-muted-foreground">Sign in to explore the full experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Everything you need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for secure, fast, and easy payment management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Bank-level Security',
                description:
                  'End-to-end encryption and multi-factor authentication to keep your funds safe',
              },
              {
                icon: Zap,
                title: 'Instant Transfers',
                description:
                  'Send money in seconds with real-time processing and settlement',
              },
              {
                icon: Globe,
                title: 'Global Access',
                description:
                  'Send and receive from anywhere in the world with competitive exchange rates',
              },
              {
                icon: Users,
                title: 'Share with Friends',
                description:
                  'Split bills, request payments, and manage group expenses effortlessly',
              },
              {
                icon: TrendingUp,
                title: 'Financial Insights',
                description:
                  'Track spending patterns and get smart recommendations to manage your money',
              },
              {
                icon: Zap,
                title: '24/7 Support',
                description:
                  'Get help when you need it with our responsive customer support team',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-background border border-border hover:border-primary transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8 bg-primary/10 rounded-2xl p-8 sm:p-12 border border-primary/20">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of users experiencing the future of payments
            </p>
          </div>
          <Link href="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Create your account
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">Z</span>
                </div>
                <span className="font-bold text-foreground">Zentry</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Tap. Send. Done.
              </p>
            </div>
            {[
              {
                title: 'Product',
                links: ['Features', 'Security', 'Pricing', 'Blog'],
              },
              {
                title: 'Company',
                links: ['About', 'Careers', 'Contact', 'Legal'],
              },
              {
                title: 'Resources',
                links: ['Help Center', 'API Docs', 'Status', 'Community'],
              },
            ].map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold text-foreground mb-4 text-sm">
                  {group.title}
                </h4>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Zentry. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
