export const templates = [
  {
    id: "midnight",
    name: "Midnight",
    description: "Dark, bold & modern",
    swatch: ["#060913", "#3b6cff", "#ffd43b"],
  },
  {
    id: "studio",
    name: "Studio Cut",
    description: "An editing suite — timeline & scopes",
    swatch: ["#1b1b1d", "#4fa3ff", "#9b87f5"],
  },
  {
    id: "editorial",
    name: "Editorial",
    description: "Magazine serif, paper tones",
    swatch: ["#f3eee4", "#1a1714", "#d9480f"],
  },
  {
    id: "brutal",
    name: "Neo Brutal",
    description: "Loud borders & hard shadows",
    swatch: ["#ffd43b", "#ff7eb6", "#111111"],
  },
  {
    id: "retro",
    name: "Retro OS",
    description: "A '95 desktop, windows & all",
    swatch: ["#008080", "#c0c0c0", "#000080"],
  },
] as const;

export type TemplateId = (typeof templates)[number]["id"];

export const defaultTemplate: TemplateId = "midnight";

export const TEMPLATE_STORAGE_KEY = "portfolio-template";

export function isTemplateId(value: unknown): value is TemplateId {
  return templates.some((t) => t.id === value);
}
