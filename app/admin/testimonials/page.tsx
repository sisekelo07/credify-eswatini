import { demoTestimonials } from "@/lib/content";

export const metadata = { title: "Admin Testimonials" };

export default function AdminTestimonialsPage() {
  return <><div className="portal-header"><h1>Testimonials</h1></div><div className="portal-grid">{demoTestimonials.map((item) => <article className="portal-card" key={item.name}><h3>{item.name}</h3><p>{item.quote}</p></article>)}</div></>;
}
