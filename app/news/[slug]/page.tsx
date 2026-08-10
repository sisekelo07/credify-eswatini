import Image from "next/image";
import { notFound } from "next/navigation";
import { news } from "@/lib/content";

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);
  return { title: article ? article.title : "News" };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <main>
      <section className="page-hero">
        <div><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><p>{article.excerpt}</p></div>
        <Image className="page-hero-image" src={article.image} alt="" width={680} height={460} />
      </section>
      <article className="section">
        <div className="card">
          <p className="eyebrow">Demo content</p>
          <p>This article is sample content only. It exists to demonstrate the editorial layout, category structure and article detail route. Replace with approved Credify copy before publishing.</p>
          <p>Credify should use this area for property education, home improvement planning, member updates and community news without making unsupported financial claims.</p>
        </div>
      </article>
    </main>
  );
}
