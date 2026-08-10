import Link from "next/link";
import { navItems, packages } from "@/lib/content";
import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo compact withText />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) =>
            item.label === "Packages" ? (
              <div className="nav-dropdown" key={item.label}>
                <Link href={item.href}>{item.label}</Link>
                <div className="dropdown-panel">
                  {packages.map((plan) => (
                    <Link key={plan.slug} href={`/packages/${plan.slug}`}>
                      {plan.title}
                    </Link>
                  ))}
                  <Link href="/packages">Compare Packages</Link>
                </div>
              </div>
            ) : item.label === "Resources" ? (
              <div className="nav-dropdown" key={item.label}>
                <Link href={item.href}>{item.label}</Link>
                <div className="dropdown-panel">
                  <Link href="/faqs">FAQs</Link>
                  <Link href="/news">News & Updates</Link>
                  <Link href="/testimonials">Testimonials</Link>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>
        <div className="header-actions">
          <Link className="text-link" href="/login">
            Login
          </Link>
          <Link className="btn btn-primary" href="/apply">
            Join Credify
          </Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-panel">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/login">Login</Link>
            <Link className="btn btn-primary" href="/apply">
              Join Credify
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
