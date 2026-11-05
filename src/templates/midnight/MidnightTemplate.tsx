import { profile } from "@/data/portfolio";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Work from "./Work";

export default function MidnightTemplate() {
  return (
    <div className="flex-1 bg-ink font-sans text-[#e8ecf8]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p>Designed & edited with care in New Delhi.</p>
        </div>
      </footer>
    </div>
  );
}
