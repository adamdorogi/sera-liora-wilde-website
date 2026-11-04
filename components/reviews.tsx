import reviews from "@/content/reviews.json";
import { ButtonLink, Stars } from "./ui";
export function Reviews() {
  return (
    <section className="reviews-section section">
      <div className="container">
        <div className="reviews-heading">
          <h2>
            A little love
            <br />
            from our community.
          </h2>
          <div>
            <p>
              <strong>5.0</strong> out of 5 on Google
            </p>
            <span>Based on 14 reviews · checked November 2026</span>
          </div>
        </div>
        <div className="review-grid">
          {reviews.reviews.map((r) => (
            <figure key={r.name}>
              <Stars />
              <blockquote>“{r.quote}”</blockquote>
              <figcaption>
                <span>{r.name}</span>
                <small>Google review · {r.date}</small>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="review-bottom">
          <span>Short excerpts from independent Google reviews.</span>
          <ButtonLink href={reviews.source} secondary>
            Read the community’s reviews
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
