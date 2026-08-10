import Image from "next/image";
import { brand, images } from "@/lib/content";
import { FaqExplorer } from "@/components/FaqExplorer";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "FAQs" };

export default function FaqPage() {
  const whatsappHref = brand.whatsappNumber ? `https://wa.me/${brand.whatsappNumber}` : "/contact";
  return (
    <main>
      <PageHero title="Frequently Asked Questions" eyebrow="Support" body="Everything you need to know about joining, applying and managing your Credify membership." />
      <section className="section split">
        <FaqExplorer />
        <div>
          <Image className="split-image" src={images.faqSplit} alt="" width={620} height={460} />
          <article className="card testimonial-cta faq-cta">
            <h3>Still have questions?</h3>
            <p>Our team is happy to help by phone, email or WhatsApp.</p>
            <a className="btn btn-accent" href={whatsappHref}>Chat With Us on WhatsApp</a>
          </article>
        </div>
      </section>
    </main>
  );
}
