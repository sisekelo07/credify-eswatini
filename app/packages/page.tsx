import Image from "next/image";
import Link from "next/link";
import { images, packages } from "@/lib/content";
import { PackageCards } from "@/components/PackageCards";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata = { title: "Property Stokvel Packages" };

export default function PackagesPage() {
  return (
    <main>
      <PageHero title="Find the Right Plan for Your Property Goal" eyebrow="Packages" body="Compare the Starter Home, Home Builder and Home Improvement plans without invented pricing or unsupported returns." image={images.packagesHero} />
      <section className="section">
        <PackageCards
          imagesBySlug={{
            "starter-home": images.listingStarter,
            "home-builder": images.listingBuilder,
            "home-improvement": images.listingImprovement
          }}
        />
      </section>
      <section className="section band split">
        <div>
          <SectionIntro title="Package Comparison" body="Pricing, joining fees and official package rules are ready to be configured when Credify supplies them." />
          <div className="table-scroll">
            <table className="compare-table">
              <thead><tr><th>Plan</th><th>Best For</th><th>Pricing</th></tr></thead>
              <tbody>
                {packages.map((plan) => (
                  <tr key={plan.slug}>
                    <td>{plan.title}</td><td>{plan.bestFor}</td><td>To be supplied</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="actions"><Link className="btn btn-primary" href="/apply">Apply Now</Link></div>
        </div>
        <Image className="split-image" src={images.packagesCompareSplit} alt="" width={700} height={520} />
      </section>
    </main>
  );
}
