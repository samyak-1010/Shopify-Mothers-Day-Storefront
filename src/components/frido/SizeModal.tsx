import { useEffect } from "react";
import { X } from "lucide-react";
import type { ShopifyProduct } from "@/lib/shopify";

export function SizeModal({
  product,
  onClose,
  onSelect,
}: {
  product: ShopifyProduct | null;
  onClose: () => void;
  onSelect: (size: string) => void;
}) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  if (!product) return null;
  const variants = product.variants.nodes;
  const img = product.images.nodes[0]?.url;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center" onClick={onClose} style={{ background: "rgba(0,0,0,0.45)" }}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[480px] bg-white rounded-t-[20px] p-5 animate-in slide-in-from-bottom duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-[20px] font-bold" style={{ color: "var(--frido-dark)" }}>Select a Size</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "var(--frido-card-bg)" }}
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex items-center gap-3 mb-4">
          {img && <img src={img} alt="" className="w-[52px] h-[52px] rounded-[10px] object-contain" style={{ background: "var(--frido-card-bg)" }} />}
          <div className="text-[13px] font-medium" style={{ color: "var(--frido-dark)" }}>{product.title}</div>
        </div>
        <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))" }}>
          {variants.map((v) => (
            <button
              key={v.id}
              disabled={!v.availableForSale}
              onClick={() => { onSelect(v.title); onClose(); }}
              className="px-2 py-2.5 rounded-lg text-[13px] transition"
              style={{
                border: "1.5px solid var(--frido-border)",
                opacity: v.availableForSale ? 1 : 0.35,
                textDecoration: v.availableForSale ? "none" : "line-through",
                cursor: v.availableForSale ? "pointer" : "not-allowed",
              }}
            >
              {v.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}