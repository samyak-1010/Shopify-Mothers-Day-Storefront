# 🌸 Frido Mother's Day Storefront

> **A pixel-perfect recreation of [myfrido.com/pages/mothers-day](https://myfrido.com/pages/mothers-day)** — built with React, Vite & the Shopify Storefront API.

Gift Comfort to your Comfort 💝

---

## ✨ Live Demo

🔗 **(#)** _https://shopify-mothers-day-storefront.vercel.app/_

---

## 📸 Preview

| Hero Banner | Product Grid |
|:-----------:|:------------:|
| Elegant serif typography with "M♡ther's Day" | 4-column responsive grid with hover effects |

| Category Tabs | Size Modal |
|:-------------:|:----------:|
| Pink stamp-border active state | Slide-up bottom sheet with variant grid |

---

## 🎯 Features

### 🖼️ Hero Section
- Full-width photographic banner with warm beige tones
- Overlaid **"THIS M♡ther's Day"** in elegant Cormorant Garamond serif
- Smooth gradient overlay for text readability
- White curved arc transition into content sections

### 🏷️ Category Navigation
| Category | Icon | Description |
|----------|------|-------------|
| Walk | 👟 | Footwear & sandals |
| Work | 🪑 | Ergonomic chairs & accessories |
| Travel | 🧳 | Travel pillows & comfort gear |
| For Pain | 🩹 | Pain relief & posture correctors |
| Sleep | 🛏️ | Mattress toppers & sleep aids |

- **Pink dashed stamp border** on active category (signature Frido design element)
- Bold underlined label for active tab
- Smooth hover animations with `translateY` lift

### 🛍️ Product Cards
Each card features:

| Element | Details |
|---------|---------|
| 🖼️ Image | Square aspect ratio, `object-fit: contain`, warm beige `#f3ece5` background |
| 🔄 Hover Effect | Swaps to secondary image (or zoom if single image) |
| 🎨 Color Dots | Variant colors shown as small circles at top-right |
| ⭐ Rating | 4-5 stars + review count (deterministic from product ID) |
| 💰 Pricing | MRP (strikethrough) + Sale price (green highlight) + discount badge |
| 🏷️ Badge | "For Moms'" tag + "XX% OFF" discount badge |
| 📏 Select Size | Opens slide-up modal with available variants |
| 🛒 Add to Cart | Logs to console, shows **"Added ✓"** feedback for 2 seconds |

### 🎁 Comfort Bundles
- Pink gradient section with 5 curated bundle cards
- Dashed border styling with pastel color accents
- Each bundle shows savings and category tags

### 👠 Footwear Section
- Second product grid with sub-category tabs (Gym, Indoor, Travel, Casual, Ethnic)
- Same card design with independent tab navigation

### ⏰ Countdown Timer
- Dark bar with live countdown to Mother's Day (May 11)
- Coral pink value badges updating every second
- Responsive layout with flex-wrap

### 🎁 Free Gift Banner
- Animated green promo banner for orders above ₹1,499
- Live countdown timer integrated
- Floating gift image with parallax-style positioning

### 📦 Promo Features

| Feature | Icon |
|---------|------|
| Free Shipping | 🚚 |
| 30-Day Returns | ↩️ |
| COD Available | 💳 |
| Secure Checkout | 🔒 |

### 🏆 Awards Section
- Amazon SMBHAV, Maharashtra Startup Week, Future Of Commerce, D2C Revolution Awards, SURGE

### 🦶 Footer
- 5-column layout with Help, Partner, Company, Bestsellers links
- Social icons (Instagram, Facebook, LinkedIn, Twitter)
- Payment method badges (MASTER, AMEX, RUPAY, VISA, GPAY, UPI, PAYTM)

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| ⚛️ React | 19 | UI Framework |
| ⚡ Vite | 7 | Build tool & dev server |
| 🔷 TypeScript | 5.8 | Type safety |
| 🎨 Tailwind CSS | 4 | Utility-first styling |
| 📡 TanStack Query | 5 | Data fetching & caching |
| 🛒 Shopify Storefront API | 2024-07 | Product data (GraphQL) |
| 🎯 Lucide React | Latest | Icon library |

---

## 📁 Project Structure

```
frido-mothers-day/
├── index.html                  # Entry point
├── package.json                # Dependencies & scripts
├── vite.config.ts              # Vite + React + Tailwind config
├── tsconfig.json               # TypeScript configuration
├── .env.example                # Environment variable template
└── src/
    ├── main.tsx                # React DOM entry
    ├── App.tsx                 # Root component — page composition
    ├── styles.css              # Global styles + Frido design tokens
    ├── assets/                 # Images (hero, bundles, free-gift)
    ├── lib/
    │   ├── shopify.ts          # Storefront API client + helpers
    │   └── utils.ts            # Utility functions
    └── components/frido/
        ├── Nav.tsx             # Sticky navigation bar
        ├── Hero.tsx            # Hero banner with text overlay
        ├── CategoryTabs.tsx    # Reusable category tab component
        ├── ProductCard.tsx     # Product card with hover/add-to-cart
        ├── SizeModal.tsx       # Slide-up size selection modal
        ├── ComfortBundles.tsx  # Bundle cards section
        ├── Countdown.tsx       # Live countdown timer
        ├── FreeGiftBanner.tsx  # Promotional gift banner
        ├── PromoCards.tsx      # Combo deal cards
        ├── StyledRealLife.tsx  # Social proof section
        ├── Awards.tsx          # Award badges
        └── Footer.tsx          # Full site footer
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ installed
- **npm** 9+ installed

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/samyak-1010/Shopify-Mothers-Day-Storefront.git
cd Shopify-Mothers-Day-Storefront

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your Shopify Storefront API credentials

# 4. Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at `localhost:5173` |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Preview production build locally |

---

## 🔗 Shopify Storefront API

This project fetches **real-time product data** from a Shopify store using the [Storefront API](https://shopify.dev/docs/api/storefront) via GraphQL.

### Data Fetched Per Product

| Field | Usage |
|-------|-------|
| `title` | Product name displayed on card |
| `vendor` | Brand name shown below title |
| `handle` | URL-safe product identifier |
| `images` (first 2) | Primary + hover image |
| `variants` (first 20) | Size options, pricing, availability |
| `price` / `compareAtPrice` | Sale price + MRP for discount calculation |

### Setup
1. Copy `.env.example` to `.env`
2. Add your Shopify store domain and Storefront Access Token
3. The token is a **public client-side key** (safe to use in the browser)

---

## 📱 Responsive Design

| Breakpoint | Screen | Grid | Details |
|-----------|--------|------|---------|
| `>1024px` | 🖥️ Desktop | 4 columns | Full-size cards, large hero |
| `768–1024px` | 📱 Tablet | 2 columns | Adjusted spacing |
| `<768px` | 📱 Mobile | 2 columns | Compact cards, smaller hero |

---

## 🎨 Design System

### Color Palette

| Token | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Warm BG | `#fdf8f4` | 🟫 | Section backgrounds |
| Card BG | `#f3ece5` | 🟤 | Product image backgrounds |
| Dark Text | `#3d2c22` | ⬛ | Primary text, buttons |
| Heading | `#4a3728` | 🟫 | Hero text, titles |
| Accent Pink | `#e8a0b5` | 🩷 | Stamp border, decorative |
| Badge Pink | `#d94f6b` | 🔴 | Discount badges, CTAs |
| Star Gold | `#f5a623` | 🟡 | Rating stars |
| Success | `#4caf50` | 🟢 | "Added ✓" state |

### Typography

| Element | Font | Style |
|---------|------|-------|
| Headings | Cormorant Garamond | Italic, serif |
| Body & UI | DM Sans | Clean, sans-serif |

---

## ⚙️ Key Implementation Details

### 🔄 Image Hover Effect
```
Primary image → opacity: 0 on hover
Secondary image → opacity: 1 on hover (crossfade)
Single image → scale(1.06) zoom effect
```

### 🛒 Add to Cart Flow
```
Click "Add to Cart"
  → No size selected? → Opens Size Modal
  → Size selected? → Logs to console + "Added ✓" (2s)
```

### 📏 Size Selection
```
Click "Select Size" → Slide-up modal appears
  → Available sizes shown as clickable buttons
  → Unavailable sizes greyed out with strikethrough
  → Select a size → Modal closes, size shown on card
```

---



---

<p align="center">
  <em>🌸 Gift Comfort to your Comfort 🌸</em>
</p>
