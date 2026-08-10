import Image from "next/image";
import Link from "next/link";
import { news } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata = { title: "News & Updates" };

export default function NewsPage() {
  return (
    <main>
      <PageHero title="News & Updates" eyebrow="Resources" body="Demo editorial content for Credify news, property, home improvement, financial education and community updates." />
      <section className="section">
        <SectionIntro title="Latest Demo Articles" body="Replace these cards with approved Credify articles before launch." />
        <div className="package-grid">
          {news.map((article) => <article className="news-card package-card" key={article.slug}><Image src={article.image} alt="" width={520} height={320} /><div><p className="eyebrow">{article.category}</p><h3>{article.title}</h3><p>{article.excerpt}</p><Link className="btn btn-secondary" href={`/news/${article.slug}`}>Read Article</Link></div></article>)}
        </div>
      </section>
    </main>
  );
}
