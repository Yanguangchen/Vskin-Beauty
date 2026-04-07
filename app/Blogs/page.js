import TodaysArticle from "../todays-article/page";

export const metadata = {
  title: "Why Us – VSkin Beauty & Slimming",
  description:
    "Learn why VSkin Beauty & Slimming is Singapore's leading non-invasive beauty and slimming clinic powered by VJet Technology.",
};

const treatments = [
  {
    emoji: "🔥",
    title: "VSkin Fat Melt",
    subtitle: "Say Goodbye to Stubborn Fat",
    body: "Struggling with belly fat, love handles, or arm fat? Our VSkin Fat Melt treatment uses high-tech pneumatic gas-driven technology to break down fat cells, stimulate lymphatic drainage, and tighten skin — all in a relaxing, pain-free session.",
    note: "Results can be long-lasting. Maintaining a healthy diet and active lifestyle maximises your outcome.",
  },
  {
    emoji: "✨",
    title: "VSkin Nose Lifting Collagen",
    subtitle: "Non-Surgical Nose Enhancement",
    body: "Want a sharper, more defined nose without surgery? Our VSkin Nose Lifting Collagen treatment stimulates collagen growth in the nasal bridge and tip, providing a natural lift and contour that lasts 16–18 months, with peak results between 8–12 months.",
    note: null,
  },
  {
    emoji: "💧",
    title: "Korean Aqua Peel Facial",
    subtitle: "Achieve Glass Skin",
    body: "Inspired by Korean skincare, our Aqua Peel Facial deeply hydrates, exfoliates, and revitalises your skin. Using a blend of hydration boosters, antioxidants, and gentle exfoliants, it removes dead skin cells and enhances moisture retention for a healthy, youthful glow.",
    note: null,
  },
];

const reasons = [
  "100% non-invasive and painless treatments",
  "No surgery, no needles, no downtime — resume activities immediately",
  "Scientifically proven fat burning and skin rejuvenation technology",
  "FDA and HSA compliant — clinically verified safety",
  "No hidden fees, no GST, and affordable pricing",
  "Exclusive 20% discounts for students & seniors",
];

export default function BlogsPage() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .blog-hero { animation: fadeInUp 0.6s ease forwards; }
        .blog-reasons { animation: fadeInUp 0.6s ease 0.1s both; }
        .blog-treatments { animation: fadeInUp 0.6s ease 0.2s both; }
        .treatment-card {
          background: linear-gradient(135deg, #652D90 0%, #40215C 100%);
          border-radius: 1.5rem;
          padding: 2rem 2.5rem;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 15px 15px 30px rgba(0,0,0,0.2), -10px -10px 20px rgba(255,255,255,0.08), 0 0 20px rgba(101,45,144,0.25);
          transition: transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.4s ease;
        }
        .treatment-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 20px 20px 40px rgba(0,0,0,0.3), -15px -15px 30px rgba(255,255,255,0.12), 0 0 30px rgba(101,45,144,0.45);
        }
        .reason-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: #fff;
          border-radius: 0.75rem;
          box-shadow: 6px 6px 12px rgba(0,0,0,0.06), -6px -6px 12px rgba(255,255,255,0.9);
          font-family: 'Quicksand', sans-serif;
          font-size: 1rem;
          color: #333;
          line-height: 1.5;
        }
        .reason-dot {
          flex-shrink: 0;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #652D90, #40215C);
          margin-top: 5px;
          box-shadow: 2px 2px 6px rgba(101,45,144,0.4);
        }
        .cta-btn {
          display: inline-block;
          background: linear-gradient(135deg, #652D90 0%, #40215C 100%);
          color: #fff;
          padding: 1rem 2.5rem;
          border-radius: 100px;
          font-size: 1.05rem;
          font-weight: 700;
          text-decoration: none;
          font-family: 'Quicksand', sans-serif;
          box-shadow: 8px 8px 20px rgba(101,45,144,0.35), -4px -4px 10px rgba(255,255,255,0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 12px 12px 28px rgba(101,45,144,0.45), -4px -4px 10px rgba(255,255,255,0.5);
        }
      `}</style>

      <TodaysArticle />

      <main style={{
        background: "linear-gradient(160deg, #f5f0fa 0%, #f0f0f0 50%, #fdf8ff 100%)",
        padding: "4rem 1.5rem 6rem",
        fontFamily: "'Quicksand', sans-serif",
      }}>

        {/* Hero */}
        <div className="blog-hero" style={{ maxWidth: "780px", margin: "0 auto 4rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.85rem", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase", color: "#652D90", marginBottom: "1rem" }}>
            Why Choose Us
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: "800", color: "#1a1a1a", lineHeight: 1.25, marginBottom: "1.5rem" }}>
            The Future of Non-Invasive Beauty & Slimming
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
            At <strong>VSkin Beauty and Slimming</strong>, we specialise in cutting-edge,
            painless treatments powered by <strong>VSkin Technology</strong> — an advanced
            pneumatic system designed to melt fat, tighten skin, and enhance natural beauty
            without surgery, needles, or downtime.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="blog-reasons" style={{ maxWidth: "860px", margin: "0 auto 5rem" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: "800", color: "#1a1a1a", marginBottom: "2rem" }}>
            Why VSkin?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {reasons.map((r, i) => (
              <div key={i} className="reason-item">
                <div className="reason-dot" />
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Treatments */}
        <div className="blog-treatments" style={{ maxWidth: "1050px", margin: "0 auto 5rem" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: "800", color: "#1a1a1a", marginBottom: "2rem" }}>
            Our Signature Treatments
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {treatments.map((t) => (
              <div key={t.title} className="treatment-card">
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{t.emoji}</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.25rem", letterSpacing: "0.3px" }}>
                  {t.title}
                </h3>
                <p style={{ fontSize: "0.85rem", fontWeight: "600", opacity: 0.7, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {t.subtitle}
                </p>
                <p style={{ fontSize: "1rem", lineHeight: "1.7", opacity: 0.92 }}>{t.body}</p>
                {t.note && (
                  <p style={{ fontSize: "0.9rem", fontStyle: "italic", opacity: 0.75, marginTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "1rem" }}>
                    {t.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "1.5rem" }}>
            Ready to start your transformation?
          </p>
          <a href="/contact" className="cta-btn">
            Book Your Appointment
          </a>
        </div>

      </main>
    </>
  );
}
