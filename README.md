# Interview App

## Getting Started

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the instructions.

## Task

This application resembles a (drastically) simplified version of our discount portals. For the sake of simplicity this is a single NextJS app instead of multiple as we have it in the actual setup.

If you navigate to [/site-a/dummy-shop](https://example.com/site-a/dummy-shop), you can see a dummy shop page with a list of discounts.

The goal for this session is to setup a shop page similar to the page for `site-a` for `site-b`. In this process we want to focus on making the functionality reusable so that basic functionality (data fetching and checkouts) is the same for `site-a`, `site-b`, and could be reused for a future `site-c`. The code should still allow customizability like different discount sorting methods or varying checkout paths.
