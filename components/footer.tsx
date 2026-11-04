import Link from "next/link";
import { ArrowUpRight, Instagram, Facebook, Mail } from "lucide-react";
import { Brand } from "./brand";
import { business, disclaimer } from "@/lib/business";
import { practitioners } from "@/lib/content";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand inverse />
            <p>
              Care for the whole of you.
              <br />A community to feel part of.
            </p>
            <div className="social-links">
              <a
                href={business.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href={business.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href={`mailto:${business.email}`}
                aria-label="Email the collective"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <h2>Come as you are.</h2>
            <a
              href={business.directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              42 Murray Street
              <br />
              Birkdale, Queensland 4159 <ArrowUpRight size={15} />
            </a>
            <p>
              Monday–Sunday · 9am–7pm
              <br />
              Appointments by arrangement
            </p>
            <a href={business.phoneHref}>{business.phone}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </div>
          <div className="footer-explore">
            <h3>Find your way</h3>
            {[
              { href: "/practitioners", name: "Meet the collective" },
              { href: "/offerings", name: "Explore our offerings" },
              { href: "/about", name: "Our story" },
              { href: "/our-vision", name: "Our future home" },
              { href: "/s/gift-cards", name: "Give a gift card" },
              { href: "/contact", name: "Get in touch" },
            ].map((l) => (
              <Link href={l.href} key={l.href}>
                {l.name}
                <ArrowUpRight size={14} />
              </Link>
            ))}
            <a
              href={business.community}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our wellness community
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <details className="footer-directory">
          <summary>
            Explore every member of the collective <span>+</span>
          </summary>
          <div>
            {practitioners.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`}>
                {p.name}
              </Link>
            ))}
          </div>
        </details>
        <div className="footer-disclaimer">
          <p>{disclaimer}</p>
          <p>
            Practitioners operate independently. Please confirm location,
            suitability, current prices and booking terms directly with your
            chosen provider.
          </p>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Sera Liora Wilde · The Wellness
            Collective
          </span>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
