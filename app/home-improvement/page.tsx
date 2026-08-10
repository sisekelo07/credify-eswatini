import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/content";
import { CardIcon } from "@/components/CardIcon";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata = { title: "Home Improvement Plan" };

const improvementFeatures = [
  {
    title: "Renovation-focused savings",
    body: "Contributions are earmarked for improvement work — kitchens, bathrooms, roofing, extensions — rather than a general property goal."
  },
  {
    title: "Flexible contributions",
    body: "Set a monthly amount that matches the scale of the project you're planning, and adjust as your renovation plans firm up."
  },
  {
    title: "Easy application",
    body: "The same straightforward online application used across all Credify plans, with no separate process for improvement members."
  },
  {
    title: "Document upload support",
    body: "Upload proof of residence and any supporting documents for your existing property directly through the member portal."
  }
];

export default function HomeImprovementPage() {
  return (
    <main>
      <PageHero title="Improve the Home You Already Have" eyebrow="Renovation" body="The Home Improvement Plan helps members save toward renovations, extensions and practical improvements." image={images.homeImprovementHero} />
      <section className="section">
        <SectionIntro title="Renovation-focused savings" body="Use a Credify plan to prepare for home improvements with flexible contributions and a simple application process." />
        <div className="card-grid">
          {improvementFeatures.map((item) => (
            <article className="card" key={item.title}>
              <CardIcon label={item.title} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="actions"><Link className="btn btn-primary" href="/apply">Apply for Home Improvement Plan</Link></div>
      </section>
      <section className="section band split">
        <Image className="split-image" src={images.homeImprovementSplit} alt="" width={700} height={520} />
        <div>
          <SectionIntro eyebrow="What it covers" title="From a fresh coat of paint to a full renovation." body="The Home Improvement Plan is built for members upgrading kitchens, bathrooms, extensions and general home repairs — with the same structured, transparent saving approach as every Credify plan." />
          <Link className="btn btn-secondary" href="/apply">Start Your Application</Link>
        </div>
      </section>
    </main>
  );
}
