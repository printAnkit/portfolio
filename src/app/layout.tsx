import type { Metadata } from "next";
import {
  Archivo_Black,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
  Pixelify_Sans,
  Space_Grotesk,
  Space_Mono,
  VT323,
} from "next/font/google";
import { templates, TEMPLATE_STORAGE_KEY } from "@/data/templates";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });
// Fonts of the non-default templates aren't preloaded; they load when picked.
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  preload: false,
});
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  preload: false,
});
const archivo = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
});
const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  preload: false,
});
const vt323 = VT323({ variable: "--font-vt323", subsets: ["latin"], weight: "400", preload: false });

const fontVars = [inter, spaceGrotesk, jetbrains, instrument, archivo, spaceMono, pixelify, vt323]
  .map((f) => f.variable)
  .join(" ");

// Runs before paint so a returning visitor's saved template doesn't flash the default one.
const templateScript = `try{var a=${JSON.stringify(templates.map((t) => t.id))},u=new URLSearchParams(location.search).get("template"),s=localStorage.getItem(${JSON.stringify(TEMPLATE_STORAGE_KEY)}),t=a.indexOf(u)>-1?u:a.indexOf(s)>-1?s:a[0];document.documentElement.dataset.template=t}catch(e){}`;

export const metadata: Metadata = {
  title: "Laxmi Singh — Video Editor & Motion Designer",
  description:
    "Portfolio of Laxmi Singh, a Delhi-based video editor, motion graphics and graphic designer creating short-form, ad and AI-powered video content.",
  openGraph: {
    title: "Laxmi Singh — Video Editor & Motion Designer",
    description:
      "Video editing, motion graphics, graphic design and AI video production.",
    images: ["/images/laxmi.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVars} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: templateScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
