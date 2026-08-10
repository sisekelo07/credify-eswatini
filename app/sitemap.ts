import type { MetadataRoute } from "next";
import { news, packages } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://credify.co.sz";
  const staticRoutes = [
    "",
    "/about",
    "/vision-mission",
    "/packages",
    "/home-improvement",
    "/how-it-works",
    "/membership-requirements",
    "/benefits",
    "/faqs",
    "/news",
    "/testimonials",
    "/contact",
    "/apply",
    "/login",
    "/privacy-policy",
    "/terms",
    "/membership-agreement"
  ];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...packages.map((plan) => ({ url: `${base}/packages/${plan.slug}`, lastModified: new Date() })),
    ...news.map((article) => ({ url: `${base}/news/${article.slug}`, lastModified: new Date() }))
  ];
}
