import type { MetadataRoute } from "next";
import { practitioners } from "@/lib/content";
import { business } from "@/lib/business";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/practitioners",
    "/offerings",
    "/about",
    "/our-vision",
    "/contact",
    "/book",
    "/s/gift-cards",
    "/privacy",
    ...practitioners.map((p) => `/${p.slug}`),
  ].map((route) => ({
    url: `${business.siteUrl}${route}`,
    lastModified: new Date("2026-11-04"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/practitioners" ? 0.9 : 0.7,
  }));
}
