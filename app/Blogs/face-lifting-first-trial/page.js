import Link from "next/link";

export const metadata = {
  title: "Face Lifting First Trial | VSkin Beauty",
  description:
    "The published face lifting first trial is $88 at VSkin Beauty in Jurong East. Bust and butt lifting first trial is $388.",
  alternates: {
    canonical: "/Blogs/face-lifting-first-trial",
  },
};

export default function FaceLiftingTrialPage() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "2rem 1.25rem 4rem", lineHeight: 1.7 }}>
      <nav aria-label="Breadcrumb" style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>
        <Link href="/">Home</Link>
        {" / "}
        <Link href="/Blogs">Why us</Link>
        {" / "}
        <span>Face lifting trial</span>
      </nav>
      <p style={{ letterSpacing: "0.04em", textTransform: "uppercase", fontSize: "0.8rem" }}>
        Treatment guide · 26 October 2026
      </p>
      <h1>Face lifting: the published first trial</h1>
      <p>
        VSkin Beauty &amp; Slimming is at Blk 350 Jurong East Avenue 1,
        #01-1239, Level 2. Face lifting and bust or butt lifting sit on the
        lifting menu. They are not the cell renewal lines.
      </p>
      <h2>First-trial prices on the menu</h2>
      <ul>
        <li>Face lifting first trial: $88.</li>
        <li>Bust / butt lifting first trial: $388.</li>
      </ul>
      <p>
        A face trial and a body trial are different bookings and different
        prices. Name the area when you message. If you want both, ask for two
        slots rather than assuming one trial covers the other.
      </p>
      <h2>Cell renewal is a separate menu</h2>
      <p>
        V Jet Cell Renewal has its own first-trial prices, by millilitre. Those
        figures are in the{" "}
        <Link href="/Blogs/v-jet-cell-renewal-first-visit">cell renewal guide</Link>.
        Booking a $88 face lifting trial does not include a cell renewal vial,
        and a cell renewal trial does not include the lifting trial.
      </p>
      <h2>What to confirm before you book</h2>
      <ul>
        <li>That this is your first lifting trial for that area.</li>
        <li>Whether the visit is face, or bust / butt.</li>
        <li>Any treatment you were told to avoid on the skin beforehand.</li>
      </ul>
      <p>
        The price list is the source for later ala carte and package lines.
        This note only states the two first-trial prices published for lifting.
      </p>
      <p>
        See the <Link href="/Blogs">studio notes</Link> or the cell renewal
        guide if you are comparing menus before a Jurong East visit.
      </p>
    </main>
  );
}
