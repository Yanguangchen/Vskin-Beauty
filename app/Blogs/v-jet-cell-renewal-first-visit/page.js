import Link from "next/link";

export const metadata = {
  title: "V Jet Cell Renewal: A First Visit in Jurong East | VSkin Beauty",
  description:
    "Published first-trial prices for V Jet Cell Renewal at VSkin Beauty in Jurong East, and what to confirm before you book 0.5ml or 1ml.",
  alternates: {
    canonical: "/Blogs/v-jet-cell-renewal-first-visit",
  },
};

export default function CellRenewalFirstVisitPage() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "2rem 1.25rem 4rem", lineHeight: 1.7 }}>
      <nav aria-label="Breadcrumb" style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>
        <Link href="/">Home</Link>
        {" / "}
        <Link href="/Blogs">Why us</Link>
        {" / "}
        <span>Cell renewal</span>
      </nav>
      <p style={{ letterSpacing: "0.04em", textTransform: "uppercase", fontSize: "0.8rem" }}>
        Treatment guide · 25 October 2026
      </p>
      <h1>V Jet Cell Renewal: a first visit in Jurong East</h1>
      <p>
        VSkin Beauty &amp; Slimming is at Blk 350 Jurong East Avenue 1,
        #01-1239, Level 2. V Jet Cell Renewal is listed as its own menu, separate
        from collagen, lifting, and fat-melt combos. A first visit is priced
        as a trial, not as the full package.
      </p>
      <h2>The published first-trial prices</h2>
      <ul>
        <li>Cell Renewal, 0.5ml, any area: $388 first trial.</li>
        <li>Cell Renewal, 1ml, face or neck: $500 first trial.</li>
        <li>Ala carte after that: $688 for 0.5ml and $800 for 1ml.</li>
        <li>Packages: $1,500 for 3ml, $3,000 for 7ml, and $3,800 for 9ml.</li>
      </ul>
      <p>
        Those figures are the ones on the price list. A trial is for a new
        client. It is not a standing discount on every later visit. If you
        are choosing between 0.5ml and 1ml, the 1ml trial is specified for
        face or neck. Say which area you mean when you book so the volume
        matches the menu line.
      </p>
      <h2>What to sort out before you go</h2>
      <p>
        Cell renewal is a cosmetic V Jet treatment on the salon menu. It is
        not described on this site as surgery. Tell the studio about recent
        procedures on the same area, broken skin, and anything a doctor has
        told you to avoid. The price list also has lifting trials from $88
        for the face and combination trials such as SB + PDRN from $280.
        Those are different appointments. You do not need one in order to
        book the other.
      </p>
      <p>
        Read the full menu on the <Link href="/listings">price list</Link>,
        the studio notes on <Link href="/Blogs">why clients book VSkin</Link>,
        and the <Link href="/contact">contact page</Link> for the Jurong East
        outlet. The <Link href="/faq">FAQ</Link> covers the questions the
        studio already answers in public.
      </p>
    </main>
  );
}
