import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Nav } from "@/components/frido/Nav";
import { Hero } from "@/components/frido/Hero";
import { CategoryTabs } from "@/components/frido/CategoryTabs";
import { ProductCard } from "@/components/frido/ProductCard";
import { SizeModal } from "@/components/frido/SizeModal";
import { Countdown } from "@/components/frido/Countdown";
import { ComfortBundles } from "@/components/frido/ComfortBundles";
import { FreeGiftBanner } from "@/components/frido/FreeGiftBanner";
import { StyledRealLife } from "@/components/frido/StyledRealLife";
import { PromoCards } from "@/components/frido/PromoCards";
import { Awards } from "@/components/frido/Awards";
import { Footer } from "@/components/frido/Footer";
import { fetchProducts, pickCategory, type ShopifyProduct } from "@/lib/shopify";

const usecases = [
  { name: "Walk", emoji: "👟" },
  { name: "Work", emoji: "🪑" },
  { name: "Travel", emoji: "🧳" },
  { name: "For Pain", emoji: "🩹" },
  { name: "Sleep", emoji: "🛏️" },
] as const;

const footwears = [
  { name: "Gym", emoji: "👟" },
  { name: "Indoor", emoji: "🩴" },
  { name: "Travel", emoji: "👞" },
  { name: "Casual", emoji: "👡" },
  { name: "Ethnic", emoji: "👠" },
] as const;

export default function App() {
  const [active, setActive] = useState<(typeof usecases)[number]["name"]>("Walk");
  const [shoeActive, setShoeActive] = useState<(typeof footwears)[number]["name"]>("Gym");
  const [modalProduct, setModalProduct] = useState<ShopifyProduct | null>(null);
  const [sizes, setSizes] = useState<Record<string, string>>({});

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const filtered = useMemo(
    () => products.filter((p) => pickCategory(p.id) === active),
    [products, active]
  );

  const footwearProducts = useMemo(() => {
    if (!products.length) return [];
    const idx = footwears.findIndex((f) => f.name === shoeActive);
    return products.slice(idx * 3, idx * 3 + 4);
  }, [products, shoeActive]);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <div className="hero-curve">
        <section className="max-w-[1200px] mx-auto px-4 pt-10 md:pt-14 pb-6">
          <h2 className="text-center font-serif-italic text-[26px] md:text-[34px] font-semibold mb-6 md:mb-8" style={{ color: "var(--frido-heading)" }}>
            🌸 Find Her Comfort 🌸
          </h2>
          <CategoryTabs items={[...usecases]} active={active} onChange={setActive} />
        </section>
        <section className="max-w-[1200px] mx-auto px-4 pb-10">
          {isLoading ? (
            <div className="text-center py-16" style={{ color: "var(--frido-muted)" }}>Loading products…</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16" style={{ color: "var(--frido-muted)" }}>No products in this category.</div>
          ) : (
            <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
              {filtered.slice(0, 4).map((p) => (
                <ProductCard key={p.id} product={p} selectedSize={sizes[p.id] ?? null} onSelectSize={() => setModalProduct(p)} />
              ))}
            </div>
          )}
        </section>

        <ComfortBundles />

        <section className="max-w-[1200px] mx-auto px-4 pt-12 md:pt-16 pb-6">
          <h2 className="text-center font-serif-italic text-[26px] md:text-[34px] font-semibold mb-6 md:mb-8" style={{ color: "var(--frido-heading)" }}>
            🌸 Footwear She'll Love 🌸
          </h2>
          <CategoryTabs items={[...footwears]} active={shoeActive} onChange={setShoeActive} />
        </section>
        <section className="max-w-[1200px] mx-auto px-4 pb-8">
          <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
            {footwearProducts.map((p) => (
              <ProductCard key={p.id} product={p} selectedSize={sizes[p.id] ?? null} onSelectSize={() => setModalProduct(p)} />
            ))}
          </div>
        </section>

        <FreeGiftBanner />
        <StyledRealLife />
        <Countdown />
        <section className="w-full text-center py-3 px-4 text-[13px]" style={{ background: "linear-gradient(90deg, #fef0ed, #fff5f2, #fef0ed)", color: "var(--frido-dark)" }}>
          🎁 Assured <strong style={{ color: "var(--frido-pink-strong)" }}>Free Gift</strong> for every purchase above{" "}
          <strong style={{ color: "var(--frido-pink-strong)" }}>₹1,499</strong>
        </section>
        <PromoCards />
        <Awards />
        <Footer />
      </div>
      <SizeModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onSelect={(size) => modalProduct && setSizes((s) => ({ ...s, [modalProduct.id]: size }))}
      />
    </div>
  );
}
