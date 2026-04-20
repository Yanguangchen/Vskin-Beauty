import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTreatmentSlugs, getTreatmentBySlug } from "../../../lib/treatmentHelpers";
import { getBookingUrl, hasExternalBookingCalendar } from "../../../lib/booking";
import DowntimeComparison from "../../../components/downtimeComparison";
import styles from "./treatmentPage.module.css";

export function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getTreatmentBySlug(slug);
  if (!data) return { title: "Treatment | VSkin" };
  return {
    title: `${data.service.name} | VSkin Beauty`,
    description: data.service.benefit,
  };
}

export default async function TreatmentPage({ params }) {
  const { slug } = await params;
  const data = getTreatmentBySlug(slug);
  if (!data) notFound();

  const { concern, service } = data;
  const book = getBookingUrl();
  const waMsg = `Hi VSkin, I want to book "${service.name}" (${concern.title}). Please confirm suitability and slots.`;
  const wa = `https://wa.me/6598807382?text=${encodeURIComponent(waMsg)}`;

  return (
    <main className={styles.main}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span aria-hidden> / </span>
        <Link href="/listings">Treatments</Link>
        <span aria-hidden> / </span>
        <Link href={`/listings#concern-${concern.id}`}>{concern.title}</Link>
      </nav>

      <header className={styles.hero}>
        <p className={styles.kicker}>{concern.title}</p>
        <h1 className={styles.title}>{service.name}</h1>
        <p className={styles.lead}>{service.benefit}</p>
        <div className={styles.ctaRow}>
          <a className={styles.btnPrimary} href={wa} target="_blank" rel="noopener noreferrer">
            Book this treatment (WhatsApp)
          </a>
          {hasExternalBookingCalendar() ? (
            <a className={styles.btnGhost} href={book} target="_blank" rel="noopener noreferrer">
              Open booking calendar
            </a>
          ) : null}
          <Link className={styles.btnGhost} href={`/listings#treatment-${service.id}`}>
            Back to overview
          </Link>
        </div>
      </header>

      <section className={styles.card}>
        <h2 className={styles.h2}>Quick facts</h2>
        <dl className={styles.dl}>
          <div>
            <dt>Typical visit length</dt>
            <dd>{service.durationRange ?? "Confirm at booking—varies by protocol."}</dd>
          </div>
          <div>
            <dt>Downtime (needle-free lane)</dt>
            <dd>{service.downtimeVskin ?? "Discussed at your analysis."}</dd>
          </div>
          <div>
            <dt>Starting from</dt>
            <dd>{service.pricingFrom ?? "Quoted after analysis."}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.card}>
        <h2 className={styles.h2}>This is for you if…</h2>
        <ul className={styles.list}>
          {service.forYouIf.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className={styles.card}>
        <h2 className={styles.h2}>What you may notice over time</h2>
        <p className={styles.p}>{service.afterSessions}</p>
        <p className={styles.note}>{service.sessionNote}</p>
      </section>

      <section className={styles.card}>
        <h2 className={styles.h2}>Session expectations</h2>
        <ol className={styles.ol}>
          {(service.sessionExpectations ?? []).map((row) => (
            <li key={row.phase}>
              <strong>{row.phase}:</strong> {row.detail}
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.card}>
        <h2 className={styles.h2}>Downtime vs typical aesthetic options</h2>
        <DowntimeComparison />
      </section>

      <section className={styles.card}>
        <h2 className={styles.h2}>Before &amp; after</h2>
        <p className={styles.p}>{service.baPlaceholder}</p>
      </section>

      <p className={styles.disclaimer}>
        Educational information only—not medical advice. Individual results and
        downtime vary; suitability is confirmed in person.
      </p>
    </main>
  );
}
