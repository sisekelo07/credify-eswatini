import { adminRows } from "@/lib/content";

export const metadata = { title: "Applications" };

export default function ApplicationsPage() {
  return <><div className="portal-header"><h1>Applications</h1><span className="status-badge">Review workflow</span></div><table className="data-table"><thead><tr><th>Reference</th><th>Applicant</th><th>Package</th><th>Status</th><th>Action</th></tr></thead><tbody>{adminRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}<td><button className="btn btn-secondary" type="button">Review</button></td></tr>)}</tbody></table><article className="portal-card"><h3>Workflow Statuses</h3><p>Draft, Submitted, Under Review, Documents Required, Approved, Rejected.</p></article></>;
}
