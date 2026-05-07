# Frido Mother's Day Landing Page

A pixel-perfect clone of [myfrido.com/pages/mothers-day](https://myfrido.com/pages/mothers-day) — built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS v4**.

Product data is fetched in real-time from the **Shopify Storefront API** (GraphQL).

## Features

- **Hero Banner** — Full-width image with overlaid "M♡ther's Day" serif typography
- **Category Tabs** — Walk, Work, Travel, For Pain, Sleep — with pink stamp-border active state
- **Product Card Grid** — 4-column responsive grid with:
  - Image hover swap (primary ↔ secondary)
  - Color variant dots
  - Star ratings + review counts
  - MRP / Sale price with discount badges
- **Select Size Modal** — Slide-up bottom sheet with variant grid
- **Add to Cart** — Logs `{ productId, title, size, price }` to console, shows "Added ✓" for 2s
- **Comfort Bundles** — Pink gradient section with bundle cards
- **Footwear Section** — Second product grid with sub-category tabs
- **Countdown Timer** — Live countdown to Mother's Day
- **Free Gift Banner** — Animated promo for orders above ₹1,499
- **Footer** — Full site footer with links, socials, and payment badges

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI Framework |
| Vite 7 | Build tool + dev server |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| TanStack Query | Data fetching + caching |
| Shopify Storefront API | Product data (GraphQL) |
| Lucide React | Icons |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Environment Variables

The `.env` file contains:
```
VITE_SHOPIFY_DOMAIN=mothers-day-ny6tj8wi.myshopify.com
VITE_STOREFRONT_TOKEN=42f4690d276e7cee36f8e58324394768
```

> Shopify Storefront API tokens are designed to be public/client-facing.

## Responsive Breakpoints

| Screen | Grid Columns |
|--------|-------------|
| Desktop (>1024px) | 4 columns |
| Tablet (768–1024px) | 2 columns |
| Mobile (<768px) | 2 columns |
