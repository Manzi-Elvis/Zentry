'use client'

import { AppLayout } from '@/components/app-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Eye,
  EyeOff,
  Send,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  Bell,
} from 'lucide-react'
import { useState } from 'react'

// Mock data
const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
}

const mockBalance = 12547.89

const mockCards = [
  {
    id: '1',
    last4: '4242',
    type: 'Visa',
    balance: 8547.89,
  },
  {
    id: '2',
    last4: '5555',
    type: 'Mastercard',
    balance: 4000.0,
  },
]

const mockTransactions = [
  {
    id: '1',
    type: 'send',
    description: 'Sent to Sarah',
    amount: 150.0,
    date: '2024-05-27',
    time: '2:30 PM',
  },
  {
    id: '2',
    type: 'receive',
    description: 'Received from Mike',
    amount: 50.0,
    date: '2024-05-26',
    time: '10:15 AM',
  },
  {
    id: '3',
    type: 'send',
    description: 'Sent to Restaurant',
    amount: 45.50,
    date: '2024-05-25',
    time: '7:45 PM',
  },
  {
    id: '4',
    type: 'receive',
    description: 'Salary deposit',
    amount: 3000.0,
    date: '2024-05-24',
    time: '9:00 AM',
  },
]

export default function DashboardPage() {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Welcome back, {mockUser.name.split(' ')[0]}!
            </h1>
            <p className="text-muted-foreground mt-1">
              Here&apos;s your financial overview
            </p>
          </div>
          <button className="p-3 rounded-lg bg-card border border-border hover:bg-secondary transition-colors">
            <Bell size={20} className="text-foreground" />
          </button>
        </div>

        {/* Balance Card */}
        <Card className="bg-gradient-to-br from-primary to-primary/80 border-0 text-primary-foreground p-8 rounded-2xl">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-primary-foreground/80 text-sm mb-2">Total Balance</p>
              <div className="flex items-center gap-3">
                <h2 className="text-4xl sm:text-5xl font-bold">
                  {showBalance ? `$${mockBalance.toFixed(2)}` : '••••••'}
                </h2>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                >
                  {showBalance ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>
            <TrendingUp size={32} className="text-primary-foreground/80" />
          </div>

          {/* Card Info */}
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <p className="text-xs text-primary-foreground/60">Card Number</p>
              <p className="text-lg font-semibold tracking-widest">
                •••• •••• •••• 4242
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-primary-foreground/60">Valid Thru</p>
              <p className="text-sm font-semibold">12/26</p>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Button className="h-20 flex flex-col items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground border border-border">
            <Send size={24} />
            <span className="text-xs font-medium">Send Money</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground border border-border">
            <Plus size={24} />
            <span className="text-xs font-medium">Add Card</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground border border-border">
            <ArrowDownLeft size={24} />
            <span className="text-xs font-medium">Request</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground border border-border">
            <TrendingUp size={24} />
            <span className="text-xs font-medium">Analytics</span>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="bg-card border-border p-6 rounded-xl">
            <p className="text-sm text-muted-foreground mb-2">This Month</p>
            <p className="text-2xl font-bold text-foreground">$2,450.00</p>
            <p className="text-xs text-muted-foreground mt-2">Total spent</p>
          </Card>
          <Card className="bg-card border-border p-6 rounded-xl">
            <p className="text-sm text-muted-foreground mb-2">Received</p>
            <p className="text-2xl font-bold text-foreground">$3,050.00</p>
            <p className="text-xs text-muted-foreground mt-2">This month</p>
          </Card>
          <Card className="bg-card border-border p-6 rounded-xl">
            <p className="text-sm text-muted-foreground mb-2">Savings Rate</p>
            <p className="text-2xl font-bold text-primary">24.3%</p>
            <p className="text-xs text-muted-foreground mt-2">Target: 20%</p>
          </Card>
        </div>

        {/* Recent Activity Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-foreground">Recent Activity</h3>
            <a href="/transactions" className="text-sm text-primary hover:underline font-medium">
              View all
            </a>
          </div>

          <Card className="bg-card border-border rounded-xl overflow-hidden">
            <div className="divide-y divide-border">
              {mockTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="p-4 hover:bg-secondary/30 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-lg ${
                        transaction.type === 'send'
                          ? 'bg-destructive/10'
                          : 'bg-primary/10'
                      }`}
                    >
                      {transaction.type === 'send' ? (
                        <ArrowUpRight
                          size={20}
                          className={
                            transaction.type === 'send'
                              ? 'text-destructive'
                              : 'text-primary'
                          }
                        />
                      ) : (
                        <ArrowDownLeft
                          size={20}
                          className="text-primary"
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {transaction.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {transaction.date} at {transaction.time}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`text-sm font-bold ${
                      transaction.type === 'send'
                        ? 'text-destructive'
                        : 'text-primary'
                    }`}
                  >
                    {transaction.type === 'send' ? '-' : '+'}${transaction.amount.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Cards Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-foreground">Your Cards</h3>
            <a href="/wallets" className="text-sm text-primary hover:underline font-medium">
              Manage cards
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {mockCards.map((card) => (
              <Card
                key={card.id}
                className="bg-gradient-to-br from-secondary to-secondary/80 border-border p-6 rounded-xl"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{card.type}</p>
                    <p className="text-lg font-semibold text-foreground">
                      •••• {card.last4}
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    ${card.balance.toFixed(2)}
                  </p>
                </div>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Use Card
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
