import { packages } from "@/lib/content";

export const metadata = { title: "Admin Packages" };

export default function AdminPackagesPage() {
  return <><div className="portal-header"><h1>Packages</h1><span className="status-badge">Pricing not supplied</span></div><div className="portal-grid">{packages.map((plan) => <article className="portal-card" key={plan.slug}><h3>{plan.title}</h3><p>{plan.focus}</p><p>Pricing configuration pending.</p></article>)}</div></>;
}
