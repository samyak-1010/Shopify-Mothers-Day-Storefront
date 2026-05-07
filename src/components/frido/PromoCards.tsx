const promos = [
  { tag: "Best Seller", title: "Frido Ultimate\nCar Comfort\nBundle", mrp: "₹10,698", price: "₹2,999", cta: "Frido Women's Arch\nComfort Sandals" },
  { tag: "Stock Up", title: "Frido Work From\nHome Combo", mrp: "₹12,798", price: "₹4,599", cta: "Frido Cloud Comfort\nArch Support Slippers" },
  { tag: "", title: "Frido Premium\nCar Comfort\nBundle", mrp: "₹12,698", price: "₹3,999", cta: "Frido Cloud Comfort\nShoes - Lace Ups" },
  { tag: "Foot Relief Trio", title: "Frido Everyday\nInsole Combo", mrp: "₹4,797", price: "₹1,499", cta: "" },
];

export function PromoCards() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {promos.map((p, i) => (
          <div key={i} className="rounded-2xl p-4 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #fef3b8 0%, #fce98a 100%)" }}>
            {p.tag && (
              <span className="absolute top-3 left-3 text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(0,0,0,0.7)", color: "#fff" }}>
                {p.tag}
              </span>
            )}
            <div className="mt-8">
              <h3 className="font-serif italic font-bold text-[20px] leading-tight whitespace-pre-line" style={{ color: "var(--frido-dark)" }}>
                {p.title}
              </h3>
              <p className="text-[11px] mt-2 line-through" style={{ color: "var(--frido-muted)" }}>MRP {p.mrp}</p>
              <p className="text-[14px] font-bold" style={{ color: "var(--frido-dark)" }}>Offer Price {p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
