import { contributionRows } from "@/lib/content";

export const metadata = { title: "Admin Contributions" };

export default function AdminContributionsPage() {
  return <><div className="portal-header"><h1>Contributions</h1></div><table className="data-table"><thead><tr><th>Date</th><th>Description</th><th>Amount</th><th>Status</th></tr></thead><tbody>{contributionRows.map((row) => <tr key={row.join("")}>{row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}</tr>)}</tbody></table></>;
}
