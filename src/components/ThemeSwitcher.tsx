"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTemplate } from "@/components/TemplateSwitch";
import { templates, type TemplateId } from "@/data/templates";

// Each template gets a dropdown that matches its own visual language.
const looks: Record<
  TemplateId,
  { button: string; menu: string; item: string; active: string; muted: string }
> = {
  midnight: {
    button: "rounded-full border border-line bg-surface/80 text-white hover:border-white/40",
    menu: "rounded-2xl border border-line bg-surface/95 text-white shadow-2xl backdrop-blur-xl",
    item: "rounded-xl hover:bg-white/5",
    active: "bg-white/5",
    muted: "text-muted",
  },
  studio: {
    button:
      "rounded border border-[#3a3a3e] bg-[#232326] font-studio text-xs text-[#d4d4d8] hover:border-[#4fa3ff]",
    menu: "rounded-md border border-[#3a3a3e] bg-[#232326] font-studio text-[#d4d4d8] shadow-2xl",
    item: "rounded hover:bg-[#4fa3ff]/15",
    active: "bg-[#4fa3ff]/20",
    muted: "text-[#8a8a93]",
  },
  editorial: {
    button: "border-b border-[#1a1714] font-editorial italic text-[#1a1714] hover:text-[#d9480f]",
    menu: "border border-[#1a1714] bg-[#f3eee4] text-[#1a1714] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.4)]",
    item: "border-b border-[#1a1714]/15 last:border-0 hover:bg-[#1a1714]/5",
    active: "bg-[#1a1714]/5",
    muted: "text-[#1a1714]/60",
  },
  brutal: {
    button:
      "border-[3px] border-black bg-[#ffd43b] font-brutal-mono font-bold uppercase text-black shadow-[4px_4px_0_#000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000]",
    menu: "border-[3px] border-black bg-white text-black shadow-[8px_8px_0_#000] font-brutal-mono",
    item: "border-b-[3px] border-black last:border-0 hover:bg-[#ff7eb6]",
    active: "bg-[#ffd43b]",
    muted: "text-black/60",
  },
  retro: {
    button: "win-out font-pixel text-black active:win-in",
    menu: "win-out p-1 font-pixel text-black",
    item: "hover:bg-[#000080] hover:text-white [&:hover_span]:text-white",
    active: "bg-[#000080]/10",
    muted: "text-black/60",
  },
};

export default function ThemeSwitcher({ className = "" }: { className?: string }) {
  const { template, setTemplate } = useTemplate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const look = looks[template];
  const activeName = templates.find((t) => t.id === template)?.name;

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 px-4 py-2 text-sm transition-all ${look.button}`}
      >
        <span className="hidden sm:inline">Theme:</span>
        <span className="font-semibold">{activeName}</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
        </svg>
      </button>

      {open && (
        <ul
          id={menuId}
          role="menu"
          className={`absolute right-0 z-[60] mt-3 w-72 overflow-hidden p-2 ${look.menu}`}
        >
          {templates.map((t) => (
            <li key={t.id} role="none">
              <button
                type="button"
                role="menuitemradio"
                aria-checked={t.id === template}
                onClick={() => {
                  setOpen(false);
                  setTemplate(t.id);
                }}
                className={`flex w-full items-center gap-3 px-3 py-3 text-left transition-colors ${look.item} ${
                  t.id === template ? look.active : ""
                }`}
              >
                <span className="flex shrink-0 -space-x-1.5">
                  {t.swatch.map((c) => (
                    <span
                      key={c}
                      className="h-5 w-5 rounded-full ring-2 ring-black/10"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className={`block text-xs ${look.muted}`}>{t.description}</span>
                </span>
                {t.id === template && <span aria-hidden>✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
