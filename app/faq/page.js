"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Will it work for me?",
    answer:
      "Suitability depends on your goals, skin state, and health history. During your consultation we explain what needle-free protocols can realistically do—and what they cannot. If we are not the right fit, we will say so.",
  },
  {
    question: "Is this better than Botox or fillers?",
    answer:
      "Different tools for different jobs. Injections can be excellent for specific wrinkles or volume loss. Our focus is needle-free facial sculpting and skin support with VJet—ideal if you want refinement without going straight to syringes, or if you want to complement (not replace) other treatments after professional advice.",
  },
  {
    question: "How long do results last?",
    answer:
      "It depends on the programme (fat melt vs collagen support vs tightening), your lifestyle, and maintenance. We give honest ranges during your consultation—there is no honest one-number answer for every face.",
  },
  {
    question: "Why should I trust a smaller clinic over a big chain?",
    answer:
      "We compete on clarity: compliant technology, transparent first-visit pricing, and therapists who document what to expect between sessions. Read our client reviews and ask every pricing question twice—we encourage it.",
  },
  {
    question: "Is the VJet treatment painful?",
    answer:
      "No. The VJet system is entirely needle-free and non-invasive. Clients typically describe the sensation as a light pressure or cool mist — similar to a gentle spray on the skin. There is no pain, no puncturing, and no discomfort associated with needles.",
  },
  {
    question: "Is VSkin's technology safe?",
    answer:
      "Absolutely. Our VJet technology is both FDA (US Food and Drug Administration) and HSA (Singapore Health Sciences Authority) compliant. These are rigorous scientific standards that verify both the safety and the efficacy of our treatments.",
  },
  {
    question: "Do I need surgery or anaesthesia?",
    answer:
      "Never. All VSkin treatments are non-surgical. We do not use any cutting, stitching, or anaesthesia. You simply arrive for your appointment, receive your treatment, and walk out — no recovery room required.",
  },
  {
    question: "Is there any downtime after treatment?",
    answer:
      "There is zero downtime. Because our treatments are non-invasive and use no needles, there is no wound healing, no swelling that requires rest, and no need to take time off. Most clients head straight back to their daily routine.",
  },
  {
    question: "How does the VJet technology work?",
    answer:
      "VJet is a pneumatic (gas-driven) delivery system that propels beauty serums through the skin using controlled pressure — bypassing the need for a needle entirely. The serum is absorbed directly into the dermis layer, achieving results comparable to needle-based treatments without any of the associated risks.",
  },
  {
    question: "What treatments does VSkin offer?",
    answer:
      "We offer a comprehensive range of aesthetic and slimming treatments including fat-melting, skin-tightening, wrinkle reduction, brightening, hydration, and body contouring. All delivered through our signature needle-free VJet system.",
  },
  {
    question: "Is it suitable for sensitive skin?",
    answer:
      "Yes. The gas-driven mechanism is gentle and does not involve any physical puncturing of the skin. This makes it well-suited for clients with sensitive skin, and there are no contraindications from needle materials or surgical instruments.",
  },
  {
    question: "How much does a first-time trial cost?",
    answer:
      "First-time trial sessions start from $158. We believe premium, scientifically safe aesthetic care should be accessible. There are no hidden fees — pricing is fully transparent before you commit to any treatment.",
  },
  {
    question: "Where is VSkin located?",
    answer:
      "We are located at Blk 350 Jurong East Ave 1, #01-1239, Singapore 600350. You can reach us at 9880 7382, or use our contact form to book an appointment.",
  },
  {
    question: "How many sessions do I need to see results?",
    answer:
      "Results vary by treatment type and individual. Many clients notice visible improvements after a single session. For optimal and lasting results, our therapists will recommend a personalised course of treatments during your consultation.",
  },
];

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        borderRadius: "1.25rem",
        overflow: "hidden",
        marginBottom: "1rem",
        background: isOpen
          ? "linear-gradient(135deg, #652D90 0%, #40215C 100%)"
          : isHovered
          ? "linear-gradient(135deg, #f8f4fc 0%, #f0e8f8 100%)"
          : "#fff",
        boxShadow: isOpen
          ? "12px 12px 24px rgba(0,0,0,0.2), -8px -8px 16px rgba(255,255,255,0.1), 0 0 20px rgba(101,45,144,0.3)"
          : "8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)",
        transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transform: isOpen ? "scale(1.01)" : "scale(1)",
        border: isOpen
          ? "1px solid rgba(255,255,255,0.15)"
          : "1px solid rgba(101,45,144,0.08)",
        animation: `fadeInUp 0.5s ease ${index * 0.05}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "1.5rem 2rem",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
        aria-expanded={isOpen}
      >
        <span
          style={{
            fontSize: "1.05rem",
            fontWeight: "700",
            fontFamily: "'Quicksand', sans-serif",
            color: isOpen ? "#fff" : "#1a1a1a",
            transition: "color 0.3s ease",
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: isOpen
              ? "rgba(255,255,255,0.2)"
              : "linear-gradient(135deg, #652D90 0%, #40215C 100%)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
            fontWeight: "300",
            transition: "all 0.35s ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            boxShadow: isOpen
              ? "none"
              : "4px 4px 8px rgba(0,0,0,0.2), -2px -2px 4px rgba(255,255,255,0.5)",
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <p
          style={{
            padding: "0 2rem 1.75rem",
            margin: 0,
            fontSize: "1rem",
            lineHeight: "1.75",
            color: isOpen ? "rgba(255,255,255,0.9)" : "#555",
            fontFamily: "'Quicksand', sans-serif",
            transition: "color 0.3s ease",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQPage() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <main
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg, #f5f0fa 0%, #f0f0f0 50%, #fdf8ff 100%)",
          padding: "4rem 1.5rem 6rem",
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto 3.5rem",
            textAlign: "center",
            animation: "fadeInUp 0.6s ease forwards",
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
            Frequently Asked Questions
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: "800",
              color: "#1a1a1a",
              lineHeight: 1.25,
              marginBottom: "1.25rem",
            }}
          >
            Everything You Need to Know
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.75",
              color: "#555",
            }}
          >
            Your questions about our needle-free, non-invasive treatments —
            answered clearly.
          </p>
        </div>

        {/* FAQ list */}
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
          }}
        >
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              index={i}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "4rem",
            animation: "fadeInUp 0.6s ease 0.3s both",
          }}
        >
          <p style={{ fontSize: "1rem", color: "#666", marginBottom: "1.25rem" }}>
            Still have questions? We&apos;re happy to help.
          </p>
          <a
            href="/contact"
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
              transition: "transform 0.3s ease",
            }}
          >
            Contact Us
          </a>
        </div>
      </main>
    </>
  );
}
