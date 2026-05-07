import b1 from "@/assets/bundle-1.jpg";
import b2 from "@/assets/bundle-2.jpg";
import b3 from "@/assets/bundle-3.jpg";
import b4 from "@/assets/bundle-4.jpg";
import b5 from "@/assets/bundle-5.jpg";

const bundles = [
  { img: b5, title: "Spend Less On Pain Relief", tag: "GIVE HER FEET THE RELIEF", color: "#d4b8e0" },
  { img: b1, title: "Top Deal On Drive Comfort", tag: "GIVE HER RIDE THE EASE", color: "#e8b8c8" },
  { img: b2, title: "Best Deal On Pro Seating", tag: "GIVE HER THE PERFECT SEAT", color: "#f4c8c8" },
  { img: b3, title: "Save Big On Back Support", tag: "GIVE HER BACK A BREAK", color: "#f0b8b8" },
  { img: b4, title: "Pay Less And Sleep More", tag: "GIVE HER SLEEP ON THE GO", color: "#bcb8e8" },
];

export function ComfortBundles() {
  return (
    <section className="w-full px-4 py-10 md:py-16" style={{ background: "linear-gradient(180deg, #fce4e6 0%, #f9d2d6 100%)", borderTopLeftRadius: 32, borderTopRightRadius: 32 }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center font-serif text-[28px] md:text-[36px] font-bold mb-8 md:mb-12" style={{ color: "#7a3a3a" }}>
          Comfort Bundles
        </h2>
        <div className="grid gap-3 md:gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          {bundles.map((b, i) => (
            <div key={i} className="text-center">
              <div className="relative bg-white rounded-2xl overflow-hidden p-4 mb-3" style={{
                background: `linear-gradient(180deg, ${b.color}33 0%, #fff 100%)`,
                border: `2px dashed ${b.color}`,
              }}>
                <img src={b.img} alt={b.title} loading="lazy" className="w-full aspect-[3/4] object-contain" />
              </div>
              <p className="text-[11px] font-bold tracking-wider mb-1" style={{ color: "#7a3a3a" }}>{b.tag}</p>
              <h3 className="text-[15px] md:text-[17px] font-bold" style={{ color: "#5a2828" }}>{b.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
