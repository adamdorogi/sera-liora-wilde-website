"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { business } from "@/lib/business";
export function ContactForm() {
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  function prepare(form: FormData) {
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const topic = String(form.get("topic") || "Finding a practitioner");
    const message = String(form.get("message") || "");
    setDraft(
      `Hello Sera,\n\n${message}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nEnquiry: ${topic}`,
    );
    setCopied(false);
  }
  return (
    <div className="enquiry-box">
      <h2>A good place to start.</h2>
      <p>Share what you’re looking for and we’ll help you find your way.</p>
      <form action={prepare}>
        <div className="form-row">
          <label>
            Your name
            <input name="name" autoComplete="name" required maxLength={120} />
          </label>
          <label>
            Email address
            <input
              name="email"
              autoComplete="email"
              type="email"
              required
              maxLength={200}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Phone <span>(optional)</span>
            <input name="phone" autoComplete="tel" type="tel" maxLength={40} />
          </label>
          <label>
            I’m interested in
            <select name="topic">
              <option>Finding a practitioner</option>
              <option>Booking with Sera</option>
              <option>Workshops & community</option>
              <option>Joining the collective</option>
              <option>Land & partnership opportunities</option>
              <option>Something else</option>
            </select>
          </label>
        </div>
        <label>
          What brings you here?
          <textarea
            name="message"
            required
            rows={5}
            maxLength={5000}
            placeholder="Tell us a little about what you’re looking for…"
          />
        </label>
        <p className="form-note">
          This prepares an email for you to review and send from your email app.
          Please keep personal health details for your private conversation with
          your practitioner.
        </p>
        <button className="button" type="submit">
          Prepare your enquiry <ArrowUpRight size={18} />
        </button>
      </form>
      {draft && (
        <div className="email-draft" role="status">
          <h3>Your email is ready to review.</h3>
          <p>
            Choose “Open email” to send it to {business.email}. If your email
            app doesn’t open, copy your message and email us directly.
          </p>
          <pre>{draft}</pre>
          <div className="draft-actions">
            <a
              className="button"
              href={`mailto:${business.email}?subject=${encodeURIComponent("The Wellness Collective enquiry")}&body=${encodeURIComponent(draft)}`}
            >
              Open email <ArrowUpRight size={17} />
            </a>
            <button
              type="button"
              className="text-link plain-button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(draft);
                  setCopied(true);
                } catch {
                  setCopied(false);
                }
              }}
            >
              {copied ? <Check size={17} /> : <Copy size={17} />}{" "}
              {copied ? "Copied" : "Copy message"}
            </button>
          </div>
          <small>Your enquiry has not been sent yet.</small>
        </div>
      )}
    </div>
  );
}
