import { news } from "@/lib/content";

export const metadata = { title: "Admin News" };

export default function AdminNewsPage() {
  return <><div className="portal-header"><h1>News</h1></div><table className="data-table"><tbody>{news.map((article) => <tr key={article.slug}><td>{article.title}</td><td>{article.category}</td><td>Demo draft</td></tr>)}</tbody></table></>;
}
