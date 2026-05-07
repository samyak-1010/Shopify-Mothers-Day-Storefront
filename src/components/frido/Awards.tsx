const awards = ["Amazon SMBHAV", "Maharashtra Startup Week", "Future Of Commerce", "D2C Revolution Awards", "SURGE"];
export function Awards() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-3 md:grid-cols-5 gap-4 items-center">
      {awards.map((a) => (
        <div key={a} className="flex flex-col items-center text-center text-[11px] font-semibold" style={{ color: "var(--frido-muted)" }}>
          <div className="text-3xl">🏆</div>
          <span className="mt-1">{a}</span>
        </div>
      ))}
    </section>
  );
}
