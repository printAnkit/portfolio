import type { IconType } from "react-icons";
import {
  FaBehance,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { socials, type SocialId } from "@/data/portfolio";

const icons: Record<SocialId, IconType> = {
  behance: FaBehance,
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

export const activeSocials = socials.filter((s) => s.href);

export default function SocialLinks({
  className = "",
  linkClassName = "",
  iconClassName = "h-4 w-4",
  showLabel = false,
}: {
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
  showLabel?: boolean;
}) {
  return (
    <ul className={`flex flex-wrap items-center ${className}`}>
      {activeSocials.map((s) => {
        const Icon = icons[s.id];
        const external = s.href.startsWith("http");
        return (
          <li key={s.id}>
            <a
              href={s.href}
              aria-label={s.label}
              title={s.label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center gap-2 transition-all ${linkClassName}`}
            >
              <Icon className={iconClassName} aria-hidden />
              {showLabel && <span>{s.label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
