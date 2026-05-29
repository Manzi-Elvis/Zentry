'use client'

import { AppLayout } from '@/components/app-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
  Lock,
  Shield,
  Smartphone,
  Key,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import { useState } from 'react'

const mockSessions = [
  {
    id: '1',
    device: 'Chrome on MacOS',
    location: 'San Francisco, CA',
    lastActive: '2 minutes ago',
    current: true,
  },
  {
    id: '2',
    device: 'Safari on iPhone',
    location: 'San Francisco, CA',
    lastActive: '1 hour ago',
    current: false,
  },
]

export default function SecurityPage() {
  const [twoFAEnabled, setTwoFAEnabled] = useState(true)
  const [biometricEnabled, setBiometricEnabled] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [showSessions, setShowSessions] = useState(false)

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Security & Privacy
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your security settings and protect your account
          </p>
        </div>

        {/* Security Status */}
        <Card className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Shield size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">
                Your account is secure
              </h3>
              <p className="text-sm text-muted-foreground">
                All security features are enabled. Keep it that way to protect your
                account.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <CheckCircle size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">
                  All protections active
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Password Section */}
        <Card className="bg-card border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3 mb-2">
              <Key size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">Password</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Keep your password strong and update it regularly
            </p>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Password</p>
                <p className="text-sm text-muted-foreground">
                  Last changed 3 months ago
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Change Password
              </Button>
            </div>
          </div>
        </Card>

        {/* Two-Factor Authentication */}
        <Card className="bg-card border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3 mb-2">
              <Smartphone size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                Two-Factor Authentication
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Add an extra layer of security to your account
            </p>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">2FA Status</p>
                <p className="text-sm text-muted-foreground">
                  {twoFAEnabled
                    ? 'Enabled - Your account is protected'
                    : 'Disabled - Your account is not protected'}
                </p>
              </div>
              <Switch
                checked={twoFAEnabled}
                onCheckedChange={setTwoFAEnabled}
              />
            </div>

            {twoFAEnabled && (
              <div className="pt-4 space-y-3 border-t border-border">
                <div className="p-3 bg-secondary rounded-lg">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Authentication Methods
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Google Authenticator
                      </span>
                      <CheckCircle size={18} className="text-primary" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        SMS to +1 (555) 0123
                      </span>
                      <CheckCircle size={18} className="text-primary" />
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-border text-foreground"
                >
                  Manage 2FA Settings
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Biometric Authentication */}
        <Card className="bg-card border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3 mb-2">
              <Lock size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                Biometric Authentication
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Use your fingerprint or face to sign in faster
            </p>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">
                  Face ID &amp; Touch ID
                </p>
                <p className="text-sm text-muted-foreground">
                  {biometricEnabled
                    ? 'Enabled on your devices'
                    : 'Disabled'}
                </p>
              </div>
              <Switch
                checked={biometricEnabled}
                onCheckedChange={setBiometricEnabled}
              />
            </div>
          </div>
        </Card>

        {/* Active Sessions */}
        <Card className="bg-card border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3 mb-2">
              <Clock size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                Active Sessions
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Manage where you&apos;re signed in
            </p>
          </div>

          <div className="p-6 space-y-4">
            {mockSessions.map((session) => (
              <div
                key={session.id}
                className="p-4 rounded-lg bg-secondary border border-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground">
                      {session.device}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {session.location}
                      </span>
                    </div>
                  </div>
                  {session.current && (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary text-primary-foreground font-medium">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Last active: {session.lastActive}
                </p>
                {!session.current && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-border text-destructive"
                  >
                    Sign Out
                  </Button>
                )}
              </div>
            ))}

            <Button
              variant="outline"
              className="w-full border-border text-destructive"
            >
              Sign Out All Other Sessions
            </Button>
          </div>
        </Card>

        {/* Login Notifications */}
        <Card className="bg-card border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                Login Notifications
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Get alerts for unusual account activity
            </p>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Email Alerts</p>
                <p className="text-sm text-muted-foreground">
                  Receive alerts on new sign-ins
                </p>
              </div>
              <Switch
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
          </div>
        </Card>

        {/* Data & Privacy */}
        <Card className="bg-card border-border rounded-xl overflow-hidden">
          <div className="p-6 space-y-4">
            <h3 className="font-bold text-foreground">Data & Privacy</h3>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors text-left border border-border">
                <span className="font-medium text-foreground">
                  Download Your Data
                </span>
                <ArrowRight size={18} className="text-muted-foreground" />
              </button>

              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors text-left border border-border">
                <span className="font-medium text-foreground">
                  Privacy Policy
                </span>
                <ArrowRight size={18} className="text-muted-foreground" />
              </button>

              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors text-left border border-border text-destructive">
                <span className="font-medium">Delete Account</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}
