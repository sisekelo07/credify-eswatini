import { faqs } from "@/lib/content";

export const metadata = { title: "Admin FAQs" };

export default function AdminFaqsPage() {
  return <><div className="portal-header"><h1>FAQs</h1></div><table className="data-table"><tbody>{faqs.map(([q, a]) => <tr key={q}><td>{q}</td><td>{a}</td></tr>)}</tbody></table></>;
}
