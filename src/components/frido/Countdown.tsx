import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-11T23:59:59").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

export function Countdown() {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  const Cell = ({ v, label }: { v: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span
        className="text-white text-[16px] font-bold rounded px-1.5 py-0.5 min-w-[36px] text-center"
        style={{ background: "var(--frido-pink-strong)" }}
      >
        {String(v).padStart(2, "0")}
      </span>
      <span className="text-[8px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</span>
    </div>
  );
  return (
    <div className="w-full px-5 py-3.5 flex items-center justify-center gap-4 flex-wrap" style={{ background: "var(--frido-timer-bg)" }}>
      <span className="text-white text-[13px] font-semibold uppercase">⏰ Limited Time Offer — ends in</span>
      <div className="flex items-center gap-1.5 text-white">
        <Cell v={t.d} label="DAYS" />
        <span>:</span>
        <Cell v={t.h} label="HRS" />
        <span>:</span>
        <Cell v={t.m} label="MIN" />
        <span>:</span>
        <Cell v={t.s} label="SEC" />
      </div>
    </div>
  );
}