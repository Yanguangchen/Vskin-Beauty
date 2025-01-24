import React, { useState } from "react";

const Card = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 style={styles.cardTitle}>{title}</h2>
      <p style={styles.cardDescription}>{description}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.sectionTitle}>
        Let us bring out the best in you, shine with confidence, and embrace
        your beauty
      </h1>

      {/* 3 cards laid out side by side in a responsive grid */}
      <div style={styles.grid}>
        <Card
          title="Non-Invasive Treatments"
          description="Experience revolutionary non-invasive procedures that provide lasting results without needles or downtime."
        />
        <Card
          title="Comprehensive Solutions"
          description="Achieve fat-melting, skin-tightening, wrinkle reduction, and more with our all-in-one V-Skin technology."
        />
        <Card
          title="Affordable Pricing"
          description="Transparent prices with no hidden fees—experience premium services starting at just $380 for first-time trials."
        />
      </div>
    </div>
  );
};

/* Inline styling for demonstration purposes */
const styles = {
  mainContainer: {
    maxWidth: "64rem",
    margin: "0 auto",
    padding: "1.5rem",
    borderRadius: "0.75rem",
  },
  sectionTitle: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
  },
  grid: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    // This ensures it stays responsive by adapting the number of columns
  },
  card: {
    background: "linear-gradient(135deg, #652D90 0%, #40215C 100%)",
    borderRadius: "0.75rem",
    padding: "2rem",
    color: "#FFF",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
  },
  cardTitle: {
    marginBottom: "1rem",
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: "1rem",
    lineHeight: "1.5",
  },
};

export default AboutSection;
