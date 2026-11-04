import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb, ButtonLink } from "@/components/ui";
import { business } from "@/lib/business";
export const metadata: Metadata = {
  title: "Let’s grow something beautiful",
  description:
    "Help The Wellness Collective find 2–3 acres or more in the Redlands Coast region for a future community wellness destination.",
  alternates: { canonical: "/our-vision" },
};
export default function VisionPage() {
  return (
    <main id="main-content">
      <div className="container">
        <Breadcrumb current="Our vision" />
        <section className="vision-opening">
          <div>
            <h1>
              Let’s grow
              <br />
              something
              <br />
              <em>beautiful. Together.</em>
            </h1>
            <p className="lead">
              A future wellness destination for the Redlands Coast. A place to
              nourish, reconnect, learn and belong.
            </p>
            <ButtonLink
              href={`mailto:${business.email}?subject=Our%20future%20wellness%20home`}
            >
              Be part of the next chapter
            </ButtonLink>
          </div>
          <div className="vision-flyer">
            <Image
              src="/images/ee99c1aa6576.jpeg"
              alt="The Wellness Collective’s community invitation seeking two or more acres for a future wellness destination"
              width={1199}
              height={1312}
              loading="eager"
              fetchPriority="high"
              sizes="(max-width:760px) 90vw, 42vw"
            />
          </div>
        </section>
      </div>
      <section className="vision-land">
        <div className="container reading-section">
          <h2>
            The team is coming together.
            <br />
            Now, we’re calling in the land.
          </h2>
          <div>
            <p>
              We’re looking for approximately <strong>2–3 acres or more</strong>{" "}
              across the Redlands Coast and surrounding areas: from Murarrie and
              Wynnum through to Redland Bay and Mount Cotton.
            </p>
            <p>
              The right place doesn’t have to be rural. We’re looking for space,
              potential and a good fit. We’re open to leasing, collaborating
              with landowners and businesses, developing a property together and
              exploring a future purchase if that suits everyone involved.
            </p>
            <p>
              Our goal is to bring this vision to life and be fully operational
              before <strong>2030</strong>. These are future plans; today, our
              practitioners continue to offer care at their existing locations.
            </p>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="section-intro">
          <h2>Imagine what we could create.</h2>
          <p>
            A shared home for the collective, designed around people, nature and
            everyday wellbeing.
          </p>
        </div>
        <div className="vision-list">
          {[
            [
              "A dedicated yoga shala",
              "Regular movement, classes and a place to practise and connect throughout the day.",
            ],
            [
              "An organic café & productive gardens",
              "Nourishing food, produce grown onsite and the possibility of a partnership with Mount Cotton Organic Farm.",
            ],
            [
              "A home for independent practitioners",
              "Diverse modalities, shared learning and sustainable livelihoods built through collaboration.",
            ],
            [
              "Workshops, retreats & gatherings",
              "Space for education, connection, creativity and a community that grows together.",
            ],
            [
              "A place to soak & slow down",
              "A vision for a natural magnesium-rich bathing space, shared with friends and surrounded by nature.",
            ],
          ].map(([t, p]) => (
            <div key={t}>
              <h3>{t}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="vision-invitation">
        <div className="container">
          <h2>
            You don’t need to own land
            <br />
            to help this take root.
          </h2>
          <p>
            Perhaps you know someone, have a connection, want to collaborate, or
            simply feel curious. If you’re a landowner, practitioner or business
            with a shared vision, Sera would love a cuppa and a conversation.
          </p>
          <div className="inline-actions">
            <ButtonLink
              href={`mailto:${business.email}?subject=The%20Wellness%20Collective%20partnership`}
              light
            >
              Start a conversation
            </ButtonLink>
            <a href={business.phoneHref}>{business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
