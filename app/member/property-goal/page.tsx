import { portalDemo } from "@/lib/content";

export const metadata = { title: "My Property Goal" };

export default function PropertyGoalPage() {
  return <><div className="portal-header"><h1>My Property Goal</h1><p className="muted">Demo values only.</p></div><div className="portal-grid"><article className="portal-card wide"><h2>{portalDemo.goal}</h2><p>Target: {portalDemo.target}</p><p>Saved: {portalDemo.saved}</p><div className="progress"><span style={{ width: `${portalDemo.progress}%` }} /></div><p>{portalDemo.progress}% progress</p></article><article className="portal-card"><h3>Package</h3><p>{portalDemo.package}</p></article></div></>;
}
