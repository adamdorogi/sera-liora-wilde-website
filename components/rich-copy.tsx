import { safeHref } from "@/lib/content";
function clean(text: string) {
  return text
    .replace(/\p{Extended_Pictographic}/gu, "")
    .replace(/[\u200d\uFE0F\uFEFF]/g, "")
    .replace(/[♡✞❁→]+/g, "")
    .trim();
}
export function LinkText({ text }: { text: string }) {
  const bits = text.split(
    /((?:https?:\/\/|www\.)[^\s]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g,
  );
  return (
    <>
      {bits.map((b, i) => {
        const href = /^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(b)
          ? `mailto:${b}`
          : safeHref(b);
        return href ? (
          <a
            key={i}
            href={href}
            {...(/^https?:/.test(href)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {b}
          </a>
        ) : (
          b
        );
      })}
    </>
  );
}
function Blocks({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n\s*\n/).map((raw, i) => {
        const b = clean(raw);
        if (!b) return null;
        const lines = b.split("\n");
        if (lines.every((l) => /^\s*[•~-]/.test(l)))
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>
                  <LinkText text={l.replace(/^\s*[•~-]+\s*/, "")} />
                </li>
              ))}
            </ul>
          );
        return (
          <p key={i}>
            {lines.map((l, j) => (
              <span key={j}>
                {j > 0 && <br />}
                <LinkText text={l} />
              </span>
            ))}
          </p>
        );
      })}
    </>
  );
}
export function RichCopy({ texts }: { texts: string[] }) {
  const sections: { title: string; text: string }[] = [];
  for (const source of texts) {
    let current = { title: "", text: "" };
    for (const line of source.split("\n")) {
      const title = clean(line);
      const hasEmoji = /\p{Extended_Pictographic}/u.test(line);
      const isHeading =
        title.length > 3 &&
        title.length < 95 &&
        (hasEmoji ||
          (/^[A-Z\s&’'—–|:0-9®-]+$/.test(title) && /[A-Z]{4}/.test(title))) &&
        !/(@|^\+?\d)/.test(title) &&
        !/^(https?|www|Phone|Mobile|Email|Contact|Website|Instagram|Facebook|Pricing:|Investment|\$)/i.test(
          title,
        );
      if (isHeading) {
        if (current.text.trim()) sections.push(current);
        current = { title: title.replace(/^[•\s]+/, ""), text: "" };
      } else current.text += line + "\n";
    }
    if (current.text.trim()) sections.push(current);
  }
  return (
    <div className="rich-copy">
      {sections.map((s, i) =>
        s.title ? (
          <details className="profile-section" open={i < 2} key={i}>
            <summary>
              {s.title}
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <Blocks text={s.text} />
            </div>
          </details>
        ) : (
          <div className="profile-introduction" key={i}>
            <Blocks text={s.text} />
          </div>
        ),
      )}
    </div>
  );
}
