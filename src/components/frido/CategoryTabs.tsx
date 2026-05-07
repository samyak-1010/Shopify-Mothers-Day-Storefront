export function CategoryTabs<T extends string>({
  items,
  active,
  onChange,
}: {
  items: { name: T; emoji: string }[];
  active: T;
  onChange: (c: T) => void;
}) {
  return (
    <div className="flex justify-center gap-3 sm:gap-6 md:gap-8 flex-wrap px-2">
      {items.map((it) => {
        const isActive = it.name === active;
        return (
          <button
            key={it.name}
            onClick={() => onChange(it.name)}
            className="flex flex-col items-center gap-2 group transition hover:-translate-y-0.5"
          >
            <div
              className={`relative flex items-center justify-center text-2xl md:text-4xl ${isActive ? "stamp-active bg-white" : ""}`}
              style={{
                width: "clamp(56px, 7vw, 72px)",
                height: "clamp(56px, 7vw, 72px)",
                borderRadius: 12,
                background: isActive ? "#fff" : "var(--frido-card-bg)",
              }}
            >
              <span>{it.emoji}</span>
            </div>
            <span
              className={`text-[12px] md:text-[13px] ${isActive ? "font-bold" : "font-medium"}`}
              style={{
                color: isActive ? "var(--frido-dark)" : "var(--frido-muted)",
                borderBottom: isActive ? "2px solid var(--frido-dark)" : "none",
                paddingBottom: 2,
              }}
            >
              {it.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
