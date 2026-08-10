import Link from "next/link";
import { Logo } from "@/components/Logo";

const memberLinks = [
  ["Dashboard", "/member/dashboard"],
  ["My Membership", "/member/membership"],
  ["My Property Goal", "/member/property-goal"],
  ["My Contributions", "/member/contributions"],
  ["Payments", "/member/payments"],
  ["Documents", "/member/documents"],
  ["Notifications", "/member/notifications"],
  ["Support", "/member/support"],
  ["Profile", "/member/profile"],
  ["Settings", "/member/settings"]
];

export function PortalShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="portal-layout">
      <aside className="portal-sidebar">
        <Logo compact dark />
        <nav aria-label="Member portal">
          {memberLinks.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <Link href="/login">Logout</Link>
        </nav>
      </aside>
      <section className="portal-content">{children}</section>
    </main>
  );
}
