import { ButtonLink } from "@/components/ui";
export default function NotFound() {
  return (
    <main id="main-content" className="not-found container">
      <h1>
        A little off
        <br />
        <em>the beaten path.</em>
      </h1>
      <p>This page isn’t here. Let’s help you find what you’re looking for.</p>
      <div className="inline-actions">
        <ButtonLink href="/">Back to the collective</ButtonLink>
        <ButtonLink href="/practitioners" secondary>
          Find a practitioner
        </ButtonLink>
      </div>
    </main>
  );
}
