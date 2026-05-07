import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const cols = [
  { title: "Help", items: ["Contact Us", "Track Your Order", "FAQs", "Return & Refund", "Insoles Quiz"] },
  { title: "Partner", items: ["Corporate Gifting", "Become a Retailer", "Affiliate Program", "Campus Ambassador", "Frido Community"] },
  { title: "Company", items: ["About Us", "Blogs", "Return & Exchange Policy", "Privacy & Cookie policy", "Terms & Conditions", "In the Press", "Shipping Policy"] },
  { title: "Frido Bestsellers", items: ["Orthotics Posture Corrector", "Ultimate Car Comfort Bundle", "Ultimate Mattress Topper", "3D Posture Plus Ergonomic Chair", "Ultimate Wedge Plus Cushion", "Women's Cloud Comfort Sandal", "Maternity Pillow"] },
];

export function Footer() {
  return (
    <footer className="w-full mt-8" style={{ background: "#fafafa" }}>
      <div className="max-w-[1200px] mx-auto px-4 py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <h4 className="font-bold text-[16px] mb-3" style={{ color: "var(--frido-dark)" }}>Frido For Business</h4>
          <p className="text-[13px] leading-relaxed mb-3" style={{ color: "var(--frido-secondary)" }}>
            Frido offers bulk ergonomic solutions for corporate wellness, hospitality, fleet management, and workplace comfort.
          </p>
          <a href="#" className="text-[13px] font-semibold" style={{ color: "#2563eb" }}>Learn more</a>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-bold text-[15px] mb-3" style={{ color: "var(--frido-dark)" }}>{c.title}</h4>
            <ul className="space-y-2">
              {c.items.map((i) => (
                <li key={i} className="text-[13px]" style={{ color: "var(--frido-secondary)" }}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t" style={{ borderColor: "var(--frido-border-light)" }}>
        <div className="max-w-[1200px] mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-serif-italic text-3xl font-bold" style={{ color: "var(--frido-dark)" }}>frido</div>
          <div className="text-[16px] font-medium" style={{ color: "var(--frido-secondary)" }}>Freedom To Do More</div>
          <div className="flex items-center gap-4" style={{ color: "var(--frido-dark)" }}>
            <Instagram size={18} /><Facebook size={18} /><Linkedin size={18} /><Twitter size={18} />
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 pb-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px]" style={{ color: "var(--frido-muted)" }}>
          <span>© 2026 MYFRIDO. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-2 text-[11px] font-semibold flex-wrap justify-center">
            {["MASTER", "AMEX", "RUPAY", "VISA", "GPAY", "UPI", "PAYTM"].map((p) => (
              <span key={p} className="px-2 py-1 rounded border" style={{ borderColor: "var(--frido-border)" }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
