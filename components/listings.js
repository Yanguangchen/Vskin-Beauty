import React from "react";
import Link from "next/link";
import styles from "./listings.module.css";
import { CONCERNS } from "../lib/treatmentsData";

const WA = "https://wa.me/6598807382";

function encode(text) {
  return encodeURIComponent(text);
}

function TreatmentMini({ service, concernId }) {
  const wa = `${WA}?text=${encode(
    `Hi VSkin, I'm interested in "${service.name}" (${concernId}). Please advise suitability and slots.`
  )}`;
  return (
    <article id={`treatment-${service.id}`} className={styles.miniLanding}>
      <div className={styles.miniHeader}>
        <h3 className={styles.serviceName}>{service.name}</h3>
        <p className={styles.hookLine}>{service.benefit}</p>
      </div>

      <div className={styles.miniBlock}>
        <h4 className={styles.miniLabel}>This is for you if…</h4>
        <ul className={styles.miniList}>
          {service.forYouIf.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>

      <div className={styles.miniBlock}>
        <h4 className={styles.miniLabel}>What you may notice (realistic timeline)</h4>
        <p className={styles.miniBody}>{service.afterSessions}</p>
        <p className={styles.sessionNote}>{service.sessionNote}</p>
      </div>

      <div className={styles.miniBlock}>
        <h4 className={styles.miniLabel}>Best for</h4>
        <div className={styles.tagRow}>
          {service.bestFor.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {service.sessionExpectations?.length ? (
        <div className={styles.miniBlock}>
          <h4 className={styles.miniLabel}>Session expectations</h4>
          <ol className={styles.timeline}>
            {service.sessionExpectations.map((row) => (
              <li key={row.phase}>
                <strong>{row.phase}:</strong> {row.detail}
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <div className={styles.baPlaceholder} role="note">
        <strong>Before / after:</strong> {service.baPlaceholder}
      </div>

      <p className={styles.serviceNote}>{service.note}</p>

      <div className={styles.miniCta}>
        <a className={styles.miniCtaPrimary} href={wa} target="_blank" rel="noopener noreferrer">
          Check suitability for this treatment
        </a>
        <a className={styles.miniCtaSecondary} href="/#beauty-concierge">
          Run face-type quiz first
        </a>
      </div>
    </article>
  );
}

function Listings() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.kicker}>Treatments — mini landing pages</p>
        <h1 className={styles.title}>Pick your problem. We’ll show the path—not a menu of noise.</h1>
        <p className={styles.lead}>
          Each block below is written like a sales page: who it is for, what to
          expect over time, and how sessions progress. Same needle-free VJet
          standard—different goals. When you are ready, WhatsApp us with one tap.
        </p>
      </header>

      <p className={styles.jumpLabel}>Jump to a concern</p>
      <nav className={styles.jumpRow} aria-label="Treatment concerns">
        {CONCERNS.map((c) => (
          <a key={c.id} className={styles.jumpLink} href={`#concern-${c.id}`}>
            {c.title}
          </a>
        ))}
      </nav>

      {CONCERNS.map((concern) => (
        <section
          key={concern.id}
          id={`concern-${concern.id}`}
          className={styles.concernBlock}
          aria-labelledby={`heading-${concern.id}`}
        >
          <h2 id={`heading-${concern.id}`} className={styles.concernTitle}>
            {concern.title}
          </h2>
          <p className={styles.concernTagline}>{concern.tagline}</p>
          {concern.emotionalHook ? (
            <p className={styles.emotionalHook}>{concern.emotionalHook}</p>
          ) : null}
          <div className={styles.serviceList}>
            {concern.services.map((s) => (
              <TreatmentMini key={s.id} service={s} concernId={concern.id} />
            ))}
          </div>
        </section>
      ))}

      <div className={styles.ctaBand}>
        <p>
          Still deciding? Complete the face-type quiz on the homepage—we’ll
          pre-fill WhatsApp with your goals.
        </p>
        <div className={styles.ctaRow}>
          <a
            className={styles.ctaPrimary}
            href={`${WA}?text=${encode(
              "Hi VSkin, I read your treatments page and want a face analysis to know what fits me."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get your face analysis now
          </a>
          <Link className={styles.ctaSecondary} href="/#beauty-concierge">
            Start face-type quiz
          </Link>
        </div>
      </div>

      <p className={styles.disclaimer}>
        Information on this page is for general education and is not medical
        advice. Results vary by individual; suitability is confirmed in person
        during consultation.
      </p>
    </div>
  );
}

export default Listings;
