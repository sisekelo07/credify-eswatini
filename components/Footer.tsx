import Link from "next/link";
import { brand } from "@/lib/content";
import { Logo } from "@/components/Logo";

const groups = [
  ["Company", [["About", "/about"], ["Vision & Mission", "/vision-mission"], ["Benefits", "/benefits"], ["Testimonials", "/testimonials"], ["News", "/news"]]],
  ["Membership", [["Packages", "/packages"], ["How It Works", "/how-it-works"], ["Requirements", "/membership-requirements"], ["Apply", "/apply"], ["Member Login", "/login"]]],
  ["Support", [["FAQs", "/faqs"], ["Contact", "/contact"], ["WhatsApp", "/contact"]]],
  ["Legal", [["Privacy Policy", "/privacy-policy"], ["Terms & Conditions", "/terms"], ["Membership Agreement", "/membership-agreement"]]]
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo compact dark />
          <p>{brand.tagline}</p>
          <p className="muted">Official phone, email, address and social links are configurable and awaiting final Credify content.</p>
        </div>
        {groups.map(([title, links]) => (
          <div className="footer-group" key={title}>
            <h3>{title}</h3>
            {links.map(([label, href]) => (
              <Link key={`${title}-${label}-${href}`} href={href}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">© 2026 Credify Eswatini. Preview content only until final legal copy is supplied.</div>
    </footer>
  );
}
