"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  defaultTemplate,
  isTemplateId,
  TEMPLATE_STORAGE_KEY,
  type TemplateId,
} from "@/data/templates";

// A tiny external store so the chosen template survives reloads (localStorage)
// and can be shared via ?template=<id>, without setState-in-effect hydration tricks.
let current: TemplateId | null = null;
const listeners = new Set<() => void>();

function readInitial(): TemplateId {
  const fromUrl = new URLSearchParams(window.location.search).get("template");
  if (isTemplateId(fromUrl)) return fromUrl;
  try {
    const stored = localStorage.getItem(TEMPLATE_STORAGE_KEY);
    if (isTemplateId(stored)) return stored;
  } catch {}
  return defaultTemplate;
}

function getSnapshot(): TemplateId {
  current ??= readInitial();
  return current;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setTemplate(id: TemplateId) {
  current = id;
  try {
    localStorage.setItem(TEMPLATE_STORAGE_KEY, id);
  } catch {}
  document.documentElement.dataset.template = id;
  const url = new URL(window.location.href);
  if (url.searchParams.has("template")) {
    url.searchParams.delete("template");
    window.history.replaceState(null, "", url);
  }
  window.scrollTo({ top: 0 });
  listeners.forEach((l) => l());
}

const TemplateContext = createContext<{
  template: TemplateId;
  setTemplate: (id: TemplateId) => void;
} | null>(null);

export function useTemplate() {
  const ctx = useContext(TemplateContext);
  if (!ctx) throw new Error("useTemplate must be used inside <TemplateSwitch>");
  return ctx;
}

export default function TemplateSwitch({
  views,
}: {
  views: Record<TemplateId, ReactNode>;
}) {
  const template = useSyncExternalStore(subscribe, getSnapshot, () => defaultTemplate);

  return (
    <TemplateContext.Provider value={{ template, setTemplate }}>
      <div data-template-root={template} className="flex min-h-full flex-1 flex-col">
        {views[template]}
      </div>
    </TemplateContext.Provider>
  );
}
