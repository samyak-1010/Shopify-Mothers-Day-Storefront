export function StyledRealLife() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-12">
      <h2 className="text-center font-serif italic text-[28px] md:text-[36px] font-semibold mb-8" style={{ color: "var(--frido-heading)" }}>
        Styled In Real Life
      </h2>
      <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden" style={{ background: "var(--frido-card-bg)" }}>
            <div className="w-full h-full flex items-center justify-center text-5xl">👜</div>
          </div>
        ))}
      </div>
    </section>
  );
}
