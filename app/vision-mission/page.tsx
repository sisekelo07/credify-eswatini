import Image from "next/image";
import Link from "next/link";
import { images, values } from "@/lib/content";
import { CardIcon } from "@/components/CardIcon";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata = { title: "Vision & Mission" };

export default function VisionMissionPage() {
  return (
    <main>
      <PageHero title="Vision & Mission" eyebrow="Credify direction" body="The public promise and values shaping Credify Eswatini as a property and housing stokvel." image={images.visionHero} />
      <section className="section split">
        <article className="card">
          <p className="eyebrow">Vision</p>
          <h2>Eswatini's most trusted property investment and housing stokvel.</h2>
          <p>To become Eswatini's most trusted and leading property investment and housing stokvel, empowering communities to achieve lasting financial security through property ownership.</p>
        </article>
        <article className="card">
          <p className="eyebrow">Mission</p>
          <h2>Secure, transparent savings solutions for homes.</h2>
          <p>To provide innovative, secure and transparent savings solutions that enable our members to build, buy and improve their homes through structured financial planning and community-driven investment.</p>
        </article>
      </section>
      <section className="section band">
        <SectionIntro eyebrow="Values" title="What Credify Stands For" />
        <div className="benefit-grid">
          {values.map(([title, body]) => <article className="card" key={title}><CardIcon label={title} /><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>
      <section className="section split">
        <Image className="split-image" src={images.visionSplit} alt="" width={700} height={520} />
        <div>
          <SectionIntro eyebrow="Why it matters" title="Property ownership shapes families for generations." body="A home is rarely just one person's achievement — it's stability for a family and a foundation the next generation can build on. Credify's vision and mission exist to make that outcome reachable for more emaSwati, through a structured plan rather than luck or timing." />
          <Link className="btn btn-primary" href="/apply">Join Credify</Link>
        </div>
      </section>
    </main>
  );
}
