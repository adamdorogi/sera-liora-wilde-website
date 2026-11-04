import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CarFront,
  Accessibility,
  ThermometerSun,
} from "lucide-react";
import { business } from "@/lib/business";
import { Breadcrumb, ButtonLink } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
export const metadata: Metadata = {
  title: "Visit us & get in touch · Birkdale",
  description:
    "Visit The Wellness Collective at 42 Murray Street, Birkdale. Call 0491 309 571 or email wildewellco@gmail.com. Free street parking and ground floor access.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  return (
    <main id="main-content">
      <div className="container">
        <Breadcrumb current="Visit us & get in touch" />
        <div className="page-heading contact-heading">
          <h1>
            There’s a place
            <br />
            <em>for you here.</em>
          </h1>
          <p>
            A question, a first appointment, or a conversation about what’s
            next. We’d love to hear from you.
          </p>
        </div>
        <section className="contact-layout">
          <div className="visit-details">
            <h2>Find us in Birkdale.</h2>
            <div className="visit-address">
              <MapPin size={22} />
              <p>
                42 Murray Street
                <br />
                Birkdale, QLD 4159
              </p>
            </div>
            <a href={business.phoneHref}>
              <Phone size={19} />
              {business.phone}
            </a>
            <a href={`mailto:${business.email}`}>
              <Mail size={19} />
              {business.email}
            </a>
            <div className="visit-hours">
              <Clock size={19} />
              <div>
                <strong>Monday–Sunday</strong>
                <p>9am–7pm · By appointment</p>
              </div>
            </div>
            <ButtonLink href={business.directions} secondary>
              Get directions
            </ButtonLink>
            <div className="access-details">
              <p>
                <Accessibility size={20} /> Ground floor access
              </p>
              <p>
                <CarFront size={20} /> Free on-street parking outside
              </p>
              <p>
                <ThermometerSun size={20} /> Air conditioning & seasonal comfort
              </p>
            </div>
            <p className="contact-small">
              The Birkdale space includes a private treatment room, lounge,
              bathroom and kitchenette, looking onto a secluded, tree-lined
              backyard.
            </p>
            <p className="contact-small">
              Practitioners may work at other locations or online. Please check
              your chosen practitioner’s profile and appointment confirmation
              before travelling.
            </p>
          </div>
          <ContactForm />
        </section>
        <section className="clinic-gallery">
          <div className="section-intro">
            <h2>A quieter corner of your day.</h2>
            <p>A glimpse inside our private Birkdale clinic space.</p>
          </div>
          <div>
            {["754e82ff0f01", "7c464fdfb5e3", "5ac316aa8b87"].map((p, i) => (
              <figure key={p}>
                <Image
                  src={`/images/${p}.jpg`}
                  alt={
                    [
                      "The Birkdale treatment room in soft afternoon light",
                      "The private lounge area at the Birkdale space",
                      "A comfortable seat with views to the tree-lined backyard",
                    ][i]
                  }
                  width={900}
                  height={650}
                  sizes="(max-width:760px) 90vw, 31vw"
                />
              </figure>
            ))}
          </div>
        </section>
        <section className="map-section">
          <a
            className="map-photo"
            href={business.directions}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open directions to the Birkdale clinic in Google Maps"
          >
            <Image
              src="/images/0c8ea8172455.jpg"
              alt="The entrance to our Birkdale clinic space"
              fill
              sizes="(max-width: 760px) 90vw, 50vw"
            />
            <span>
              <MapPin size={19} /> Open in Google Maps
            </span>
          </a>
          <div>
            <h2>We’ll meet you here.</h2>
            <p>
              Birkdale, on the Redlands Coast.
              <br />A local place to pause, with a wider collective to explore.
            </p>
            <ButtonLink href={business.directions}>Plan your visit</ButtonLink>
          </div>
        </section>
      </div>
    </main>
  );
}
