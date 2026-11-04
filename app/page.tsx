import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand";
import { CategoryStrip, ButtonLink, Rating, HelpBanner } from "@/components/ui";
import { PractitionerCard } from "@/components/practitioner-card";
import { Reviews } from "@/components/reviews";
import { business } from "@/lib/business";
import { practitioners } from "@/lib/content";
const featuredImages = [
  "/images/616a7c7e5410.png",
  "/images/179f1f0ed60a.png",
  "/images/8614391be94e.png",
  "/images/019077963868.png",
];
export const revalidate = 3600;
export default function Home() {
  return (
    <>
      <main id="main-content">
        <section className="hero container">
          <div className="hero-content">
            <p className="hero-location">
              Holistic wellbeing · Birkdale & beyond
            </p>
            <h1>
              Come back
              <br />
              to <em>yourself.</em>
            </h1>
            <p className="hero-description">
              Thoughtful care for your body, mind and soul. Meet a collective of
              independent practitioners, here to support your own way of feeling
              well.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/practitioners">
                Find your practitioner
              </ButtonLink>
              <ButtonLink href="/offerings" secondary>
                Explore our offerings
              </ButtonLink>
            </div>
            <Rating />
          </div>
          <div className="hero-media">
            <div className="hero-image">
              <Image
                src="/images/616a7c7e5410.png"
                alt="A quiet moment of relaxation during a scalp massage"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 760px) 100vw, 52vw"
              />
              <div className="hero-caption">
                <BrandMark />
                <span>A softer place to land.</span>
              </div>
            </div>
            <div className="care-seal">
              Care that
              <br />
              meets you
              <br />
              where
              <br />
              you are
            </div>
          </div>
        </section>
        <CategoryStrip />
        <section className="section home-collective container">
          <div className="section-intro">
            <div>
              <p className="collective-context">Many paths. One collective.</p>
              <h2>Your people. Your kind of care.</h2>
            </div>
            <p>
              Independent practitioners. Shared values. Explore the people
              behind the practice and find the support that feels right for you.
            </p>
          </div>
          <div className="practitioner-grid">
            {practitioners.slice(0, 4).map((p, i) => (
              <PractitionerCard
                key={p.slug}
                person={{ ...p, image: featuredImages[i] }}
              />
            ))}
          </div>
          <div className="section-bottom">
            <p>
              A whole community of care, each with something different to share.
            </p>
            <ButtonLink href="/practitioners" secondary>
              Meet the whole collective
            </ButtonLink>
          </div>
        </section>
        <section className="founder-section">
          <div className="container founder-inner">
            <div className="founder-photo">
              <Image
                src="/images/80940a5943a0.jpg"
                alt="Hands-on therapeutic bodywork in a peaceful, green setting"
                fill
                sizes="(max-width:760px) 90vw, 44vw"
              />
            </div>
            <div>
              <h2>
                Care for the whole of you.
                <br />
                <em>Space to simply be.</em>
              </h2>
              <p>
                Founded by Sera Liora Wilde, our collective brings together
                people who believe wellbeing is personal. You might come for
                focused bodywork, a quiet moment, a new perspective or a
                connection that carries beyond the treatment room.
              </p>
              <p>
                Every practitioner has their own approach. What connects us is
                how we show up: with integrity, presence and care.
              </p>
              <ButtonLink href="/about" secondary>
                Get to know our collective
              </ButtonLink>
              <p className="welcome-note">
                Our Birkdale practice is women-owned and LGBTQ+ friendly.
              </p>
            </div>
          </div>
        </section>
        <Reviews />
        <section className="sera-feature section container">
          <div>
            <h2>
              Your next deep breath.
              <br />
              <em>Massage & more with Sera.</em>
            </h2>
            <p>
              Remedial work when you need focus. Slow, flowing bodywork when you
              need to soften. Reiki, yoga and a signature blend shaped around
              you.
            </p>
            <p className="feature-location">
              Birkdale · Monday–Sunday, 9am–7pm · By appointment
            </p>
            <div className="inline-actions">
              <ButtonLink href="/book">Explore treatments & book</ButtonLink>
              <ButtonLink href="/wildemassage" secondary>
                Meet Sera
              </ButtonLink>
            </div>
          </div>
          <div className="sera-feature-image">
            <Image
              src="/images/e2552922965e.jpeg"
              alt="Warm hot stones and therapeutic massage"
              fill
              sizes="(max-width:760px) 90vw, 42vw"
            />
          </div>
        </section>
        <section className="community-section">
          <div className="container community-layout">
            <div className="community-copy">
              <h2>
                More than an appointment.
                <br />
                <em>A place to belong.</em>
              </h2>
              <p>
                Dance with the seasons. Learn something new. Gather with people
                who value connection as much as you do.
              </p>
              <ButtonLink href="/dreamweaver-community-dance" secondary>
                Discover DreamWeaver CommUnity Dance
              </ButtonLink>
              <div className="next-gathering">
                <span>DreamWeaver · Spring Edition</span>
                <h3>Dream it. Dance it. Weave it.</h3>
                <p>
                  Saturday 14 November 2026
                  <br />
                  Allambee Sanctuary, Capalaba
                </p>
                <p className="event-detail">
                  Family-friendly dance, yoga, cacao, drumming, artisan stalls
                  and sunset over Tingalpa Reservoir.
                </p>
                <p className="event-code">
                  A little gift for the tribe: use <strong>WELL</strong> for 10%
                  off tickets.
                </p>
                <ButtonLink href="https://tinyurl.com/dreamweaverspring">
                  Explore the gathering
                </ButtonLink>
              </div>
            </div>
            <div className="community-photo">
              <Image
                src="/images/33f85bf1ef7a.jpeg"
                alt="A shared breathwork and wellbeing experience offered by Jenny Oceans"
                fill
                sizes="(max-width:760px) 90vw, 45vw"
              />
              <span>Connection, in all its forms.</span>
            </div>
          </div>
        </section>
        <section className="meditation-section section container">
          <div>
            <h2>
              A pause,
              <br />
              <em>wherever you are.</em>
            </h2>
            <p>
              Human-made guided meditations from members of the collective. A
              little space to reconnect, in your own time.
            </p>
          </div>
          <div className="meditation-links">
            <a
              href="https://www.adelewatson.com/product/meditations-03/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                Personalised guided meditations
                <small>Adele Watson · Created for you</small>
              </span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
            <a
              href="https://www.adelewatson.com/product/meditations-02/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                Sacred Self-Healing Journey
                <small>Adele Watson · Explore the collection</small>
              </span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
            <a
              href="https://www.adelewatson.com/product/meditations-01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                Soul Pause: five gentle meditations
                <small>Adele Watson · Explore the collection</small>
              </span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
            <Link href="/jayantijay">
              <span>
                Sacred Shakti meditations
                <small>Jayanti Woods · Two guided journeys</small>
              </span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </Link>
          </div>
        </section>
        <section className="future-section">
          <div className="container">
            <h2>
              Rooted in community.
              <br />
              <em>Growing towards something more.</em>
            </h2>
            <p>
              We’re seeking 2–3 acres or more to create a future wellness home
              on the Redlands Coast. A vision for movement, gardens, nourishing
              food and people coming together.
            </p>
            <ButtonLink href="/our-vision" light>
              Help our next chapter take root
            </ButtonLink>
          </div>
        </section>
        <section className="visit-section section container">
          <div className="visit-home-photo">
            <Image
              src="/images/20f922e0de5d.jpg"
              alt="The private lounge and garden outlook at our Birkdale space"
              fill
              sizes="(max-width:760px) 90vw, 48vw"
            />
          </div>
          <div>
            <h2>
              A quieter corner
              <br />
              <em>of your day.</em>
            </h2>
            <p>
              Our Birkdale space is private, comfortable and connected to a
              secluded, tree-lined backyard. Ground floor access. Free on-street
              parking. A warm welcome.
            </p>
            <p className="visit-home-address">
              42 Murray Street
              <br />
              Birkdale, Queensland 4159
            </p>
            <div className="inline-actions">
              <ButtonLink href="/contact">Plan your visit</ButtonLink>
              <ButtonLink href={business.directions} secondary>
                Get directions
              </ButtonLink>
            </div>
          </div>
        </section>
        <HelpBanner />
      </main>
    </>
  );
}
