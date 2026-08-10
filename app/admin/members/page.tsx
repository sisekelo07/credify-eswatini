import { adminRows } from "@/lib/content";

export const metadata = { title: "Members" };

export default function MembersPage() {
  return <><div className="portal-header"><h1>Members</h1></div><table className="data-table"><thead><tr><th>Member</th><th>Package</th><th>Status</th></tr></thead><tbody>{adminRows.map((row) => <tr key={row[0]}><td>{row[1]}</td><td>{row[2]}</td><td>Demo active</td></tr>)}</tbody></table></>;
}
