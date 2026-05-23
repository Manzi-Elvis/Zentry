# Zentry

> Tap. Send. Done.

Zentry is a modern AI-powered fintech platform engineered for global payments, multi-currency wallets, remittance, business finance, developer APIs, and intelligent financial automation.

The platform is being designed with the same engineering mindset used in systems like Stripe, Wise, Revolut, Mercury, and PayPal.

This project focuses heavily on:

- Security
- Scalability
- Performance
- Financial correctness
- Clean architecture
- Premium user experience

---

# Vision

Zentry aims to become a financial operating system for:

- Individuals
- Freelancers
- Businesses
- Startups
- Enterprises
- Developers
- Merchants

The goal is to create a platform where sending money, managing finances, and automating payments feels seamless, intelligent, and trustworthy.

---

# Core Features

## Financial Infrastructure

- Multi-currency wallets
- Global money transfers
- Internal transfers
- Currency conversion
- Payment processing
- Recurring billing
- Subscription systems
- Escrow payments
- Marketplace payouts
- Virtual cards
- Financial analytics

---

## Security & Compliance

- JWT authentication
- MFA/TOTP
- Passkeys/WebAuthn
- Device management
- Suspicious activity detection
- Role-based access control
- Audit logging
- Rate limiting
- Fraud detection architecture
- AML/KYC-ready infrastructure

---

## Business Features

- Business accounts
- Team management
- Roles & permissions
- Invoices
- Contractor payments
- Payment automation
- Developer APIs
- Webhooks
- Reporting dashboards

---

## AI Features

- AI financial assistant
- Spending insights
- Fraud pattern detection
- Smart savings recommendations
- Cash flow prediction
- Risk scoring

---

# Architecture Philosophy

Zentry is designed using a modular architecture with clear service boundaries.

The platform prioritizes:

1. Financial correctness
2. Secure infrastructure
3. Long-term scalability
4. High-performance systems
5. Excellent developer experience

This is not a toy fintech clone.

The goal is to engineer a production-grade financial platform with real-world architecture principles.

---

# Tech Stack

## Frontend

- Next.js
- TypeScript
- TailwindCSS
- shadcn/ui
- TanStack Query
- Redux Toolkit / Zustand
- Framer Motion
- React Hook Form
- Zod

---

## Mobile

- React Native
- Expo
- TypeScript
- React Query
- Secure Storage
- Biometric Authentication

---

## Backend

### Java + Spring Boot

Used for:
- Authentication
- User management
- Organizations
- Compliance
- Admin systems
- Reporting

### Go (Golang)

Used for:
- Wallet engine
- Ledger service
- Payment processing
- FX engine
- Notifications
- Realtime systems

### Python

Used for:
- AI systems
- Fraud detection
- Risk analysis
- Predictive analytics

---

# Infrastructure

- Docker
- Kubernetes
- Terraform
- PostgreSQL
- Redis
- Kafka
- AWS
- GitHub Actions
- Prometheus
- Grafana
- OpenTelemetry

---

# Repository Structure

```txt
zentry/
├── frontend/
├── backend/
├── docs/
├── scripts/
└── .github/
```

---

# Frontend Structure

```txt
frontend/
├── apps/
│   ├── web/
│   ├── admin/
│   └── mobile/
│
├── packages/
│   ├── ui/
│   ├── shared-types/
│   ├── validations/
│   └── config/
```

---

# Backend Structure

```txt
backend/
├── services/
│   ├── api-gateway/
│   ├── auth-service/
│   ├── wallet-service/
│   ├── ledger-service/
│   ├── payment-service/
│   └── fraud-service/
│
├── infrastructure/
├── databases/
└── packages/
```

---

# Most Important Service

## Ledger Service

The ledger system is the financial core of Zentry.

It uses double-entry accounting to guarantee:

- Immutable financial history
- Accurate balances
- Atomic transactions
- Reconciliation support
- Financial auditability

Important principle:

> No money moves unless the ledger records it correctly.

---

# Engineering Principles

- Clean architecture
- SOLID principles
- Domain-driven design
- Event-driven systems
- Secure-by-default development
- Strong typing
- Modular systems
- Reusable packages
- Production-grade code quality

---

# Security Principles

Zentry is designed with security-first engineering.

Key principles include:

- Never trust frontend data
- Never store money as floats
- Never expose secrets
- Never skip validation
- Never move money outside the ledger
- Never allow unaudited admin actions

---

# Scalability Strategy

The system is designed to scale using:

- Modular services
- Event-driven architecture
- Kafka messaging
- Redis caching
- PostgreSQL partitioning
- Horizontal scaling
- Kubernetes orchestration

---

# Current Development Stage

Zentry is currently in active architecture and foundation development.

Initial focus:

- Monorepo setup
- Authentication
- Wallet infrastructure
- Ledger system
- Internal transfers
- Security foundation

---

# Why I’m Building This

I’m building Zentry to deeply learn:

- Fintech systems engineering
- Distributed backend architecture
- Payment infrastructure
- Secure software design
- Scalable systems
- Production-grade frontend architecture

This project is also a long-term challenge to push myself toward engineering systems at a world-class level.

---

# Long-Term Goal

The long-term goal is to evolve Zentry into:

- A modern neobank
- A payment infrastructure company
- A remittance platform
- A financial automation platform
- A developer-first fintech ecosystem

---

# Author

MANZI RURANGIRWA Elvis

Software Engineer passionate about:
- Fintech
- Scalable systems
- AI-powered products
- Security engineering
- Modern frontend architecture
- Building ambitious products from scratch

---

# Status

Currently under active development.