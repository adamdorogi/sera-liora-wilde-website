import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Practitioner } from "@/lib/content";
import { Location } from "./ui";
export function PractitionerCard({ person }: { person: Practitioner }) {
  return (
    <article className="practitioner-card">
      <Link
        href={`/${person.slug}`}
        className="practitioner-image"
        aria-label={`Meet ${person.name}`}
      >
        <Image
          src={person.image}
          className={person.slug === "lily" ? "upright-portrait" : undefined}
          alt={
            person.slug === "wildemassage"
              ? "Massage and holistic bodywork with Sera"
              : person.name
          }
          fill
          sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 23vw"
        />
        <span className="image-arrow">
          <ArrowUpRight size={21} />
        </span>
      </Link>
      <div className="practitioner-info">
        <Location>{person.location}</Location>
        <h3>
          <Link href={`/${person.slug}`}>{person.name}</Link>
        </h3>
        <p className="practitioner-role">{person.role}</p>
        <p className="practitioner-description">{person.intro}</p>
        <Link href={`/${person.slug}`} className="profile-link">
          Meet{" "}
          {person.name === "The Pure Water Specialists"
            ? "the team"
            : person.name.split(" ")[0]}{" "}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
