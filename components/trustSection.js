import React from "react";
import styles from "./trustSection.module.css";
import {
  WHY_TRUST_US,
  STAFF_PLACEHOLDERS,
  CLINIC_MEDIA_PLACEHOLDERS,
  GOOGLE_REVIEWS_EMBED,
  VIDEO_TESTIMONIALS_PLACEHOLDER,
  CLIENT_VOLUME_LINE,
  BOOKING_TRUST,
} from "../lib/trustContent";

export default function TrustSection() {
  return (
    <section className={styles.section} aria-labelledby="why-trust-heading">
      <h2 id="why-trust-heading" className={styles.title}>
        {WHY_TRUST_US.headline}
      </h2>
      <p className={styles.lead}>{WHY_TRUST_US.lead}</p>
      <ul className={styles.bullets}>
        {WHY_TRUST_US.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <h3 className={styles.embedTitle}>Real clinic & team (upload next)</h3>
      <div className={styles.mediaRow}>
        <div className={styles.mediaBox}>{CLINIC_MEDIA_PLACEHOLDERS.interior}</div>
        <div className={styles.mediaBox}>{CLINIC_MEDIA_PLACEHOLDERS.team}</div>
      </div>

      <h3 className={styles.embedTitle}>Therapist bench (credentials go here)</h3>
      <div className={styles.grid}>
        {STAFF_PLACEHOLDERS.map((s) => (
          <div key={s.role} className={styles.card}>
            <p className={styles.cardRole}>{s.role}</p>
            <p className={styles.cardCopy}>{s.copy}</p>
          </div>
        ))}
      </div>

      <div className={styles.embedBox}>
        <h3 className={styles.embedTitle}>{GOOGLE_REVIEWS_EMBED.headline}</h3>
        <p className={styles.embedBody}>{GOOGLE_REVIEWS_EMBED.body}</p>
        <a
          className={styles.embedLink}
          href={GOOGLE_REVIEWS_EMBED.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {GOOGLE_REVIEWS_EMBED.linkLabel}
        </a>
      </div>

      <div className={styles.embedBox}>
        <h3 className={styles.embedTitle}>{VIDEO_TESTIMONIALS_PLACEHOLDER.headline}</h3>
        <p className={styles.embedBody}>{VIDEO_TESTIMONIALS_PLACEHOLDER.body}</p>
      </div>

      <div className={styles.embedBox}>
        <h3 className={styles.embedTitle}>{BOOKING_TRUST.headline}</h3>
        <ul className={styles.bullets}>
          {BOOKING_TRUST.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <p className={styles.statNote}>{CLIENT_VOLUME_LINE}</p>
    </section>
  );
}
