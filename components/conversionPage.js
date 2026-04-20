"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./conversionPage.module.css";
import SectionCta from "./sectionCta";
import DowntimeComparison from "./downtimeComparison";
import {
  BRAND_SYSTEM,
  CORE_OFFER,
  EMOTIONAL_PULL,
  HERO_VARIANTS,
  MECHANISM,
  OBJECTION_FAQ,
  OFFER_ENGINEERING,
  PROBLEM_AGITATE,
  VSCULPT_PROTOCOL,
} from "../lib/conversionCopy";
import { sampleReviews } from "../lib/googleReviewsData";

const WA = "https://wa.me/6598807382";

function encodeMsg(text) {
  return encodeURIComponent(text);
}

export default function ConversionPage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const hero = HERO_VARIANTS[heroIndex];
  const spotlight = useMemo(() => sampleReviews.slice(0, 3), []);

  const cycleVariant = () => {
    setHeroIndex((i) => (i + 1) % HERO_VARIANTS.length);
  };

  const offerWa = `${WA}?text=${encodeMsg(
    "Hi VSkin, I want the First-Time Face Sculpting Experience (analysis + trial). What’s included from $158 and what slots do you have?"
  )}`;

  return (
    <div className={styles.wrap}>
      {/* 1. Hook */}
      <header className={styles.hero}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 className={styles.headline}>{hero.headline}</h1>
        <p className={styles.sub}>{hero.sub}</p>
        <div className={styles.ctaRow}>
          <a
            className={styles.ctaPrimary}
            href={`${WA}?text=${encodeMsg(hero.waMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.ctaPrimary}
          </a>
          <a className={styles.ctaSecondary} href="#beauty-concierge">
            {hero.ctaSecondary}
          </a>
        </div>
        <p className={styles.variantHint}>
          Showing message style {heroIndex + 1} of {HERO_VARIANTS.length} —{" "}
          <button type="button" className={styles.variantLink} onClick={cycleVariant}>
            rotate headline angle
          </button>
        </p>
        <div className={styles.trustStrip} aria-label="Trust signals">
          <span className={styles.trustChip}>Needle-free VJet</span>
          <span className={styles.trustChip}>FDA & HSA compliant tech</span>
          <span className={styles.trustChip}>Jurong East</span>
          <span className={styles.trustChip}>By appointment</span>
        </div>
      </header>

      {/* 2. Agitation (emotional) */}
      <section className={styles.section} aria-labelledby="emotional-heading">
        <h2 id="emotional-heading" className={styles.sectionTitle}>
          {EMOTIONAL_PULL.headline}
        </h2>
        <ul className={styles.bullets}>
          {EMOTIONAL_PULL.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <SectionCta
          primaryLabel="Get your face analysis now"
          primaryMessage="Hi VSkin, I want a face analysis. I care about jawline/photos and needle-free options."
        />
      </section>

      {/* 3. Problem */}
      <section className={styles.section} aria-labelledby="problem">
        <h2 id="problem" className={styles.sectionTitle}>
          {PROBLEM_AGITATE.headline}
        </h2>
        <p className={styles.sectionLead}>{PROBLEM_AGITATE.body}</p>
        <SectionCta
          primaryLabel="See if you’re suitable"
          primaryMessage="Hi VSkin, I’m not sure what I need—can we do suitability on WhatsApp before I book?"
        />
      </section>

      {/* 4. Solution (core + productised protocol) */}
      <section className={styles.section} aria-labelledby="core-offer">
        <h2 id="core-offer" className={styles.sectionTitle}>
          {CORE_OFFER.headline}
        </h2>
        <ul className={styles.bullets}>
          {CORE_OFFER.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <h3 className={styles.sectionTitle} style={{ fontSize: "1.15rem", marginTop: "1.75rem" }}>
          {VSCULPT_PROTOCOL.headline}
        </h3>
        <div className={styles.steps}>
          {VSCULPT_PROTOCOL.steps.map((s) => (
            <div key={s.name} className={styles.stepCard}>
              <p className={styles.stepTitle}>{s.name}</p>
              <p className={styles.stepText}>{s.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.sectionLead} style={{ marginTop: "1rem" }}>
          <strong>{BRAND_SYSTEM.name}™</strong> is the positioning.{" "}
          <strong>{BRAND_SYSTEM.protocolName}™</strong> is how we run the chair—same
          four moves so you always know what phase you are in.
        </p>
        <SectionCta
          primaryLabel="Start your sculpting journey"
          primaryMessage="Hi VSkin, I want to start with the V-Sculpt Protocol—what’s the first available analysis?"
        />
      </section>

      {/* 5. Mechanism */}
      <section className={styles.section} aria-labelledby="mechanism">
        <h2 id="mechanism" className={styles.sectionTitle}>
          Why this works (simple mechanism)
        </h2>
        <p className={styles.sectionLead}>{MECHANISM.analogy}</p>
        <div className={styles.steps}>
          {MECHANISM.steps.map((s) => (
            <div key={s.title} className={styles.stepCard}>
              <p className={styles.stepTitle}>{s.title}</p>
              <p className={styles.stepText}>{s.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.sectionLead} style={{ marginTop: "1.25rem" }}>
          <strong>Why it works:</strong> {MECHANISM.whyWorks}
        </p>
        <h3 className={styles.sectionTitle} style={{ fontSize: "1.1rem", marginTop: "1.5rem" }}>
          {MECHANISM.vsInjections.headline}
        </h3>
        <DowntimeComparison />

        <table className={styles.compareTable}>
          <thead>
            <tr>
              <th>Angle</th>
              <th>V-Sculpt / VJet lane</th>
              <th>Injections lane</th>
            </tr>
          </thead>
          <tbody>
            {MECHANISM.vsInjections.rows.map((row) => (
              <tr key={row.angle}>
                <td>
                  <strong>{row.angle}</strong>
                </td>
                <td>{row.method}</td>
                <td>{row.injections}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <SectionCta primaryMessage="Hi VSkin, explain VJet vs injections for my goal—I want the honest comparison." />
      </section>

      {/* 6. Proof */}
      <section className={styles.section} aria-labelledby="proof">
        <h2 id="proof" className={styles.sectionTitle}>
          Proof you can verify today
        </h2>
        <p className={styles.sectionLead}>
          We are building a consent-based before/after gallery. Until those assets
          are live, here are verbatim client reviews (same source as your carousel).
        </p>
        <div className={styles.proofGrid}>
          {spotlight.map((r) => (
            <blockquote key={r.author + r.date} className={styles.proofCard}>
              <div className={styles.stars} aria-hidden>
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>
              <p className={styles.proofQuote}>&ldquo;{r.text}&rdquo;</p>
              <p className={styles.proofMeta}>
                — {r.author}, {r.date}
              </p>
            </blockquote>
          ))}
        </div>
        <div className={styles.photoPlaceholder} role="note">
          <strong>Next trust upgrade:</strong> Add 3–5 same-lighting before/afters
          with written consent, plus a live Google Reviews embed (see trust section
          below).
        </div>
        <SectionCta primaryLabel="Book after reading reviews" primaryMessage="Hi VSkin, I read the on-site reviews and want to book a face analysis." />
      </section>

      {/* 7. Objections */}
      <section className={styles.section} aria-labelledby="objections">
        <h2 id="objections" className={styles.sectionTitle}>
          Questions that kill conversions—answered upfront
        </h2>
        {OBJECTION_FAQ.map((item, i) => {
          const open = openFaq === i;
          return (
            <div key={item.q} className={styles.faqItem}>
              <button
                type="button"
                className={styles.faqQ}
                aria-expanded={open}
                onClick={() => setOpenFaq(open ? null : i)}
              >
                <span>{item.q}</span>
                <span aria-hidden>{open ? "−" : "+"}</span>
              </button>
              {open ? <p className={styles.faqA}>{item.a}</p> : null}
            </div>
          );
        })}
        <p className={styles.sectionLead} style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          Device-level detail:{" "}
          <Link href="/faq" style={{ color: "#652d90", fontWeight: 700 }}>
            FAQ page
          </Link>
          .
        </p>
        <SectionCta primaryMessage="Hi VSkin, I read the objection FAQ—still want to check if I’m suitable in person." />
      </section>

      {/* 8. Offer + CTA */}
      <section className={styles.section} aria-labelledby="offer">
        <div className={styles.offerBox}>
          <h2 id="offer" className={styles.sectionTitle}>
            {OFFER_ENGINEERING.headline}
          </h2>
          {OFFER_ENGINEERING.subhead ? (
            <p className={styles.sectionLead} style={{ marginTop: 0 }}>
              {OFFER_ENGINEERING.subhead}
            </p>
          ) : null}
          <p className={styles.offerPrice}>{OFFER_ENGINEERING.priceLine}</p>
          <h3 className={styles.offerSubhead}>What’s included in the first visit</h3>
          <ul className={styles.bullets}>
            {OFFER_ENGINEERING.valueStack.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <h3 className={styles.offerSubhead}>Also covered</h3>
          <ul className={styles.bullets}>
            {OFFER_ENGINEERING.inclusions.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p className={styles.sectionLead} style={{ marginBottom: 0 }}>
            <strong>Bonus:</strong> {OFFER_ENGINEERING.bonus}
          </p>
          <p className={styles.urgency}>{OFFER_ENGINEERING.urgency}</p>
          <div className={styles.ctaRow} style={{ marginTop: "1.25rem" }}>
            <a className={styles.ctaPrimary} href={offerWa} target="_blank" rel="noopener noreferrer">
              Get your face analysis now
            </a>
            <Link href="/faq" className={styles.ctaSecondary}>
              Read full FAQ
            </Link>
          </div>
        </div>
        <SectionCta
          primaryLabel="Check if you’re suitable (quiz)"
          primaryMessage="Hi VSkin, I’ll complete the quiz on your site—please expect my WhatsApp after."
          showQuiz
        />
      </section>

      {/* Support treatments */}
      <section className={styles.listingsTeaser} aria-labelledby="more-treatments">
        <h2 id="more-treatments" className={styles.sectionTitle} style={{ color: "#fff" }}>
          Body slimming & skin support
        </h2>
        <p>
          After your face plan is clear, we layer supporting protocols (e.g. fat
          melt, tightening) without blurring your main outcome. Each treatment has
          its own mini landing on the hub.
        </p>
        <Link href="/listings">Open treatment mini landings →</Link>
        <div style={{ marginTop: "1rem" }}>
          <SectionCta
            primaryLabel="WhatsApp a treatment question"
            primaryMessage="Hi VSkin, I’m on your treatments page and have a question before I book."
            showQuiz={false}
          />
        </div>
      </section>
    </div>
  );
}
