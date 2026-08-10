import { DashboardMockup } from "@/components/DashboardMockup";
import { portalDemo } from "@/lib/content";

export const metadata = { title: "Member Dashboard" };

export default function DashboardPage() {
  return (
    <>
      <div className="portal-header"><div><p className="eyebrow">Demo portal</p><h1>Good morning, {portalDemo.memberName}</h1><p className="muted">All values shown here are mock/demo data.</p></div><span className="status-badge">{portalDemo.status}</span></div>
      <div className="portal-grid">
        <article className="portal-card"><h3>Total Contributed</h3><p>{portalDemo.totalContributed}</p></article>
        <article className="portal-card"><h3>Property Goal</h3><p>{portalDemo.goal}</p></article>
        <article className="portal-card"><h3>Next Contribution</h3><p>{portalDemo.nextContribution}</p></article>
        <article className="portal-card wide"><DashboardMockup /></article>
      </div>
    </>
  );
}
