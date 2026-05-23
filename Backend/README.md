# Zentry Backend

This repository contains the backend infrastructure and services powering the Zentry financial platform.

The backend is engineered with a strong focus on:

- Financial correctness
- Security
- Scalability
- Observability
- Performance
- Reliability

This is the core financial infrastructure behind Zentry.

---

# Backend Philosophy

The backend is designed using:

- Service-oriented architecture
- Event-driven systems
- Strong financial consistency
- Secure-by-default engineering
- Modular backend design

The architecture separates:
- business logic
- financial logic
- authentication
- fraud systems
- infrastructure concerns

This improves:
- scalability
- maintainability
- reliability
- security

---

# Core Services

## API Gateway

Handles:
- request routing
- authentication checks
- rate limiting
- logging
- request validation

---

## Auth Service

Handles:
- login
- signup
- JWT authentication
- refresh tokens
- MFA
- passkeys
- session management

---

## Wallet Service

Handles:
- wallet creation
- balances
- multi-currency accounts
- wallet operations

---

## Ledger Service

The most critical service in the entire platform.

Handles:
- double-entry accounting
- immutable transaction history
- reconciliation
- atomic transaction posting
- financial correctness

Important rule:

> No money moves unless the ledger records it correctly.

---

## Payment Service

Handles:
- transfers
- payment flows
- refunds
- recurring billing
- escrow
- payouts

---

## Fraud Service

Handles:
- suspicious activity detection
- risk scoring
- transaction monitoring
- fraud review systems

---

# Technology Stack

## Java + Spring Boot

Used for:
- auth systems
- user management
- organizations
- compliance
- reporting

---

## Go (Golang)

Used for:
- ledger systems
- payment processing
- wallet systems
- realtime systems
- high-performance services

---

## Python

Used for:
- AI systems
- fraud analysis
- risk scoring
- predictive analytics

---

# Infrastructure Stack

- PostgreSQL
- Redis
- Kafka
- Docker
- Kubernetes
- Terraform
- AWS
- GitHub Actions
- Prometheus
- Grafana

---

# Folder Structure

```txt
backend/
├── services/
├── packages/
├── infrastructure/
├── databases/
├── scripts/
└── docs/
```

---

# Event-Driven Architecture

The backend uses Kafka for asynchronous event processing.

Example events:

- PaymentSucceeded
- PaymentFailed
- WalletCreated
- FraudReviewRequired
- InvoicePaid

This architecture improves:
- scalability
- resilience
- decoupling
- performance

---

# Financial System Design

Zentry uses double-entry accounting.

Every transaction records:
- debits
- credits
- immutable entries

This ensures:
- auditability
- consistency
- reconciliation support
- accurate balances

Money values are stored as integers, never floats.

Example:

```txt
1099 = $10.99
```

This avoids floating-point precision problems.

---

# Security Principles

Security is treated as a core engineering requirement.

Key principles:

- Never trust frontend data
- Validate everything
- Encrypt sensitive data
- Use RBAC
- Audit admin actions
- Use idempotency keys
- Protect APIs with rate limiting
- Store secrets securely
- Enforce least privilege

---

# Scalability Strategy

The backend is designed to scale horizontally.

Scalability strategies include:

- independent services
- Redis caching
- Kafka event streaming
- database partitioning
- background workers
- Kubernetes orchestration

---

# Observability

The backend is designed to be observable from the beginning.

Includes:
- logs
- metrics
- traces
- alerts
- monitoring dashboards

Tools:
- OpenTelemetry
- Prometheus
- Grafana
- ELK Stack

---

# Engineering Goals

This backend is being built to deeply explore:

- fintech systems
- distributed systems
- secure backend architecture
- payment infrastructure
- scalable APIs
- production-grade engineering

---

# Long-Term Goal

The long-term goal is to evolve Zentry into a scalable financial platform capable of supporting:

- global payments
- remittance
- business finance
- merchant APIs
- financial automation
- intelligent payment systems

---

# Author

MANZI RURANGIRWA Elvis

Software Engineer focused on:
- fintech systems
- scalable backend architecture
- payment infrastructure
- security engineering
- distributed systems

---

# Status

Backend foundation currently under active development.