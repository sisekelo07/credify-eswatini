import Link from "next/link";
import { documents, images, requirements } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata = { title: "Membership Requirements" };

const documentNotes: Record<string, string> = {
  "National ID": "Your Eswatini national identity document, used to confirm your identity on file.",
  "Proof of Residence": "A recent utility bill, lease or council document showing your current address.",
  "Proof of Income if applicable": "Requested where relevant to help confirm a realistic contribution plan.",
  "Passport-size Photograph optional": "Used for your member profile — optional, but recommended.",
  "Bank Confirmation Letter if required": "Requested only where your chosen payment method requires it."
};

export default function MembershipRequirementsPage() {
  return (
    <main>
      <PageHero title="Membership Requirements" eyebrow="Apply online" body="Review eligibility and document requirements before starting your Credify application." image={images.membershipRequirementsHero} />
      <section className="section">
        <SectionIntro title="Who Can Join?" body="Credify membership is open to any eligible individual who meets the following requirements. You'll confirm each of these during the online application." />
      </section>
      <section className="section band split">
        <article>
          <div className="accordion">
            {requirements.map(([title, body]) => (
              <details open key={title}>
                <summary>{title}</summary>
                <p>{body}</p>
              </details>
            ))}
          </div>
        </article>
        <article className="card">
          <h2>Document Checklist</h2>
          <p className="muted">Have these ready before you start your application — you'll upload them directly in the member portal.</p>
          <ul>
            {documents.map((doc) => (
              <li key={doc}>
                <strong>{doc}</strong>
                <br />
                <span className="muted">{documentNotes[doc]}</span>
              </li>
            ))}
          </ul>
          <Link className="btn btn-primary" href="/apply">Apply Online</Link>
        </article>
      </section>
    </main>
  );
}
