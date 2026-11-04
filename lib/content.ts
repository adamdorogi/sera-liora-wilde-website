import fs from "node:fs";
import path from "node:path";
import people from "@/content/practitioners.json";
export type Practitioner = (typeof people)[number];
export const practitioners: Practitioner[] = people;
export type SourcePage = {
  slug: string;
  name: string;
  texts: { text: string }[];
  images: { local: string; alt: string; width: number; height: number }[];
};
export function getSource(slug: string): SourcePage {
  return JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content", `${slug}.json`),
      "utf8",
    ),
  );
}
export function profileText(slug: string) {
  return getSource(slug)
    .texts.filter((t) => t.text.length > 160)
    .map((t) =>
      t.text
        .replace(
          /Having personally navigated and recovered from Stage 4 cancer through natural and holistic approaches,[\s\S]*?capacity for healing\./,
          "Sera’s own experience of serious illness has shaped the compassion and personal perspective she brings to her work.",
        )
        .replace("wildewellco@gmail,.com", "wildewellco@gmail.com")
        .replace(
          "20 minutes — $40\n\nYoni Steaming",
          "See live booking for the current magnesium bath duration and price.\n\nYoni Steaming",
        )
        .replace("jJess", "Jess")
        .replace(/\uFEFF/g, ""),
    );
}
export function safeHref(value: string): string | null {
  const clean = value.trim().replace(/[),.;]+$/, "");
  if (/^(https?:\/\/|mailto:|tel:)/i.test(clean)) return clean;
  if (/^(www\.|facebook\.com|instagram\.com)/i.test(clean))
    return `https://${clean}`;
  return null;
}
