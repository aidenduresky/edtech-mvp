# Prysm

AI-powered adaptive explanations — any topic, at your level, in the format that works for you.

## What it does

Enter a topic, choose a knowledge level (beginner / intermediate / advanced), and pick a learning format (Reading, Visual, Analogy, Step-by-step). Prysm calls the Anthropic API and returns an explanation tailored to both.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with a custom earth-tone design system
- **Anthropic API** (`claude-sonnet-4-6`)
- **Mermaid** for visual/diagram format
- Deployed on **Vercel**

## Getting started

```bash
# Install dependencies
npm install

# Add your Anthropic API key
cp .env.example .env.local
# → edit .env.local and set ANTHROPIC_API_KEY=sk-...

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/           Pages and API routes (App Router)
components/    UI components
  ui/          Design system primitives (Button, Card, Input, …)
  site/        Layout chrome (Navbar, Footer)
lib/           Shared utilities and Anthropic client
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint (run before every commit) |
