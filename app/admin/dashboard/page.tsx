import { adminMetrics, adminRows } from "@/lib/content";

export const metadata = { title: "Admin Dashboard" };

export default function AdminDashboardPage() {
  return <><div className="portal-header"><div><p className="eyebrow">Admin</p><h1>Dashboard</h1><p className="muted">Mock admin UI for applications, members, documents and payments.</p></div></div><div className="stats-grid">{adminMetrics.map(([label, value]) => <article className="portal-card" key={label}><h3>{label}</h3><p>{value}</p></article>)}</div><table className="data-table"><thead><tr><th>Reference</th><th>Applicant</th><th>Package</th><th>Status</th></tr></thead><tbody>{adminRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}</tr>)}</tbody></table></>;
}
