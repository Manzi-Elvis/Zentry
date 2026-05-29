'use client'

import { AppLayout } from '@/components/app-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  User,
  Bell,
  Globe,
  Palette,
  LogOut,
  ChevronRight,
} from 'lucide-react'
import { useState } from 'react'
import { useTheme } from 'next-themes'

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
  })

  const [notifications, setNotifications] = useState({
    pushNotifications: true,
    emailNotifications: true,
    marketingEmails: false,
    weeklyReport: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Settings
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your account and preferences
          </p>
        </div>

        {/* Profile Settings */}
        <Card className="bg-card border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3 mb-2">
              <User size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                Profile Information
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Update your personal information
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Avatar Section */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    JD
                  </span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-border text-foreground"
                >
                  Change Avatar
                </Button>
              </div>
            </div>

            {/* Name Fields */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-background border border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-background border border-border"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-background border border-border"
              />
              <p className="text-xs text-muted-foreground">
                Verified ✓ | Change email address in security settings
              </p>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-background border border-border"
              />
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Save Changes
            </Button>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="bg-card border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3 mb-2">
              <Bell size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                Notifications
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Control how you receive updates and alerts
            </p>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Push Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Get notifications on your devices
                </p>
              </div>
              <Switch
                checked={notifications.pushNotifications}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({
                    ...prev,
                    pushNotifications: checked,
                  }))
                }
              />
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    Email Notifications
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Receive email updates
                  </p>
                </div>
                <Switch
                  checked={notifications.emailNotifications}
                  onCheckedChange={(checked) =>
                    setNotifications((prev) => ({
                      ...prev,
                      emailNotifications: checked,
                    }))
                  }
                />
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    Marketing Emails
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Promotional content and offers
                  </p>
                </div>
                <Switch
                  checked={notifications.marketingEmails}
                  onCheckedChange={(checked) =>
                    setNotifications((prev) => ({
                      ...prev,
                      marketingEmails: checked,
                    }))
                  }
                />
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Weekly Report</p>
                  <p className="text-sm text-muted-foreground">
                    Summary of your spending
                  </p>
                </div>
                <Switch
                  checked={notifications.weeklyReport}
                  onCheckedChange={(checked) =>
                    setNotifications((prev) => ({
                      ...prev,
                      weeklyReport: checked,
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Display Settings */}
        <Card className="bg-card border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3 mb-2">
              <Palette size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                Display Settings
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Customize your app experience
            </p>
          </div>

          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Theme</Label>
              <Select value={theme || 'dark'} onValueChange={setTheme}>
                <SelectTrigger className="bg-background border border-border">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 border-t border-border pt-4">
              <Label className="text-sm font-medium">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger className="bg-background border border-border">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 border-t border-border pt-4">
              <Label className="text-sm font-medium">Currency</Label>
              <Select defaultValue="usd">
                <SelectTrigger className="bg-background border border-border">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="gbp">GBP (£)</SelectItem>
                  <SelectItem value="jpy">JPY (¥)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Preferences */}
        <Card className="bg-card border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3 mb-2">
              <Globe size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                Preferences
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Manage your account preferences
            </p>
          </div>

          <div className="p-6 space-y-3">
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors border border-border">
              <span className="font-medium text-foreground">Help & Support</span>
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>

            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors border border-border">
              <span className="font-medium text-foreground">Terms & Conditions</span>
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>

            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors border border-border">
              <span className="font-medium text-foreground">Privacy Policy</span>
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>

            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors border border-border">
              <span className="font-medium text-foreground">About Zentry</span>
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>
          </div>
        </Card>

        {/* Logout */}
        <Button
          className="w-full h-12 bg-destructive hover:bg-destructive/90 text-destructive-foreground gap-2"
        >
          <LogOut size={20} />
          Logout
        </Button>
      </div>
    </AppLayout>
  )
}
