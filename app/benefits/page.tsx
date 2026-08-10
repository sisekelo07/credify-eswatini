import Image from "next/image";
import Link from "next/link";
import { benefits, images } from "@/lib/content";
import { CardIcon } from "@/components/CardIcon";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata = { title: "Benefits of Joining" };

export default function BenefitsPage() {
  return (
    <main>
      <PageHero title="Benefits of Joining Credify" eyebrow="Member value" body="A property-focused stokvel experience built around transparency, digital access and disciplined saving." image={images.benefitsHero} />
      <section className="section">
        <SectionIntro title="Why Members Join" body="Eight practical reasons members choose to save toward their property goals with Credify, rather than on their own." />
        <div className="benefit-grid">
          {benefits.map(([title, body]) => <article className="card" key={title}><CardIcon label={title} /><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>
      <section className="section band split">
        <div>
          <SectionIntro eyebrow="Save together" title="Membership built on community, not just contributions." body="Credify's stokvel roots mean membership is more than an account — it's a group of people working toward the same kind of goal, supported by a platform that keeps everyone's progress clear and on record." />
          <Link className="btn btn-primary" href="/apply">Join Credify</Link>
        </div>
        <Image className="split-image" src={images.benefitsSplit} alt="" width={700} height={520} />
      </section>
    </main>
  );
}
