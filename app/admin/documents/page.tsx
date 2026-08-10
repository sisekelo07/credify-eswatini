import { documents } from "@/lib/content";

export const metadata = { title: "Admin Documents" };

export default function AdminDocumentsPage() {
  return <><div className="portal-header"><h1>Documents</h1></div><table className="data-table"><thead><tr><th>Document</th><th>Status</th><th>Action</th></tr></thead><tbody>{documents.map((doc) => <tr key={doc}><td>{doc}</td><td>Demo review</td><td><button className="btn btn-secondary" type="button">Review</button></td></tr>)}</tbody></table></>;
}
