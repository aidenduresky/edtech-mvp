# EdTech MVP — AI-Powered Adaptive Explanations

## What This Is
A web app where students input a topic and receive an explanation
tailored to their level: beginner, intermediate, or advanced.
Powered by the Anthropic API.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Anthropic API (claude-sonnet-4-6)
- Deployed on Vercel

## Folder Conventions
- /components   → reusable UI components (PascalCase)
- /app/api      → API routes
- /app          → pages using App Router

## Code Conventions
- TypeScript only, no plain JS
- Run `npm run lint` before every commit
- One feature per branch, named feature/description
- Commit after each working feature with a clear message

## MVP Feature Priority
1. Homepage with topic input + level selector
2. API route that calls Anthropic and returns explanation
3. Results display with clean formatting
4. (Defer) User accounts, history, saved explanations
