import type { Metadata } from "next";
import Image from "next/image";
import { BrandMark } from "@/components/brand";
import { Breadcrumb, ButtonLink } from "@/components/ui";
import { business } from "@/lib/business";
export const metadata: Metadata = {
  title: "Give the gift of a little time",
  description:
    "Send a Square eGift card for Sera’s massage and holistic wellbeing practice. Choose $25, $50, $80, $110 or a custom amount, with email or text delivery.",
  alternates: { canonical: "/s/gift-cards" },
};
export default function GiftCards() {
  return (
    <main id="main-content">
      <div className="container">
        <Breadcrumb current="Gift cards" />
        <section className="gift-hero">
          <div>
            <h1>
              Give a moment
              <br />
              of <em>coming back.</em>
            </h1>
            <p className="lead">
              For someone who gives so much. For a celebration. Or simply
              because a little care can mean a lot.
            </p>
            <p>
              Choose an eGift card for Sera’s practice, add a personal message,
              and send it by email or text—now or on a date you choose.
            </p>
            <ButtonLink href={business.giftCards}>
              Choose your eGift card
            </ButtonLink>
          </div>
          <div className="gift-card-art">
            <Image
              src="/images/616a7c7e5410.jpg"
              alt="A gift of time to relax"
              fill
              sizes="(max-width:760px) 90vw, 45vw"
            />
            <div>
              <BrandMark />
              <p>
                A little time.
                <br />
                <em>Just for you.</em>
              </p>
              <span>
                Sera Liora Wilde
                <br />
                The Wellness Collective
              </span>
            </div>
          </div>
        </section>
        <section className="gift-options">
          <h2>Make it personal.</h2>
          <div>
            <p>
              <strong>Your choice of amount.</strong>
              <br />
              $25, $50, $80, $110, or a custom amount in the Square checkout.
            </p>
            <p>
              <strong>A thoughtful delivery.</strong>
              <br />
              Send to one person, several people, or contribute together to a
              group gift.
            </p>
            <p>
              <strong>Something to look forward to.</strong>
              <br />
              Add your message and choose instant or scheduled delivery.
            </p>
          </div>
        </section>
        <section className="gift-checkout">
          <h2>A little care, ready to give.</h2>
          <p>
            Complete your gift card purchase with Square. The checkout may
            display the practice’s merchant name, “Wilde Collective – Massage &
            Healing Spa”.
          </p>
          <div className="checkout-handoff">
            <h3>Something lovely to look forward to.</h3>
            <p>
              Choose your amount, add a personal message, and select instant
              delivery or a date that means something.
            </p>
            <ButtonLink href={business.giftCards}>
              Personalise & buy your eGift card
            </ButtonLink>
            <small>Secure payment and delivery through Square.</small>
          </div>
          <p className="gift-terms">
            Gift cards are for the issuing practice. Please confirm eligible
            treatments and gift card terms with Sera; independent practitioners
            manage their own payments.
          </p>
        </section>
      </div>
    </main>
  );
}
