export type Money = { amount: string; currencyCode: string };
export type ShopifyVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  price: Money;
  compareAtPrice: Money | null;
};
export type ShopifyProduct = {
  id: string;
  title: string;
  vendor: string;
  handle: string;
  images: { nodes: { url: string; altText: string | null }[] };
  variants: { nodes: ShopifyVariant[] };
};

const DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN as string;
const TOKEN = import.meta.env.VITE_STOREFRONT_TOKEN as string;

const QUERY = `
{
  products(first: 50) {
    nodes {
      id
      title
      vendor
      handle
      images(first: 2) { nodes { url altText } }
      variants(first: 20) {
        nodes {
          id
          title
          availableForSale
          price { amount currencyCode }
          compareAtPrice { amount currencyCode }
        }
      }
    }
  }
}`;

export async function fetchProducts(): Promise<ShopifyProduct[]> {
  const res = await fetch(`https://${DOMAIN}/api/2024-07/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN,
    },
    body: JSON.stringify({ query: QUERY }),
  });
  const json = await res.json();
  return json?.data?.products?.nodes ?? [];
}

export function formatINR(amount: string | number) {
  const n = typeof amount === "string" ? parseFloat(amount) : amount;
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

// Deterministic helpers from id
function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}
export function pickColors(id: string): string[] {
  const palette = ["#1a1a1a", "#5a3a22", "#c89b8c", "#e8a0b5", "#8b6f5a", "#d4c4b0", "#2d4a3e", "#7a3b3b"];
  const h = hash(id);
  const n = 2 + (h % 3);
  const out: string[] = [];
  for (let i = 0; i < n; i++) out.push(palette[(h + i * 3) % palette.length]);
  return out;
}
export function pickRating(id: string) {
  const h = hash(id);
  return { stars: 4 + (h % 2), count: 50 + (h % 450) };
}
export function pickCategory(id: string): "Walk" | "Work" | "Travel" | "For Pain" | "Sleep" {
  const cats = ["Walk", "Work", "Travel", "For Pain", "Sleep"] as const;
  return cats[hash(id) % cats.length];
}