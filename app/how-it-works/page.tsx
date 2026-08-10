import Image from "next/image";
import Link from "next/link";
import { images, steps } from "@/lib/content";
import { CardIcon } from "@/components/CardIcon";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata = { title: "How It Works" };

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero title="How Credify Works" eyebrow="Six steps" body="Register, choose your package, upload documents, contribute and track your property goal." image={images.howItWorksHero} />
      <section className="section">
        <SectionIntro title="Your Membership Journey" />
        <div className="timeline">
          {steps.map(([number, title, body]) => <article className="step card" key={number}><CardIcon label={title} /><p className="step-number">{number}</p><h3>{title}</h3><p>{body}</p></article>)}
        </div>
        <div className="actions"><Link className="btn btn-primary" href="/apply">Start Your Application</Link></div>
      </section>
      <section className="section band split">
        <div>
          <SectionIntro eyebrow="Plan it together" title="Talk it through before you apply." body="Whether you're planning with a partner or on your own, take a moment to map out your property goal and package before starting the online application." />
          <Link className="btn btn-secondary" href="/faqs">Read the FAQs</Link>
        </div>
        <Image className="split-image" src={images.howItWorksSplit} alt="" width={700} height={520} />
      </section>
    </main>
  );
}
