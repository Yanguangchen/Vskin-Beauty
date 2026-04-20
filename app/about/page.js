"use client";

import React, { useState } from "react";

const badges = [
  { label: "FDA Compliant", icon: "✓" },
  { label: "HSA Compliant", icon: "✓" },
  { label: "Needle-Free", icon: "✓" },
  { label: "Non-Invasive", icon: "✓" },
  { label: "No Surgery", icon: "✓" },
  { label: "No Downtime", icon: "✓" },
];

const pillars = [
  {
    title: "Needle-free depth, less anxiety",
    description:
      "The VJet system is a pneumatic, gas-driven delivery mechanism that injects beauty serums directly into the skin's dermis layer — without a single needle. No punctures, no wounds, no risk of infection from sharp instruments.",
  },
  {
    title: "Walk in, walk out—no surgery",
    description:
      "Unlike surgical facelifts or invasive procedures, VSkin treatments work entirely on the surface and sub-surface of the skin. There is no cutting, no anaesthesia, and no recovery room. You walk in and walk out feeling refreshed.",
  },
  {
    title: "Safety you can feel good about",
    description:
      "Surgical procedures carry inherent risks — complications, scarring, prolonged healing, and anaesthesia reactions. With VJet technology, none of these apply. Our treatments are designed to be as safe as they are effective.",
  },
  {
    title: "Standards you can look up",
    description:
      "VSkin's technology meets the rigorous standards set by both the US Food & Drug Administration (FDA) and Singapore's Health Sciences Authority (HSA). These approvals are not cosmetic — they are official certifications of safety and efficacy.",
  },
  {
    title: "Goals you can see in the mirror",
    description:
      "Our treatments deliver measurable outcomes: fat reduction, skin tightening, wrinkle smoothing, and serum absorption — all without the risks associated with needles or surgery. Results you can see, delivered safely.",
  },
  {
    title: "Sensitive skin is not an afterthought",
    description:
      "VJet's gas-driven mechanism is gentle enough for sensitive skin yet powerful enough to deliver serums deep into the dermis. Suitable for all skin tones and types, with no contraindications from needles or surgical materials.",
  },
];

const PillarCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: isHovered
          ? "linear-gradient(135deg, #7a3ba3 0%, #4d2870 100%)"
          : "linear-gradient(135deg, #652D90 0%, #40215C 100%)",
        borderRadius: "1.5rem",
        padding: "2.5rem",
        color: "#fff",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: isHovered
          ? "20px 20px 40px rgba(0,0,0,0.3), -20px -20px 40px rgba(255,255,255,0.15), 0 0 30px rgba(101,45,144,0.5)"
          : "15px 15px 30px rgba(0,0,0,0.25), -15px -15px 30px rgba(255,255,255,0.1), inset -3px -3px 6px rgba(0,0,0,0.2), inset 3px 3px 6px rgba(255,255,255,0.1), 0 0 20px rgba(101,45,144,0.3)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shimmer overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          animation: isHovered ? "shimmer 2s infinite" : "none",
          pointerEvents: "none",
          borderRadius: "1.5rem",
        }}
      />
      {/* Corner dots */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.3)",
          boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.5)",
        }}
      />
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1rem",
          fontFamily: "'Quicksand', sans-serif",
          letterSpacing: "0.5px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.7",
          opacity: 0.92,
          fontFamily: "'Quicksand', sans-serif",
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default function AboutPage() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .about-hero { animation: fadeInUp 0.7s ease forwards; }
        .about-grid { animation: fadeInUp 0.7s ease 0.2s forwards; opacity: 0; }
        .about-badges { animation: fadeInUp 0.7s ease 0.1s forwards; opacity: 0; }
      `}</style>

      <main
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg, #f5f0fa 0%, #f0f0f0 50%, #fdf8ff 100%)",
          padding: "4rem 1.5rem 6rem",
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        {/* Hero */}
        <div
          className="about-hero"
          style={{
            maxWidth: "800px",
            margin: "0 auto 4rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#652D90",
              marginBottom: "1rem",
            }}
          >
            About VSkin Beauty
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            Needle-free beauty that still{" "}
            <span style={{ color: "#652D90" }}>feels premium</span>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "#444",
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            VSkin Beauty & Slimming uses VJet technology — an officially approved,
            pneumatic serum delivery system that achieves premium aesthetic results
            with absolutely no needles, no surgery, and no downtime.
          </p>
        </div>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto 3rem",
            padding: "2rem 1.75rem",
            borderRadius: "1.25rem",
            background: "#fff",
            border: "1px solid rgba(101,45,144,0.12)",
            boxShadow: "0 12px 40px rgba(15,23,42,0.06)",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: "800",
              color: "#1a1a1a",
              marginTop: 0,
              marginBottom: "0.75rem",
            }}
          >
            Why this clinic exists
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#444",
              margin: "0 0 1rem",
            }}
          >
            This business exists because too many beauty journeys start with fear:
            fear of needles, fear of hard-selling, fear of looking &ldquo;not like
            yourself.&rdquo; We built around non-invasive, needle-free protocols so
            you can chase sharper contours and fresher skin without defaulting to
            surgery—or pressure to buy ten things you never asked for.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#444",
              margin: 0,
            }}
          >
            <strong>Replace this block with your real founder story</strong> (name,
            years in aesthetics, why Jurong, what you refuse to compromise on).
            Specific beats slick every time—and it is what stops &ldquo;random
            website&rdquo; skepticism.
          </p>
        </div>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto 3rem",
            padding: "2rem 1.75rem",
            borderRadius: "1.25rem",
            background: "linear-gradient(135deg, #652D90 0%, #40215C 100%)",
            color: "#fff",
            textAlign: "center",
            boxShadow: "0 16px 40px rgba(101,45,144,0.25)",
          }}
        >
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: "800",
              marginTop: 0,
              marginBottom: "0.75rem",
            }}
          >
            Mission
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", margin: 0, opacity: 0.95 }}>
            Deliver honest, needle-free aesthetic outcomes with compliant
            technology—where clarity comes before commission, and where your face
            keeps its character.
          </p>
        </div>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto 3rem",
            padding: "2rem 1.75rem",
            borderRadius: "1.25rem",
            background: "#fff",
            border: "1px solid rgba(101,45,144,0.12)",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: "800",
              color: "#1a1a1a",
              marginTop: 0,
              marginBottom: "0.75rem",
            }}
          >
            Behind the scenes (add proof as you have it)
          </h2>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.2rem",
              color: "#444",
              lineHeight: "1.75",
              fontSize: "1rem",
            }}
          >
            <li>
              <strong>Technology sourcing:</strong> VJet / pneumatic delivery vetted
              for FDA &amp; HSA compliance—document what you display on-site.
            </li>
            <li>
              <strong>Training:</strong> list certificates, brand trainings, and
              years of hands-on experience per lead therapist (only verifiable
              facts).
            </li>
            <li>
              <strong>Real media:</strong> clinic interior, treatment room, team
              headshots—replace template feel with Jurong-specific proof.
            </li>
          </ul>
        </div>

        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto 3.5rem",
            padding: "2rem 1.75rem",
            borderRadius: "1.25rem",
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(101,45,144,0.12)",
            boxShadow: "0 12px 40px rgba(15,23,42,0.06)",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#1a1a1a",
              marginTop: 0,
              marginBottom: "0.75rem",
            }}
          >
            Why we focus on these treatments
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.75",
              color: "#444",
              margin: 0,
            }}
          >
            We are not trying to stock every gadget on the market. We built VSkin
            around needle-free, non-invasive protocols that answer real
            Singaporean concerns—contour, firmness, reactive skin, and busy
            schedules—so you get curated expertise instead of a generic menu.
            When something does not fit your goals or health profile, we say so.
          </p>
        </div>

        {/* Compliance badges */}
        <div
          className="about-badges"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            maxWidth: "700px",
            margin: "0 auto 5rem",
          }}
        >
          {badges.map((b) => (
            <div
              key={b.label}
              style={{
                background: "linear-gradient(135deg, #652D90 0%, #40215C 100%)",
                color: "#fff",
                borderRadius: "100px",
                padding: "0.6rem 1.4rem",
                fontSize: "0.95rem",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow:
                  "8px 8px 16px rgba(0,0,0,0.15), -4px -4px 8px rgba(255,255,255,0.6)",
              }}
            >
              <span
                style={{
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: "900",
                }}
              >
                {b.icon}
              </span>
              {b.label}
            </div>
          ))}
        </div>

        {/* Pillars grid */}
        <div
          className="about-grid"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {pillars.map((p) => (
            <PillarCard key={p.title} title={p.title} description={p.description} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "5rem",
            animation: "fadeInUp 0.7s ease 0.4s forwards",
            opacity: 0,
          }}
        >
          <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "1.5rem" }}>
            Experience the difference at our Jurong East outlet—or message us first
            with your questions.
          </p>
          <a
            href="https://wa.me/6598807382?text=Hi%20VSkin%2C%20I%20read%20your%20About%20page%20and%20want%20to%20book%20a%20face%20analysis%20%2F%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #652D90 0%, #40215C 100%)",
              color: "#fff",
              padding: "1rem 2.5rem",
              borderRadius: "100px",
              fontSize: "1rem",
              fontWeight: "700",
              textDecoration: "none",
              boxShadow:
                "8px 8px 20px rgba(101,45,144,0.35), -4px -4px 10px rgba(255,255,255,0.6)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            WhatsApp: Book face analysis
          </a>
        </div>
      </main>
    </>
  );
}
