import { portalDemo } from "@/lib/content";

export function DashboardMockup() {
  return (
    <div className="dashboard-mockup" aria-label="Member portal preview">
      <div className="mockup-top">
        <span />
        <strong>Member Portal</strong>
      </div>
      <div className="mockup-grid">
        <div className="mockup-panel wide">
          <p className="muted">Savings progress</p>
          <h3>{portalDemo.goal}</h3>
          <div className="progress">
            <span style={{ width: `${portalDemo.progress}%` }} />
          </div>
          <p>{portalDemo.saved} saved toward a demo target of {portalDemo.target}</p>
        </div>
        <div className="mockup-panel">
          <p className="muted">Membership</p>
          <strong>{portalDemo.status}</strong>
        </div>
        <div className="mockup-panel">
          <p className="muted">Package</p>
          <strong>{portalDemo.package}</strong>
        </div>
        <div className="mockup-panel wide">
          <p className="muted">Recent activity</p>
          <ul>
            {portalDemo.activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="demo-note">Demo data only. Replace with authenticated member data in production.</p>
    </div>
  );
}
