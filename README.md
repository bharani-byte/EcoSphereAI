# EcoSphereAI

EcoSphereAI is a premium ESG management platform built for the Odoo Hackathon. The stack combines a Next.js 15 frontend with an Express + Prisma + PostgreSQL backend for carbon tracking, CSR, governance, gamification, reports, and notifications.

## Tech Stack

- Frontend: Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Recharts
- Backend: Node.js, Express.js, Prisma ORM
- Database: PostgreSQL
- Auth: JWT + role-based access
- Storage: Cloudinary, email via Nodemailer

## Quick Start

1. Install dependencies:
   npm install
2. Create a PostgreSQL database and update backend/.env
3. Run Prisma migrations:
   npx prisma migrate dev
4. Seed initial data:
   npm run seed --workspace backend
5. Start the app:
   npm run dev

## Routes

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
