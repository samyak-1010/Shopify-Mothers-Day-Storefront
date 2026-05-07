import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

const links = ["All Categories", "Combos", "Bestsellers", "New Launches", "Shop By Usecase", "More", "Help"];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--frido-border-light)]">
      <div className="max-w-[1400px] mx-auto h-14 px-4 flex items-center justify-between gap-3">
        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} style={{ color: "var(--frido-heading)" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className="font-serif-italic text-2xl font-bold tracking-tight" style={{ color: "var(--frido-heading)" }}>frido</div>
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {links.map((l, i) => (
            <a key={l} href="#" className="text-[13px] font-medium hover:opacity-70 transition" style={{ color: "var(--frido-heading)" }}>
              {l}{i < links.length - 1 ? " ▾" : ""}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-4" style={{ color: "var(--frido-heading)" }}>
          <Search size={18} strokeWidth={1.5} className="hidden sm:block" />
          <User size={18} strokeWidth={1.5} className="hidden sm:block" />
          <ShoppingBag size={18} strokeWidth={1.5} />
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t bg-white px-4 py-3 space-y-2" style={{ borderColor: "var(--frido-border-light)" }}>
          {links.map((l) => (
            <a key={l} href="#" className="block text-[14px] py-1.5" style={{ color: "var(--frido-heading)" }}>{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}
