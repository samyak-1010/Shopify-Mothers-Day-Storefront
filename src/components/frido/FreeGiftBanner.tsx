import { useEffect, useState } from "react";
import gift from "@/assets/free-gift.jpg";

const TARGET = new Date("2026-05-11T23:59:59").getTime();
function calc() {
  const d = Math.max(0, TARGET - Date.now());
  return {
    h: Math.floor(d / 3600000),
    m: Math.floor((d / 60000) % 60),
    s: Math.floor((d / 1000) % 60),
  };
}

export function FreeGiftBanner() {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <section className="max-w-[1200px] mx-auto my-8 md:my-12 mx-4 px-4 md:px-8 py-6 md:py-8 rounded-2xl relative overflow-hidden" style={{ background: "#e6f4e6" }}>
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className="flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: "#3a7a3a" }}>
          ⏰ Limited Time Offer <span className="text-[12px] font-normal" style={{ color: "var(--frido-secondary)" }}>ends in</span>
        </span>
        <span className="px-2.5 py-1 rounded text-white text-[13px] font-bold" style={{ background: "#3a7a3a" }}>
          {String(t.h).padStart(2, "0")} hr : {String(t.m).padStart(2, "0")} min : {String(t.s).padStart(2, "0")} sec
        </span>
      </div>
      <h2 className="text-[22px] md:text-[36px] font-bold leading-tight max-w-[70%]" style={{ color: "var(--frido-dark)" }}>
        Assured Free Gift <span className="font-normal" style={{ color: "var(--frido-secondary)" }}>for Every<br/>purchase above ₹1,499</span>
      </h2>
      <img src={gift} alt="" loading="lazy" className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-[140px] md:w-[260px] h-auto object-contain pointer-events-none" />
    </section>
  );
}
