import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { packages } from "@/lib/content";

export function generateStaticParams() {
  return packages.map((plan) => ({ slug: plan.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plan = packages.find((item) => item.slug === slug);
  return { title: plan ? `${plan.title}` : "Package" };
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plan = packages.find((item) => item.slug === slug);
  if (!plan) notFound();

  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">{plan.eyebrow}</p>
          <h1>{plan.title}</h1>
          <p>{plan.description}</p>
          <div className="actions"><Link className="btn btn-primary" href="/apply">Apply Now</Link><Link className="btn btn-secondary" href="/packages">Compare Packages</Link></div>
        </div>
        <Image className="page-hero-image" src={plan.image} alt="" width={680} height={460} />
      </section>
      <section className="section band">
        <div className="split">
          <article className="card"><h2>Best For</h2><p>{plan.bestFor}</p><p className="muted">Official qualification rules and package pricing must be supplied by Credify before launch.</p></article>
          <article className="card"><h2>Features</h2><ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></article>
        </div>
      </section>
    </main>
  );
}
