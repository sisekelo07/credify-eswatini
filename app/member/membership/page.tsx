import { portalDemo } from "@/lib/content";

export const metadata = { title: "My Membership" };

export default function MembershipPage() {
  const rows = [["Member Name", portalDemo.memberName], ["Membership Number", portalDemo.membershipNumber], ["Package", portalDemo.package], ["Date Joined", "Demo date"], ["Membership Status", portalDemo.status], ["Application Status", "Demo approved"]];
  return <><div className="portal-header"><h1>My Membership</h1><span className="status-badge">{portalDemo.status}</span></div><table className="data-table"><tbody>{rows.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table></>;
}
