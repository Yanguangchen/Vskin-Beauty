import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "5%",
          borderRadius: "0.5rem",
          overflow: "hidden",
          background: "#512573",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accordionTabs"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "1rem 5rem",
            textAlign: "center",
            transition: "background-color 0.3s",
            fontSize: "130%",
            background: "#968442",
            color: "white",
            border: "1px solid black",
          }}
        >
          <span
            style={{
              fontWeight: "600",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            {title}
          </span>
          <span
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s",
              marginLeft: "0.5rem",
            }}
          >
            +
          </span>
        </button>
        <div
          style={{
            maxHeight: isOpen ? "1000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          <div style={{ padding: "1.5rem", background: "white" }}>{children}</div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div
      style={{
        maxWidth: "64rem",
        margin: "0 auto",
        padding: "1.5rem",
        borderRadius: "0.75rem",
      }}
    >
      <h1
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Let us bring out the best in you, shine with confidence, and embrace your beauty
      </h1>

      <div>
        <AccordionItem title="Non-Invasive with Long-Lasting Results">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Revolutionary Non-Invasive Treatments with Enduring Benefits
          </h4>
          <p>
            Discover the power of V-Skin technology, a state-of-the-art pneumatic gas-driven system that delivers skin-enhancing solutions deep into the dermis layer without the need for needles. This advanced non-invasive approach minimizes discomfort and requires virtually no downtime, enabling you to maintain your daily routine effortlessly. Experience remarkable transformations with treatments like the V-Skin Nose Lifting procedure, which offers lasting results of 16–18 months, with optimal effects becoming visible around 8–12 months.
          </p>
        </AccordionItem>

        <AccordionItem title="Comprehensive Skin and Body Solutions">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            All-in-One Beauty and Wellness Solutions
          </h4>
          <p>
            V-Skin treatments offer a holistic suite of advanced beauty solutions, tailored to meet your unique needs. From fat-melting and skin-tightening therapies to wrinkle reduction and pigmentation correction, our treatments are designed to sculpt, rejuvenate, and refresh. Whether you're seeking a more defined facial contour, radiant skin, or targeted fat reduction, V-Skin’s personalized approach ensures transformative results that empower you to look and feel your absolute best.
          </p>
        </AccordionItem>

        <AccordionItem title="Affordable and Transparent Pricing">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Premium Care with Honest and Accessible Pricing
          </h4>
          <p>
            At Vskin Beauty & Slimming, we are dedicated to making cutting-edge beauty treatments accessible and affordable. Enjoy a transparent pricing model with no GST, no hidden fees, and absolutely no hard selling. We believe in empowering you with choice and value—experience premium services like our fat melting and lifting treatments starting at just $380 for first-time trials. Our commitment to affordability ensures that everyone can invest in their beauty and well-being with confidence.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default AboutSection;
