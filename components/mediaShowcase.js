"use client";

import React, { useState, useRef, useEffect } from "react";

const videos = [
  {
    src: "/Assets/EyeCircle.mp4",
    title: "Eye Circle Treatment",
    description: "Targeted serum delivery to reduce dark circles and puffiness — no needles, no downtime.",
  },
  {
    src: "/Assets/NosePromo.mp4",
    title: "Nose Lifting Collagen",
    description: "Non-surgical nose enhancement with VJet technology. Natural lift that lasts 16–18 months.",
  },
];

const VideoCard = ({ src, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
        borderRadius: "1.5rem",
        overflow: "hidden",
        background: isHovered
          ? "linear-gradient(135deg, #7a3ba3 0%, #4d2870 100%)"
          : "linear-gradient(135deg, #652D90 0%, #40215C 100%)",
        boxShadow: isHovered
          ? "20px 20px 40px rgba(0,0,0,0.3), -10px -10px 20px rgba(255,255,255,0.12), 0 0 30px rgba(101,45,144,0.5)"
          : "15px 15px 30px rgba(0,0,0,0.2), -10px -10px 20px rgba(255,255,255,0.08), 0 0 20px rgba(101,45,144,0.3)",
        border: "1px solid rgba(255,255,255,0.12)",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        transform: isVisible
          ? isHovered
            ? "translateY(-8px) scale(1.02)"
            : "translateY(0) scale(1)"
          : "translateY(28px)",
        cursor: "default",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: "relative", paddingTop: "177.78%", background: "rgba(0,0,0,0.3)" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: isHovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.6s ease",
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>

      <div style={{ padding: "1.75rem 2rem" }}>
        <h3 style={{
          color: "#fff",
          fontSize: "1.2rem",
          fontWeight: "700",
          marginBottom: "0.6rem",
          fontFamily: "'Quicksand', sans-serif",
          letterSpacing: "0.4px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}>
          {title}
        </h3>
        <p style={{
          color: "rgba(255,255,255,0.88)",
          fontSize: "0.97rem",
          lineHeight: "1.65",
          fontFamily: "'Quicksand', sans-serif",
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          margin: 0,
        }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default function MediaShowcase() {
  return (
    <section style={{
      padding: "5rem 1.5rem",
      background: "linear-gradient(160deg, #f5f0fa 0%, #f0f0f0 60%, #fdf8ff 100%)",
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <p style={{
          textAlign: "center",
          fontSize: "0.85rem",
          fontWeight: "700",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#652D90",
          marginBottom: "0.75rem",
          fontFamily: "'Quicksand', sans-serif",
        }}>
          See It in Action
        </p>
        <h2 style={{
          textAlign: "center",
          fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
          fontWeight: "800",
          color: "#1a1a1a",
          marginBottom: "3rem",
          fontFamily: "'Quicksand', sans-serif",
        }}>
          Our Treatments, Up Close
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}>
          {videos.map((v, i) => (
            <VideoCard key={v.src} {...v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
