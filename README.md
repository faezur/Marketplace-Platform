# Marketplace Platform

Admin-Controlled Multi-Vendor Marketplace Platform — monorepo with React frontend, Express API, and shared packages.

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React 19, Vite, TypeScript, Tailwind CSS |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL, Prisma ORM |
| Auth | JWT + Refresh Token |

## Project Structure

```
marketplace-platform/
├── apps/
│   ├── web/          # React frontend (Vite)
│   └── api/          # Express backend
├── packages/
│   └── shared/       # Shared types and constants
└── package.json      # npm workspaces root
```

## Prerequisites

- Node.js 20+
- PostgreSQL (local or [Neon](https://neon.tech))

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example apps/api/.env
cp .env.example apps/web/.env
```

Edit `apps/api/.env` with your PostgreSQL connection string and JWT secrets.

### 3. Run database migrations

```bash
npm run db:migrate -w api
```

### 4. Start development servers

```bash
# Both frontend and backend
npm run dev

# Or individually
npm run dev:web   # http://localhost:5173
npm run dev:api   # http://localhost:4000
```

## API Health Check

```
GET http://localhost:4000/api/v1/health
```

Response:

```json
{ "status": "ok", "timestamp": "..." }
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start all apps in dev mode |
| `npm run dev:web` | Start frontend only |
| `npm run dev:api` | Start backend only |
| `npm run build` | Build all packages |
| `npm run typecheck` | Type-check all packages |

## Phase 1 Status

- [x] Monorepo with npm workspaces
- [x] React + Vite + Tailwind frontend scaffold
- [x] Express + TypeScript + Prisma backend scaffold
- [x] Shared package for common types
- [x] Health check endpoint
- [x] Initial User model (Prisma)
