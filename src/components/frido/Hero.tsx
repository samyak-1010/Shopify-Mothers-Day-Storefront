import heroImg from "@/assets/hero-mom.jpg";

export function Hero() {
  return (
    <section
      className="relative w-full"
      style={{ height: "clamp(280px, 45vw, 540px)" }}
    >
      <img src={heroImg} alt="Mother's Day gift" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, transparent 30%, rgba(232,221,208,0.55) 100%)" }}
      />
      <div className="relative h-full max-w-[1400px] mx-auto px-6 flex items-center justify-end">
        <div className="text-right" style={{ color: "var(--frido-heading)" }}>
          <div className="text-[14px] md:text-[18px] font-semibold tracking-[3px]">THIS</div>
          <h1 className="font-serif-italic font-medium leading-none mt-1" style={{ fontSize: "clamp(36px, 7vw, 72px)" }}>
            M<span style={{ color: "var(--frido-pink)", fontStyle: "normal" }}>♡</span>ther's Day
          </h1>
          <div className="font-serif font-bold mt-3" style={{ fontSize: "clamp(20px, 3vw, 32px)" }}>
            Gift <span className="font-bold">Comfort</span>
          </div>
          <div className="font-serif font-bold" style={{ fontSize: "clamp(20px, 3vw, 32px)" }}>
            to your <span className="font-bold">Comfort</span>
          </div>
        </div>
      </div>
    </section>
  );
}