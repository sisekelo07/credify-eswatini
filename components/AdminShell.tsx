import Link from "next/link";
import { Logo } from "@/components/Logo";

const adminLinks = [
  ["Dashboard", "/admin/dashboard"],
  ["Applications", "/admin/applications"],
  ["Members", "/admin/members"],
  ["Packages", "/admin/packages"],
  ["Contributions", "/admin/contributions"],
  ["Payments", "/admin/payments"],
  ["Documents", "/admin/documents"],
  ["Property Goals", "/admin/property-goals"],
  ["News", "/admin/news"],
  ["Testimonials", "/admin/testimonials"],
  ["FAQs", "/admin/faqs"],
  ["Messages", "/admin/messages"],
  ["Notifications", "/admin/notifications"],
  ["Reports", "/admin/reports"],
  ["Settings", "/admin/settings"]
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="portal-layout admin-layout">
      <aside className="portal-sidebar">
        <Logo compact dark />
        <nav aria-label="Admin portal">
          {adminLinks.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <section className="portal-content">{children}</section>
    </main>
  );
}
