import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/content";

export function PackageCards({ imagesBySlug }: { imagesBySlug?: Record<string, string> }) {
  return (
    <div className="package-grid">
      {packages.map((plan) => (
        <article className="package-card" key={plan.slug}>
          <Image src={imagesBySlug?.[plan.slug] ?? plan.image} alt="" width={520} height={320} />
          <div>
            <p className="eyebrow">{plan.eyebrow}</p>
            <h3>{plan.title}</h3>
            <p>{plan.bestFor}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link className="btn btn-secondary" href={`/packages/${plan.slug}`}>
              Explore Plan
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
