"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./beautyConcierge.module.css";
import { CONCERNS, STAFF_PICKS, concernFromAreaIds } from "../lib/treatmentsData";
import { FUNNEL_STEPS, buildWhatsAppBody } from "../lib/quizFunnel";

const WA = "https://wa.me/6598807382";

function concernById(id) {
  return CONCERNS.find((c) => c.id === id) ?? CONCERNS.find((c) => c.id === "first-visit");
}

export default function BeautyConcierge() {
  const [stepIndex, setStepIndex] = useState(0);
  const [shapeId, setShapeId] = useState(null);
  const [areaIds, setAreaIds] = useState([]);
  const [budgetId, setBudgetId] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const step = FUNNEL_STEPS[stepIndex];
  const isLast = stepIndex >= FUNNEL_STEPS.length - 1;

  const suggestedConcern = useMemo(
    () => concernFromAreaIds(areaIds),
    [areaIds]
  );
  const concern = concernById(suggestedConcern);

  const toggleArea = (id) => {
    setAreaIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= (step.max ?? 3)) return [...prev.slice(1), id];
      return [...prev, id];
    });
  };

  const waHref = useMemo(() => {
    const body = buildWhatsAppBody({ shapeId, areaIds, budgetId, name, phone });
    return `${WA}?text=${encodeURIComponent(body)}`;
  }, [shapeId, areaIds, budgetId, name, phone]);

  const reset = () => {
    setStepIndex(0);
    setShapeId(null);
    setAreaIds([]);
    setBudgetId(null);
    setName("");
    setPhone("");
  };

  const canContinue =
    step.id === "shape"
      ? Boolean(shapeId)
      : step.id === "areas"
        ? areaIds.length > 0
        : step.id === "budget"
          ? Boolean(budgetId)
          : true;

  return (
    <section
      id="beauty-concierge"
      className={styles.section}
      aria-labelledby="concierge-heading"
    >
      <p className={styles.kicker}>Pre-qualification funnel</p>
      <h2 id="concierge-heading" className={styles.title}>
        What’s your face shape type? (60 seconds)
      </h2>
      <p className={styles.subtitle}>
        Answer four quick steps—we pack your answers into one WhatsApp message so
        our Jurong team knows your goals, budget mindset, and priority zones before
        you even walk in. No account. No spam.
      </p>

      <div className={styles.quizCard}>
        <p className={styles.progress} aria-live="polite">
          Step {stepIndex + 1} of {FUNNEL_STEPS.length}: {step.title}
        </p>
        {step.subtitle ? <p className={styles.stepSubtitle}>{step.subtitle}</p> : null}

        {step.type === "single" && (
          <div className={styles.options} role="list">
            {step.options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={styles.optionBtn}
                onClick={() => {
                  if (step.id === "shape") setShapeId(opt.id);
                  if (step.id === "budget") setBudgetId(opt.id);
                }}
                aria-pressed={
                  step.id === "shape"
                    ? shapeId === opt.id
                    : budgetId === opt.id
                }
                style={{
                  borderColor:
                    (step.id === "shape" && shapeId === opt.id) ||
                    (step.id === "budget" && budgetId === opt.id)
                      ? "rgba(101, 45, 144, 0.55)"
                      : undefined,
                }}
              >
                <span className={styles.optionLabel}>{opt.label}</span>
                {opt.hint ? <span className={styles.optionHint}>{opt.hint}</span> : null}
              </button>
            ))}
          </div>
        )}

        {step.type === "multi" && (
          <div className={styles.options} role="list">
            <p className={styles.multiHint}>Select up to {step.max}.</p>
            {step.options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={styles.optionBtn}
                onClick={() => toggleArea(opt.id)}
                aria-pressed={areaIds.includes(opt.id)}
                style={{
                  borderColor: areaIds.includes(opt.id)
                    ? "rgba(101, 45, 144, 0.55)"
                    : undefined,
                }}
              >
                <span className={styles.optionLabel}>{opt.label}</span>
              </button>
            ))}
          </div>
        )}

        {step.type === "contact" && (
          <div className={styles.contactFields}>
            <label className={styles.label}>
              Name (optional)
              <input
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                placeholder="First name is enough"
              />
            </label>
            <label className={styles.label}>
              Phone (optional)
              <input
                className={styles.input}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                placeholder="+65 …"
              />
            </label>
            <div className={styles.previewBox}>
              <p className={styles.previewTitle}>Suggested treatment hub</p>
              <p className={styles.previewText}>
                Based on your zones: <strong>{concern.title}</strong> —{" "}
                {concern.tagline}
              </p>
              <Link href={`/listings#concern-${concern.id}`} className={styles.pickLink}>
                Preview treatments for this track →
              </Link>
            </div>
          </div>
        )}

        <div className={styles.navRow}>
          {stepIndex > 0 ? (
            <button type="button" className={styles.backBtn} onClick={() => setStepIndex((i) => i - 1)}>
              Back
            </button>
          ) : (
            <span />
          )}
          {!isLast ? (
            <button
              type="button"
              className={styles.nextBtn}
              disabled={!canContinue}
              onClick={() => setStepIndex((i) => i + 1)}
            >
              Continue
            </button>
          ) : (
            <a className={styles.nextBtnLink} href={waHref} target="_blank" rel="noopener noreferrer">
              Send to WhatsApp & book
            </a>
          )}
        </div>

        {isLast ? (
          <p className={styles.helper}>
            Opens WhatsApp with your answers pre-filled. You can edit before sending.
          </p>
        ) : null}

        <button type="button" className={styles.resetBtn} onClick={reset}>
          Start over
        </button>
      </div>

      <h3 className={styles.picksTitle}>Staff picks — where clients start</h3>
      <div className={styles.picksGrid}>
        {STAFF_PICKS.map((pick) => (
          <article key={pick.title} className={styles.pickCard}>
            <h3>{pick.title}</h3>
            <p>{pick.benefit}</p>
            <Link href={`/listings#concern-${pick.concernId}`} className={styles.pickLink}>
              See this track →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
