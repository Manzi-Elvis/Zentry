'use client'

import { AppLayout } from '@/components/app-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Plus,
  Trash2,
  Edit,
  Copy,
  Check,
  CreditCard,
  Wallet,
  Eye,
  EyeOff,
} from 'lucide-react'
import { useState } from 'react'

const mockCards = [
  {
    id: '1',
    last4: '4242',
    type: 'Visa',
    brand: 'visa',
    expiry: '12/26',
    cvv: '•••',
    balance: 8547.89,
    status: 'active',
    holderName: 'John Doe',
  },
  {
    id: '2',
    last4: '5555',
    type: 'Mastercard',
    brand: 'mastercard',
    expiry: '08/25',
    cvv: '•••',
    balance: 4000.0,
    status: 'active',
    holderName: 'John Doe',
  },
  {
    id: '3',
    last4: '3782',
    type: 'American Express',
    brand: 'amex',
    expiry: '06/27',
    cvv: '•••',
    balance: 15000.0,
    status: 'inactive',
    holderName: 'John Doe',
  },
]

const mockBankAccounts = [
  {
    id: '1',
    bankName: 'Chase Bank',
    accountType: 'Checking',
    last4: '1234',
    balance: 25000.0,
    status: 'active',
  },
  {
    id: '2',
    bankName: 'Bank of America',
    accountType: 'Savings',
    last4: '5678',
    balance: 50000.0,
    status: 'active',
  },
]

export default function WalletsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [showDetails, setShowDetails] = useState<string | null>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Wallets & Cards
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your payment methods and bank accounts
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            <Plus size={20} />
            Add Card
          </Button>
        </div>

        <Tabs defaultValue="cards" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-secondary border border-border">
            <TabsTrigger value="cards" className="gap-2">
              <CreditCard size={18} />
              <span className="hidden sm:inline">Cards</span>
            </TabsTrigger>
            <TabsTrigger value="bank" className="gap-2">
              <Wallet size={18} />
              <span className="hidden sm:inline">Bank Accounts</span>
            </TabsTrigger>
          </TabsList>

          {/* Cards Tab */}
          <TabsContent value="cards" className="space-y-4">
            {mockCards.map((card) => (
              <Card
                key={card.id}
                className={`bg-card border-border rounded-xl overflow-hidden transition-all ${
                  showDetails === card.id ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="p-6">
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                        <CreditCard size={24} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {card.type}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          •••• {card.last4}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          card.status === 'active'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {card.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="space-y-3 mb-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          Card Number
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-mono text-foreground">
                            •••• •••• •••• {card.last4}
                          </p>
                          <button
                            onClick={() =>
                              handleCopy(
                                `4532${Math.random().toString().slice(2, 12)}`,
                                card.id
                              )
                            }
                            className="p-1 hover:bg-secondary rounded transition-colors"
                          >
                            {copiedId === card.id ? (
                              <Check size={16} className="text-primary" />
                            ) : (
                              <Copy size={16} className="text-muted-foreground" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          Expiry
                        </p>
                        <p className="text-sm font-mono text-foreground">
                          {card.expiry}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">CVV</p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-mono text-foreground">
                            {showDetails === card.id
                              ? '•••'
                              : '•••'}
                          </p>
                          <button
                            onClick={() =>
                              setShowDetails(
                                showDetails === card.id ? null : card.id
                              )
                            }
                            className="p-1 hover:bg-secondary rounded transition-colors"
                          >
                            {showDetails === card.id ? (
                              <EyeOff size={16} className="text-muted-foreground" />
                            ) : (
                              <Eye size={16} className="text-muted-foreground" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-1">
                        Card Balance
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        ${card.balance.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                      <Edit size={16} />
                      Edit Card
                    </Button>
                    <Button
                      variant="outline"
                      className="px-4 border-border text-destructive hover:bg-destructive/5"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Bank Accounts Tab */}
          <TabsContent value="bank" className="space-y-4">
            {mockBankAccounts.map((account) => (
              <Card
                key={account.id}
                className="bg-card border-border rounded-xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                        <Wallet size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {account.bankName}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {account.accountType} • {account.last4}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                      Active
                    </span>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground mb-1">
                      Account Balance
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      ${account.balance.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                      <Edit size={16} />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      className="px-4 border-border text-destructive hover:bg-destructive/5"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}

            {/* Add Bank Account */}
            <Card className="bg-card border-2 border-dashed border-border rounded-xl hover:border-primary transition-colors cursor-pointer">
              <div className="p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Plus size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  Add Bank Account
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect your bank account for faster transfers
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <Plus size={16} />
                  Connect Bank
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Security Info */}
        <Card className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-2">Security</h3>
          <p className="text-sm text-muted-foreground">
            All your payment methods are protected with encryption and fraud monitoring.
            We never store your full card details on our servers.
          </p>
        </Card>
      </div>
    </AppLayout>
  )
}
