import { Suspense } from "react";
import type { Metadata } from "next";
import { Finder } from "@/components/finder";
import { Breadcrumb, HelpBanner } from "@/components/ui";
export const metadata: Metadata = {
  title: "Find your practitioner",
  description:
    "Meet the independent practitioners, facilitators and local partners of The Wellness Collective. Explore massage, yoga, Reiki, women’s wellness and more.",
  alternates: { canonical: "/practitioners" },
};
export default function DirectoryPage() {
  return (
    <main id="main-content">
      <div className="page-intro container">
        <Breadcrumb current="Our collective" />
        <div className="page-heading">
          <h1>
            Your people.
            <br />
            <em>Your kind of care.</em>
          </h1>
          <p>
            Different people. Different practices. One shared belief: care
            should feel personal. Meet our independent practitioners,
            facilitators and community partners, and find your own starting
            point.
          </p>
        </div>
      </div>
      <section
        className="container directory-section"
        aria-label="Practitioner directory"
      >
        <Suspense
          fallback={
            <p className="loading-message">Gathering the collective…</p>
          }
        >
          <Finder />
        </Suspense>
      </section>
      <HelpBanner />
    </main>
  );
}
