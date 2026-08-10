import { contributionRows, portalDemo } from "@/lib/content";

export const metadata = { title: "My Contributions" };

export default function ContributionsPage() {
  return <><div className="portal-header"><h1>My Contributions</h1><p className="muted">Demo transaction history.</p></div><div className="stats-grid"><article className="portal-card"><h3>Total Contributed</h3><p>{portalDemo.totalContributed}</p></article><article className="portal-card"><h3>Monthly Contribution</h3><p>{portalDemo.monthlyContribution}</p></article><article className="portal-card"><h3>Next Contribution</h3><p>{portalDemo.nextContribution}</p></article></div><table className="data-table"><thead><tr><th>Date</th><th>Description</th><th>Amount</th><th>Status</th></tr></thead><tbody>{contributionRows.map((row) => <tr key={row.join("")}>{row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}</tr>)}</tbody></table></>;
}
