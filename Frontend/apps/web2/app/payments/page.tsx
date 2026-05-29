'use client'

import { AppLayout } from '@/components/app-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Send,
  DollarSign,
  Users,
  ArrowRight,
  Search,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import { useState } from 'react'

const mockContacts = [
  { id: '1', name: 'Sarah Johnson', email: 'sarah@example.com', avatar: 'SJ' },
  { id: '2', name: 'Mike Chen', email: 'mike@example.com', avatar: 'MC' },
  { id: '3', name: 'Emma Wilson', email: 'emma@example.com', avatar: 'EW' },
  { id: '4', name: 'Alex Rodriguez', email: 'alex@example.com', avatar: 'AR' },
]

const mockPaymentRequests = [
  {
    id: '1',
    fromName: 'Sarah Johnson',
    amount: 50.0,
    description: 'Dinner split',
    date: '2024-05-27',
    status: 'pending',
  },
  {
    id: '2',
    fromName: 'Mike Chen',
    amount: 25.0,
    description: 'Movie tickets',
    date: '2024-05-26',
    status: 'pending',
  },
]

const mockPaymentHistory = [
  {
    id: '1',
    toName: 'Sarah Johnson',
    amount: 150.0,
    description: 'Payment sent',
    date: '2024-05-27',
    status: 'completed',
  },
  {
    id: '2',
    toName: 'Restaurant ABC',
    amount: 45.50,
    description: 'Payment sent',
    date: '2024-05-25',
    status: 'completed',
  },
  {
    id: '3',
    toName: 'John Smith',
    amount: 200.0,
    description: 'Payment sent',
    date: '2024-05-24',
    status: 'pending',
  },
]

export default function PaymentsPage() {
  const [selectedContact, setSelectedContact] = useState<string | null>(null)
  const [amount, setAmount] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredContacts = mockContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Payments
          </h1>
          <p className="text-muted-foreground mt-1">
            Send money and manage payment requests
          </p>
        </div>

        <Tabs defaultValue="send" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-secondary border border-border">
            <TabsTrigger value="send" className="gap-2">
              <Send size={18} />
              <span className="hidden sm:inline">Send</span>
            </TabsTrigger>
            <TabsTrigger value="request" className="gap-2">
              <DollarSign size={18} />
              <span className="hidden sm:inline">Requests</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="gap-2">
              <Clock size={18} />
              <span className="hidden sm:inline">History</span>
            </TabsTrigger>
          </TabsList>

          {/* Send Money Tab */}
          <TabsContent value="send" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-card border-border rounded-xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Send Money
                  </h2>

                  <form className="space-y-6">
                    {/* Recipient */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Recipient</Label>
                      <Input
                        placeholder="Search contacts or enter email"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-background border border-border"
                      />
                      {searchQuery && (
                        <div className="grid gap-2">
                          {filteredContacts.length > 0 ? (
                            filteredContacts.map((contact) => (
                              <button
                                key={contact.id}
                                type="button"
                                onClick={() => {
                                  setSelectedContact(contact.id)
                                  setSearchQuery(contact.name)
                                }}
                                className="p-3 rounded-lg hover:bg-secondary transition-colors text-left border border-border"
                              >
                                <p className="font-medium text-foreground">
                                  {contact.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {contact.email}
                                </p>
                              </button>
                            ))
                          ) : (
                            <p className="text-sm text-muted-foreground p-3">
                              No contacts found
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Amount */}
                    <div className="space-y-3">
                      <Label htmlFor="amount" className="text-sm font-medium">
                        Amount
                      </Label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground font-semibold">
                          $
                        </span>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="0.00"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="bg-background border border-border pl-8 text-lg"
                        />
                      </div>
                    </div>

                    {/* Note */}
                    <div className="space-y-3">
                      <Label htmlFor="note" className="text-sm font-medium">
                        Note (optional)
                      </Label>
                      <Input
                        id="note"
                        placeholder="What&apos;s this payment for?"
                        className="bg-background border border-border"
                      />
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">From</Label>
                      <select className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground">
                        <option>•••• 4242 - Visa</option>
                        <option>•••• 5555 - Mastercard</option>
                      </select>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12">
                      <Send size={20} />
                      Send Money
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Quick Contacts */}
              <div>
                <Card className="bg-card border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-4">
                    Recent Contacts
                  </h3>
                  <div className="space-y-2">
                    {mockContacts.map((contact) => (
                      <button
                        key={contact.id}
                        onClick={() => setSearchQuery(contact.name)}
                        className="w-full p-3 rounded-lg hover:bg-secondary transition-colors text-left border border-border"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                            {contact.avatar}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                              {contact.name}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                              {contact.email}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Payment Requests Tab */}
          <TabsContent value="request" className="space-y-4">
            <Card className="bg-card border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Payment Requests
              </h2>

              <div className="space-y-3">
                {mockPaymentRequests.length > 0 ? (
                  mockPaymentRequests.map((request) => (
                    <div
                      key={request.id}
                      className="p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-semibold text-foreground">
                            {request.fromName} requested ${request.amount.toFixed(2)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {request.description}
                          </p>
                        </div>
                        <AlertCircle size={20} className="text-destructive" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">
                        {request.date}
                      </p>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                          Pay Now
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-border text-foreground"
                        >
                          Decline
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center py-8 text-muted-foreground">
                    No pending requests
                  </p>
                )}
              </div>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-4">
            <Card className="bg-card border-border rounded-xl overflow-hidden">
              <div className="divide-y divide-border">
                {mockPaymentHistory.map((payment) => (
                  <div
                    key={payment.id}
                    className="p-4 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          {payment.status === 'completed' ? (
                            <CheckCircle size={20} className="text-primary" />
                          ) : (
                            <Clock size={20} className="text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {payment.toName}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {payment.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-foreground">
                          -${payment.amount.toFixed(2)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {payment.status === 'completed' ? 'Completed' : 'Pending'}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground ml-13">
                      {payment.date}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}
