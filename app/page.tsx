import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { benefits, demoTestimonials, images, packages, steps } from "@/lib/content";
import { CardIcon } from "@/components/CardIcon";
import { DashboardMockup } from "@/components/DashboardMockup";
import { FaqExplorer } from "@/components/FaqExplorer";
import { PackageCards } from "@/components/PackageCards";
import { SectionIntro } from "@/components/SectionIntro";

export default function HomePage() {
  return (
    <main>
      <section className="hero" style={{ "--hero-image": `url(${images.homeHero})` } as React.CSSProperties}>
        <div className="hero-content">
          <h1>Building Better Homes, Together.</h1>
          <p>
            Credify Eswatini helps individuals and families achieve their homeownership and home improvement goals through structured savings and affordable contribution plans.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/apply">Join Credify</Link>
            <Link className="btn btn-secondary" href="/packages">Explore Our Packages</Link>
          </div>
          <div className="hero-proof">
            <span>Structured Savings</span>
            <span>Secure Member Portal</span>
            <span>Transparent Contributions</span>
            <span>Community-Focused Growth</span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Credify trust values">
        {["Structured Savings", "Secure Member Portal", "Transparent Contributions", "Community-Focused Growth"].map((item) => (
          <div key={item}><strong>{item}</strong><p className="muted">Designed for disciplined property progress.</p></div>
        ))}
      </section>

      <section className="section">
        <SectionIntro eyebrow="Property goals" title="Your Property Goal Starts Here" body="Choose the route that matches what you want to achieve with your home." />
        <div className="goal-grid">
          {[
            {
              goal: "Buy a Home",
              image: images.goalBuy,
              body: "Save steadily toward a deposit and purchase costs with the Starter Home Plan, built for first-time buyers."
            },
            {
              goal: "Build a Home",
              image: images.goalBuild,
              body: "Plan and fund a new build in stages with the Home Builder Plan, designed for long-term construction goals."
            },
            {
              goal: "Improve Your Home",
              image: images.goalImprove,
              body: "Renovate, extend or repair a home you already own with the Home Improvement Plan's flexible contributions."
            }
          ].map(({ goal, image, body }) => (
            <article className="card goal-card" key={goal}>
              <Image className="goal-card-image" src={image} alt="" width={420} height={220} />
              <CardIcon label={goal} />
              <h3>{goal}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section band">
        <SectionIntro eyebrow="Packages" title="Choose Your Property Plan" body="No prices are shown until official Credify package pricing is supplied." />
        <PackageCards
          imagesBySlug={{
            "starter-home": images.homeTeaserStarter,
            "home-builder": images.homeTeaserBuilder,
            "home-improvement": images.homeTeaserImprovement
          }}
        />
      </section>

      <section className="section">
        <SectionIntro eyebrow="Journey" title="How It Works" body="A clear six-step path from registration to tracking your property goal." />
        <div className="timeline">
          {steps.map(([number, title, body]) => (
            <article className="step card" key={number}>
              <CardIcon label={title} />
              <p className="step-number">{number}</p>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section band">
        <SectionIntro eyebrow="Benefits" title="Why Join Credify?" body="Practical membership benefits aligned to property savings, transparency and digital access." />
        <div className="benefit-grid">
          {benefits.map(([title, body]) => (
            <article className="card" key={title}>
              <CardIcon label={title} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <SectionIntro eyebrow="Member portal" title="Track Your Journey" body="Members can view membership status, savings progress, contribution activity and document status through a secure-looking portal UI." />
          <Link className="btn btn-primary" href="/member/dashboard">Access Member Portal</Link>
        </div>
        <DashboardMockup />
      </section>

      <section className="section band split">
        <Image className="split-image" src={images.homeCommunitySplit} alt="" width={700} height={520} />
        <div>
          <SectionIntro eyebrow="Built around your property goals" title="Traditional stokvel principles, modern digital structure." body="Credify connects community-focused saving with online applications, document management and contribution tracking." />
          <Link className="btn btn-secondary" href="/about">Learn More About Credify</Link>
        </div>
      </section>

      <section className="section band">
        <SectionIntro eyebrow="Member stories" title="What Members Are Saying" body="This page previews demo testimonial cards. They will be replaced with approved Credify member stories before launch." />
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
          <article className="testimonial-card testimonial-cta">
            <h3>Your story could be next.</h3>
            <p className="muted">Start your Credify journey and work toward your own property goal.</p>
            <Link className="btn btn-primary" href="/apply">Join Credify</Link>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionIntro eyebrow="FAQs" title="Questions People Ask First" body="Answers stay careful where official policies still need to be finalised." />
        <FaqExplorer />
      </section>

      <section className="section">
        <div className="cta">
          <h2>Your Home Starts With a Plan.</h2>
          <p>Start building towards your property goal today.</p>
          <div className="actions">
            <Link className="btn btn-accent" href="/apply">Join Credify</Link>
            <Link className="btn btn-secondary" href="/contact">Chat With Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
