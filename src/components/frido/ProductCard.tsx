import { useState } from "react";
import type { ShopifyProduct } from "@/lib/shopify";
import { formatINR, pickColors } from "@/lib/shopify";

export function ProductCard({
  product,
  onSelectSize,
}: {
  product: ShopifyProduct;
  onSelectSize: (p: ShopifyProduct) => void;
  selectedSize: string | null;
}) {
  const [hover, setHover] = useState(false);
  const [added, setAdded] = useState(false);

  const variant = product.variants.nodes[0];
  if (!variant) return null;
  const price = parseFloat(variant.price.amount);
  const compare = variant.compareAtPrice ? parseFloat(variant.compareAtPrice.amount) : price * 1.5;
  const discount = compare && compare > price ? Math.round(((compare - price) / compare) * 100) : 0;

  const img1 = product.images.nodes[0]?.url;
  const img2 = product.images.nodes[1]?.url;
  const colors = pickColors(product.id);

  const handleAdd = () => {
    console.log({ productId: product.id, title: product.title, price });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border transition duration-300 hover:-translate-y-1 flex flex-col"
      style={{ borderColor: "var(--frido-border-light)", boxShadow: hover ? "0 8px 24px rgba(61,44,34,0.12)" : "none" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative aspect-square overflow-hidden" style={{ background: "linear-gradient(180deg, #f5efe9 0%, #fce8ea 100%)" }}>
        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1">
          {colors.slice(0, 3).map((c, i) => (
            <span key={i} className="block w-3.5 h-3.5 rounded-full" style={{ background: c, border: "1.5px solid #fff", boxShadow: "0 1px 2px rgba(0,0,0,0.15)" }} />
          ))}
          {colors.length > 3 && (
            <span className="text-[10px] font-semibold rounded px-1" style={{ color: "var(--frido-dark)" }}>+{colors.length - 3}</span>
          )}
        </div>
        {img1 && (
          <img
            src={img1}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-contain p-4 transition-all duration-500"
            style={{ opacity: hover && img2 ? 0 : 1, transform: hover && !img2 ? "scale(1.06)" : "scale(1)" }}
          />
        )}
        {img2 && (
          <img src={img2} alt="" className="absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-500" style={{ opacity: hover ? 1 : 0 }} />
        )}
      </div>
      <div className="p-3 md:p-4 flex flex-col gap-1.5 flex-1">
        <h3 className="text-[14px] md:text-[16px] font-bold leading-snug line-clamp-2 min-h-[40px]" style={{ color: "var(--frido-dark)" }}>
          {product.title}
        </h3>
        <p className="text-[12px]" style={{ color: "var(--frido-muted)" }}>
          {product.vendor || "Premium Comfort"}
        </p>
        <div className="border-t border-dashed mt-1 pt-2" style={{ borderColor: "var(--frido-border)" }}>
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[11px] font-bold px-1.5 py-0.5 rounded" style={{ background: "#f8e3e3", color: "#a03b4f" }}>For Moms'</span>
            {discount > 0 && (
              <span className="text-[11px] font-bold px-1.5 py-0.5 rounded" style={{ background: "var(--frido-pink-strong)", color: "#fff" }}>{discount}% OFF</span>
            )}
          </div>
          <div className="flex items-end gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase" style={{ color: "var(--frido-muted)" }}>MRP</span>
              <span className="text-[13px] line-through" style={{ color: "var(--frido-muted)" }}>{formatINR(compare)}</span>
            </div>
            <div className="flex flex-col px-2 py-1 rounded" style={{ background: "#e6f4e6" }}>
              <span className="text-[10px]" style={{ color: "#3a7a3a" }}>Sale Price</span>
              <span className="text-[15px] font-bold" style={{ color: "#1d5a1d" }}>{formatINR(price)}</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleAdd}
          className="mt-2 w-full py-3 rounded-lg text-[13px] font-bold uppercase tracking-wider transition"
          style={{ background: added ? "var(--frido-success)" : "#f5c518", color: added ? "#fff" : "#1a1a1a" }}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
        <button onClick={() => onSelectSize(product)} className="text-[11px] underline mt-1" style={{ color: "var(--frido-muted)" }}>
          Select size
        </button>
      </div>
    </div>
  );
}
