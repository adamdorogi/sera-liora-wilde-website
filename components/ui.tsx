import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Star,
  Waves,
  Flower2,
  Wind,
  UsersRound,
  Leaf,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import { business, categories } from "@/lib/business";
export function ButtonLink({
  href,
  children,
  light = false,
  secondary = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  secondary?: boolean;
  className?: string;
}) {
  const ext = /^https?:/.test(href);
  return (
    <Link
      className={`${secondary ? "text-link" : `button${light ? " button-light" : ""}`} ${className}`}
      href={href}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {secondary ? <ArrowRight size={20} /> : <ArrowUpRight size={19} />}
    </Link>
  );
}
export function Stars() {
  return (
    <span className="stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={17} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}
export function Rating({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={`rating${compact ? " rating-compact" : ""}`}
      href={business.maps}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Stars />
      <span>
        <strong>5.0</strong> on Google <span aria-hidden="true">·</span> 14{" "}
        {compact ? "reviews" : "kind words from our community"}
      </span>
      <span className="sr-only">Read Google reviews (opens in a new tab)</span>
    </a>
  );
}
export function CategoryIcon({ id, size = 27 }: { id: string; size?: number }) {
  const Icon =
    id === "bodywork"
      ? Flower2
      : id === "energy"
        ? Waves
        : id === "movement"
          ? Wind
          : id === "nature"
            ? Leaf
            : UsersRound;
  return <Icon size={size} strokeWidth={1.25} aria-hidden="true" />;
}
export function CategoryStrip() {
  return (
    <nav className="category-strip" aria-label="Explore types of care">
      <div className="container">
        {categories
          .filter((c) =>
            ["bodywork", "energy", "movement", "community"].includes(c.id),
          )
          .map((c) => (
            <Link key={c.id} href={`/practitioners?category=${c.id}`}>
              <CategoryIcon id={c.id} />
              <span>{c.name}</span>
              <ArrowUpRight className="category-arrow" size={17} />
            </Link>
          ))}
      </div>
    </nav>
  );
}
export function Breadcrumb({
  current,
  parent,
}: {
  current: string;
  parent?: { href: string; name: string };
}) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span>/</span>
      {parent && (
        <>
          <Link href={parent.href}>{parent.name}</Link>
          <span>/</span>
        </>
      )}
      <span aria-current="page">{current}</span>
    </nav>
  );
}
export function Location({ children }: { children: React.ReactNode }) {
  return (
    <span className="location">
      <MapPin size={14} />
      {children}
    </span>
  );
}
export function HelpBanner() {
  return (
    <section className="help-banner">
      <div className="container help-inner">
        <div>
          <h2>You don’t need to have it all figured out.</h2>
          <p>
            Tell us a little about what you’re looking for. We’ll help you find
            a person and a practice that feel right.
          </p>
        </div>
        <ButtonLink href="/contact">Let’s find your starting point</ButtonLink>
      </div>
    </section>
  );
}
export function ExternalNote() {
  return (
    <span className="external-note">
      <MoveUpRight size={13} /> Opens the practitioner’s own booking service
    </span>
  );
}
