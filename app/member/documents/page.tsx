import { documents } from "@/lib/content";

export const metadata = { title: "Documents" };

export default function DocumentsPage() {
  const statuses = ["Verified", "Pending", "Required", "Required", "Required"];
  return <><div className="portal-header"><h1>Documents</h1><p className="muted">Sensitive documents must be protected by backend storage.</p></div><table className="data-table"><thead><tr><th>Document</th><th>Status</th><th>Actions</th></tr></thead><tbody>{documents.map((doc, i) => <tr key={doc}><td>{doc}</td><td>{statuses[i]}</td><td><button className="btn btn-secondary" type="button">Upload</button></td></tr>)}</tbody></table></>;
}
