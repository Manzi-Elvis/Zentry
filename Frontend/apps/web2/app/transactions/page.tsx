'use client'

import { AppLayout } from '@/components/app-layout'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ArrowUpRight,
  ArrowDownLeft,
  Search,
  Filter,
  Download,
  Eye,
} from 'lucide-react'
import { useState } from 'react'

const mockAllTransactions = [
  {
    id: '1',
    type: 'send',
    description: 'Sent to Sarah',
    amount: 150.0,
    date: '2024-05-27',
    time: '2:30 PM',
    category: 'Personal',
    status: 'completed',
  },
  {
    id: '2',
    type: 'receive',
    description: 'Received from Mike',
    amount: 50.0,
    date: '2024-05-26',
    time: '10:15 AM',
    category: 'Personal',
    status: 'completed',
  },
  {
    id: '3',
    type: 'send',
    description: 'Sent to Restaurant ABC',
    amount: 45.50,
    date: '2024-05-25',
    time: '7:45 PM',
    category: 'Dining',
    status: 'completed',
  },
  {
    id: '4',
    type: 'receive',
    description: 'Salary deposit',
    amount: 3000.0,
    date: '2024-05-24',
    time: '9:00 AM',
    category: 'Income',
    status: 'completed',
  },
  {
    id: '5',
    type: 'send',
    description: 'Sent to Grocery Store',
    amount: 87.23,
    date: '2024-05-23',
    time: '5:15 PM',
    category: 'Groceries',
    status: 'completed',
  },
  {
    id: '6',
    type: 'send',
    description: 'Sent to Emma',
    amount: 25.0,
    date: '2024-05-22',
    time: '3:00 PM',
    category: 'Personal',
    status: 'completed',
  },
  {
    id: '7',
    type: 'receive',
    description: 'Refund from Online Store',
    amount: 120.0,
    date: '2024-05-21',
    time: '11:30 AM',
    category: 'Refund',
    status: 'completed',
  },
  {
    id: '8',
    type: 'send',
    description: 'Sent to Alex',
    amount: 200.0,
    date: '2024-05-20',
    time: '6:45 PM',
    category: 'Personal',
    status: 'pending',
  },
]

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterCategory, setFilterCategory] = useState('all')

  const filteredTransactions = mockAllTransactions.filter((transaction) => {
    const matchesSearch = transaction.description
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesType = filterType === 'all' || transaction.type === filterType
    const matchesCategory =
      filterCategory === 'all' || transaction.category === filterCategory

    return matchesSearch && matchesType && matchesCategory
  })

  // Group transactions by date
  const groupedTransactions = filteredTransactions.reduce(
    (acc, transaction) => {
      const date = transaction.date
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(transaction)
      return acc
    },
    {} as Record<string, typeof mockAllTransactions>
  )

  const categories = ['all', ...new Set(mockAllTransactions.map((t) => t.category))]

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Transactions
            </h1>
            <p className="text-muted-foreground mt-1">
              View and manage all your transactions
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors">
            <Download size={20} />
            Export
          </button>
        </div>

        {/* Filters */}
        <Card className="bg-card border-border rounded-xl p-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative sm:col-span-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-background border border-border pl-10"
              />
            </div>

            {/* Type Filter */}
            <div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="bg-background border border-border">
                  <Filter size={16} className="mr-2" />
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Transactions</SelectItem>
                  <SelectItem value="send">Sent</SelectItem>
                  <SelectItem value="receive">Received</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Category Filter */}
            <div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="bg-background border border-border">
                  <Filter size={16} className="mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === 'all'
                        ? 'All Categories'
                        : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Transactions List */}
        <div className="space-y-8">
          {Object.entries(groupedTransactions).length > 0 ? (
            Object.entries(groupedTransactions)
              .reverse()
              .map(([date, transactions]) => (
                <div key={date}>
                  {/* Date Header */}
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      {new Date(date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </h3>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Transactions for this date */}
                  <Card className="bg-card border-border rounded-xl overflow-hidden">
                    <div className="divide-y divide-border">
                      {transactions.map((transaction, idx) => (
                        <div
                          key={transaction.id}
                          className="p-4 hover:bg-secondary/30 transition-colors flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3 flex-1">
                            {/* Icon */}
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
                                  className="text-destructive"
                                />
                              ) : (
                                <ArrowDownLeft
                                  size={20}
                                  className="text-primary"
                                />
                              )}
                            </div>

                            {/* Details */}
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-semibold text-foreground">
                                {transaction.description}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                                  {transaction.category}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {transaction.time}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Amount & Status */}
                          <div className="text-right ml-4">
                            <p
                              className={`text-sm font-bold ${
                                transaction.type === 'send'
                                  ? 'text-destructive'
                                  : 'text-primary'
                              }`}
                            >
                              {transaction.type === 'send' ? '-' : '+'}$
                              {transaction.amount.toFixed(2)}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {transaction.status === 'completed'
                                ? 'Completed'
                                : 'Pending'}
                            </p>
                          </div>

                          {/* Action */}
                          <button className="ml-2 p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                            <Eye size={18} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No transactions found</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
