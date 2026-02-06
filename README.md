# FlexPOS

FlexPOS is a modern **Point of Sale (POS)** and **QR Table Ordering System** built with **Next.js Monorepo** architecture.

This project is designed for **UMKM businesses** such as:

- Cafes & Restaurants (QR Table Ordering)
- Retail Stores (POS Checkout)
- Small Food Courts & Multi-purpose Shops

FlexPOS follows **Clean Architecture principles** to ensure scalability, maintainability, and clear separation of concerns.

---

## Features

### POS Dashboard (Owner/Staff)

- Product & menu management
- POS checkout flow (Retail mode)
- Incoming orders monitoring
- Payment handling (Cash / QRIS-ready)
- Admin reporting (planned)

### Customer QR Table Ordering

- Scan QR code per table
- Mobile-first ordering experience
- Cart & order submission
- Order status tracking (planned)

### Shared Business Core (Clean Architecture)

- Domain-driven design
- Reusable usecases across apps
- Strong separation between UI and business logic

---

## Monorepo Structure

FlexPOS uses a **Turborepo Monorepo** setup:

```bash
flexpos/
├── apps/
│   ├── pos-dashboard/       # POS Dashboard (Owner/Staff)
│   └── customer-order/      # Customer QR Ordering App
│
├── packages/
│   └── domain/              # Shared Domain Layer (Clean Architecture Core)
│   └── ui/                  # Shared UI components
│
├── .husky/                  # Git hooks (Husky)
├── turbo.json               # Turborepo pipeline config
└── package.json             # Root workspace config
```

---

## Apps Overview

### 1. POS Dashboard

Internal application for owner/staff.

Location:

```
apps/posh-dashboard
```

### 2. Customer QR Ordering App

Public application for customers.

Location:

```
apps/customer-order
```

---

## Getting Started

### Prerequisites

Make sure you have:

- Make sure you have:
- npm >= 9

### Installing Dependencies

From the project root:

```bash
npm install
```

### Run Development Mode

Run all apps at once:

```bash
npm run dev
```

Apps will run on:

- POS Dashboard -> (http://localhost:3000)[http://localhost:3000]
- Customer Ordering -> (http://localhost:3001)[http://localhost:3001]

---

## Testing

Domain logic is tested using Vitest.

Run tests:

```bash
npm run test
```

---

## Code Quality Tools

FlexPOS includes:

### Prettier

Format all code:

```bash
npm run format
```

### Husky + lint-staged

Pre-commit hooks automatically run formatting before commit.

---

## Pull Request Standard

This repository includes a Pull Request template:

- Module impacted
- Module impacted
- POS flow checklist
- Testing requirements

--

## Contributing

Contributions are welcome!

1. Fork this repo
2. Contributions are welcome!

```bash
git checkout -b feat/new-feature
```

3. git checkout -b feat/new-feature

```bash
git commit -m "feat: add new module"
```

4. Open a Pull Request

---

## Author

Built with ❤️ by FlexPOS Team
Built with ❤️ by FlexPOS Team

---
