import { Star } from "lucide-react";
import { demoTestimonials, images } from "@/lib/content";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero title="Member Stories" eyebrow="Testimonials" body="This page is ready for approved Credify testimonials. The cards below are clearly marked demo placeholders — real member photos and stories will replace them once Credify supplies approved content." image={images.testimonialsHero} />
      <section className="section">
        <div className="goal-grid">
          {demoTestimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="testimonial-stars" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p>&ldquo;{item.quote}&rdquo;</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar" aria-hidden>
                  {item.name.split(" ").map((word) => word[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p className="eyebrow">{item.type}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
