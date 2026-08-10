import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/content";
import { CardIcon } from "@/components/CardIcon";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata = { title: "About Credify Eswatini" };

const whatWeDo = [
  {
    title: "Build",
    body: "Save towards constructing a new home from the ground up, with a plan structured around your building timeline."
  },
  {
    title: "Buy",
    body: "Work towards a deposit and the costs of purchasing a home, with steady contributions tracked in your member portal."
  },
  {
    title: "Improve",
    body: "Save for renovations, extensions and repairs on a home you already own, without disrupting your day-to-day budget."
  },
  {
    title: "Track",
    body: "Follow your membership, documents and savings progress at any time through a secure online dashboard."
  }
];

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About Credify Eswatini" eyebrow="Our story" body="A modern property and housing stokvel helping ordinary emaSwati save towards one of life's biggest investments: a home." image={images.aboutHero} />
      <section className="section">
        <SectionIntro
          eyebrow="Our story"
          title="A stokvel built for property, not just savings."
          body="Credify Eswatini was established because saving for a home shouldn't rely on informal record-keeping and guesswork. We took the trust and discipline of a traditional stokvel and paired it with a structured, digital membership platform — so every contribution, application and document has a clear home, and every member has a clear view of their own progress toward building, buying or improving a house."
        />
      </section>
      <section className="section band split">
        <Image className="split-image" src={images.aboutWhatWeDo} alt="" width={700} height={520} />
        <div>
          <SectionIntro title="What We Do" body="Four ways Credify supports members on the path to homeownership and home improvement." />
          <div className="card-grid">
            {whatWeDo.map((item) => (
              <article className="card" key={item.title}>
                <CardIcon label={item.title} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section split">
        <div>
          <SectionIntro eyebrow="Why Credify exists" title="Property progress needs structure." body="Too many property savings plans live in a notebook or a group chat. Credify combines traditional stokvel principles — community, discipline, shared accountability — with modern digital solutions, so members can apply online, manage documents, make payments and track their journey from one place." />
          <Link className="btn btn-primary" href="/apply">Start Your Credify Journey</Link>
        </div>
        <Image className="split-image" src={images.aboutWhy} alt="" width={700} height={520} />
      </section>
      <section className="section band">
        <SectionIntro eyebrow="Our approach" title="Traditional stokvel principles, modern digital structure." />
        <div className="card-grid">
          <article className="card"><h3>Community-first</h3><p>Membership is built on the same shared trust and accountability that makes stokvels work.</p></article>
          <article className="card"><h3>Structured contributions</h3><p>Monthly plans replace guesswork with a clear, trackable savings routine.</p></article>
          <article className="card"><h3>Digital by default</h3><p>Applications, documents and progress tracking all happen through the member portal.</p></article>
          <article className="card"><h3>Property-focused</h3><p>Every feature is built around one goal: helping members build, buy or improve a home.</p></article>
        </div>
      </section>
    </main>
  );
}
