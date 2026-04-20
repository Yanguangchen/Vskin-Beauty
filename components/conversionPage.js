"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./conversionPage.module.css";
import {
  BRAND_SYSTEM,
  CORE_OFFER,
  HERO_VARIANTS,
  MECHANISM,
  OBJECTION_FAQ,
  OFFER_ENGINEERING,
  PROBLEM_AGITATE,
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

  return (
    <div className={styles.wrap}>
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

      <section className={styles.section} aria-labelledby="brand-system">
        <h2 id="brand-system" className={styles.sectionTitle}>
          {BRAND_SYSTEM.name}™ — {BRAND_SYSTEM.tagline}
        </h2>
        <p className={styles.sectionLead}>
          “Needle-free” is not our whole story—it is the delivery. The promise is
          a calmer, more defined, more confident version of your face—guided by one
          dominant plan first, not ten random add-ons.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="problem">
        <h2 id="problem" className={styles.sectionTitle}>
          {PROBLEM_AGITATE.headline}
        </h2>
        <p className={styles.sectionLead}>{PROBLEM_AGITATE.body}</p>
      </section>

      <section className={styles.section} aria-labelledby="core-offer">
        <h2 id="core-offer" className={styles.sectionTitle}>
          {CORE_OFFER.headline}
        </h2>
        <ul className={styles.bullets}>
          {CORE_OFFER.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

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
      </section>

      <section className={styles.section} aria-labelledby="offer">
        <div className={styles.offerBox}>
          <h2 id="offer" className={styles.sectionTitle}>
            {OFFER_ENGINEERING.headline}
          </h2>
          <p className={styles.offerPrice}>{OFFER_ENGINEERING.priceLine}</p>
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
            <a
              className={styles.ctaPrimary}
              href={`${WA}?text=${encodeMsg(
                "Hi VSkin, I want the First Visit: Face Analysis + Trial. What’s the next available slot?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lock my analysis slot
            </a>
            <Link href="/faq" className={styles.ctaSecondary}>
              Read full FAQ
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="proof">
        <h2 id="proof" className={styles.sectionTitle}>
          Proof you can verify today
        </h2>
        <p className={styles.sectionLead}>
          We are building a consent-based before/after gallery. Until those assets
          are live, here are verbatim themes from public-style reviews (your
          carousel uses the same source).
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
          with written consent, plus a live Google Reviews embed. Placeholder
          until your clinic supplies files.
        </div>
      </section>

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
          For device-level detail, see the full{" "}
          <Link href="/faq" style={{ color: "#652d90", fontWeight: 700 }}>
            FAQ page
          </Link>
          .
        </p>
      </section>

      <section className={styles.listingsTeaser} aria-labelledby="more-treatments">
        <h2 id="more-treatments" className={styles.sectionTitle} style={{ color: "#fff" }}>
          Body slimming & skin support
        </h2>
        <p>
          After your face plan is clear, we layer supporting protocols (e.g. fat
          melt, tightening) without blurring your main outcome. Browse by concern
          on the treatments hub.
        </p>
        <Link href="/listings">Open treatments by concern →</Link>
      </section>
    </div>
  );
}
