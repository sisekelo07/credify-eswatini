import Image from "next/image";
import { brand, images } from "@/lib/content";
import { CardIcon } from "@/components/CardIcon";
import { PageHero } from "@/components/PageHero";
import { TextArea, TextField } from "@/components/FormFields";

export const metadata = { title: "Contact Us" };

const contactCopy: Record<string, { label: string; icon: string }> = {
  phone: { label: "Phone", icon: "Professional Support" },
  email: { label: "Email", icon: "Easy online application" },
  address: { label: "Address", icon: "Community Growth" }
};

export default function ContactPage() {
  const whatsappHref = brand.whatsappNumber ? `https://wa.me/${brand.whatsappNumber}` : undefined;

  return (
    <main>
      <PageHero title="Contact Credify Eswatini" eyebrow="Support" body="Have a question about membership, packages or your application? Send us a message, or reach out directly using the details below." image={images.contactHero} />
      <section className="section split">
        <div>
          <div className="contact-grid">
            {Object.entries(brand.contact).map(([key, value]) => {
              const copy = contactCopy[key] ?? { label: key, icon: "Professional Support" };
              return (
                <article className="card" key={key}>
                  <CardIcon label={copy.icon} />
                  <h3>{copy.label}</h3>
                  <p>{value}</p>
                </article>
              );
            })}
            <article className="card">
              <CardIcon label="Community Growth" />
              <h3>WhatsApp</h3>
              {whatsappHref ? (
                <a className="text-link" href={whatsappHref}>Chat with us on WhatsApp</a>
              ) : (
                <p className="muted">WhatsApp number to be supplied by Credify.</p>
              )}
            </article>
          </div>
          <Image className="split-image contact-photo" src={images.contactSplit} alt="" width={620} height={420} />
        </div>
        <form className="form-card form-grid">
          <div className="full"><p className="eyebrow">Send a message</p><h2>We'll get back to you shortly.</h2></div>
          <TextField label="Name" />
          <TextField label="Email" type="email" />
          <TextField label="Phone" />
          <TextField label="Subject" />
          <TextArea label="Message" />
          <button className="btn btn-primary" type="button">Send Message</button>
          {whatsappHref ? (
            <a className="btn btn-secondary" href={whatsappHref}>Chat With Us on WhatsApp</a>
          ) : (
            <span className="muted">WhatsApp chat becomes active once a number is configured.</span>
          )}
        </form>
      </section>
    </main>
  );
}
