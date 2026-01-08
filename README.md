# Preflights Landing

Landing page for [**Preflights**](https://github.com/ptngaye/preflights) —
a clarification and decision-capture engine for developers who use AI to code fast **without losing architectural intent**.

Preflights exists to solve a specific problem in AI-assisted development:

> **AI writes code fast.
> But no one explicitly decides what should be built.**

---

## What is Preflights?

Preflights is **not** a code generator.
It is **not** a replacement for Claude, Cursor, or other AI coding tools.

Preflights sits *before* implementation and focuses on one thing:

> **Making architectural and execution decisions explicit — before the AI writes code.**

It helps developers:
- keep the speed and flow of *vibe coding*
- avoid silent architectural drift
- reduce rework disguised as "fast iterations"
- give AI agents a stable, explicit context to execute against

---

## The Core Idea

AI-assisted coding currently mixes three very different activities:

1. **Deciding** (durable architectural choices)
2. **Specifying** (what to implement now, in scope)
3. **Implementing** (writing the code)

Preflights separates them explicitly.

The AI still writes the code.
Preflights makes sure **the right decisions are made — and recorded — first**.

---

## Who is this for?

This landing page is built for:
- experienced developers
- teams already using Claude / Cursor / Windsurf
- people who enjoy *vibe coding*
- but don't want to sacrifice long-term quality, clarity, or maintainability

If you've ever thought:
- "We moved fast… but now I'm not sure *why* things are this way"
- "The AI made choices I didn't explicitly agree with"
- "We'll clean this up later" (and never did)

→ Preflights is for you.

---

## Tech Stack

The landing page is intentionally modern, lightweight, and expressive.

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — subtle, high-signal animations
- **React Flow** — visualizing the Decide → Specify → Implement pipeline
- **next-intl** — proper i18n (EN / FR in V1, extensible)

---

## Internationalization

The site is **fully internationalized** using `next-intl`.

- Default language: **English**
- Secondary language (V1): **French**
- Architecture supports adding more locales without refactors

Translations live in:

```
messages/
├── en.json
└── fr.json
```

Routing is locale-based:

```
/en
/fr
```

---

## Project Structure

```
src/
├── app/[locale]/        # Locale-based routing (Next.js App Router)
├── components/
│   ├── sections/        # Page sections (Hero, Problem, Workflow, etc.)
│   └── ui/              # Reusable UI components
├── i18n/                # Internationalization config
├── lib/                 # Utilities
└── middleware.ts        # Locale detection and routing

messages/
├── en.json              # English translations
└── fr.json              # French translations
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

Deploy on Vercel:

```bash
vercel
```

Or build for production:

```bash
npm run build
npm run start
```

---

## License

Apache-2.0
