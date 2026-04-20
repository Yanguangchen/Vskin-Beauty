"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BookingButton from "./bookingButton";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pillStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "100px",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    background: "rgba(253, 252, 250, 0.88)",
    border: "1px solid rgba(232, 228, 239, 0.95)",
    boxShadow: "0 8px 32px rgba(30, 27, 46, 0.08)",
    padding: "0.5rem 1rem 0.5rem 0.65rem",
    gap: "0.65rem",
  };

  const logoStyle = {
    height: "44px",
    width: "auto",
    borderRadius: "100px",
    flexShrink: 0,
  };

  const linkStyle = {
    color: "#334155",
    textDecoration: "none",
    fontSize: "14px",
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: "600",
    padding: "8px 12px",
    borderRadius: "100px",
    transition: "all 0.25s ease",
    whiteSpace: "nowrap",
  };

  const menuStyle = {
    display: isMenuOpen ? "flex" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(253, 252, 250, 0.98)",
    backdropFilter: "blur(12px)",
    zIndex: 9999,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    animation: isMenuOpen ? "fadeInMenu 0.35s ease forwards" : "none",
  };

  const mobileLinkStyle = {
    color: "#334155",
    textDecoration: "none",
    fontSize: "18px",
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: "700",
    padding: "14px 28px",
    borderRadius: "100px",
    border: "1px solid rgba(101,45,144,0.12)",
    background: "#fff",
    width: "100%",
    maxWidth: "300px",
    textAlign: "center",
    display: "block",
    transition: "all 0.25s ease",
  };

  const getMenuItemStyle = (index) => ({
    ...mobileLinkStyle,
    animation: isMenuOpen
      ? `fadeInSlideUp 0.4s ease ${0.05 + index * 0.06}s both`
      : "none",
  });

  const closeButtonStyle = {
    position: "absolute",
    top: "24px",
    right: "24px",
    fontSize: "36px",
    color: "#5b21b6",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: "10px",
    zIndex: 10000,
    animation: isMenuOpen ? "rotateIn 0.4s ease both" : "none",
  };

  return (
    <nav style={{
      position: "sticky",
      top: "12px",
      zIndex: 1001,
      padding: "0 1rem",
    }}>
      <div style={pillStyle}>
        <Link href="/">
          <img src="topBanner.jpg" alt="VSkin Beauty" style={logoStyle} className="topbanner" />
        </Link>

        {!isMobileView && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.1rem", flexWrap: "wrap", flex: 1, justifyContent: "flex-end" }}>
            <Link href="/" style={linkStyle} className="navlinks">Home</Link>
            <Link href="/listings" style={linkStyle} className="navlinks">Treatments</Link>
            <Link href="/#beauty-concierge" style={linkStyle} className="navlinks">Concerns</Link>
            <Link href="/#starting-prices" style={linkStyle} className="navlinks">Pricing</Link>
            <Link href="/about" style={linkStyle} className="navlinks">About</Link>
            <Link href="/faq" style={linkStyle} className="navlinks">FAQ</Link>
            <Link href="/Blogs" style={linkStyle} className="navlinks">Why us</Link>
            <Link href="/contact" style={linkStyle} className="navlinks">Contact</Link>
            <a href="https://www.facebook.com/profile.php?id=61568387910807" style={linkStyle} className="navlinks">Facebook</a>
            <BookingButton style={{ marginLeft: "0.25rem" }}>Book</BookingButton>
            <a
              href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/15/14/20250115141621-JOO3QMZ7.json"
              style={{
                ...linkStyle,
                background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
                color: "#fff",
                padding: "8px 16px",
              }}
              className="navlinks"
            >
              AI chat
            </a>
          </div>
        )}

        {isMobileView && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <BookingButton style={{ minHeight: 38, fontSize: 13, padding: "0 0.9rem" }}>Book</BookingButton>
            <div
              onClick={toggleMenu}
              className="hamburger"
              style={{
                fontSize: "26px",
                color: "#5b21b6",
                cursor: "pointer",
                padding: "6px 10px",
                lineHeight: 1,
              }}
            >
              &#9776;
            </div>
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div style={menuStyle} className="mobile-menu-overlay">
          <button style={closeButtonStyle} onClick={toggleMenu} aria-label="Close menu">
            &#10005;
          </button>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", width: "100%", maxWidth: "320px" }}>
            <Link href="/" style={getMenuItemStyle(0)} className="mobile-navlink" onClick={toggleMenu}>Home</Link>
            <Link href="/listings" style={getMenuItemStyle(1)} className="mobile-navlink" onClick={toggleMenu}>Treatments</Link>
            <Link href="/#beauty-concierge" style={getMenuItemStyle(2)} className="mobile-navlink" onClick={toggleMenu}>Concerns quiz</Link>
            <Link href="/#starting-prices" style={getMenuItemStyle(3)} className="mobile-navlink" onClick={toggleMenu}>Starting prices</Link>
            <Link href="/about" style={getMenuItemStyle(4)} className="mobile-navlink" onClick={toggleMenu}>About</Link>
            <Link href="/faq" style={getMenuItemStyle(5)} className="mobile-navlink" onClick={toggleMenu}>FAQ</Link>
            <Link href="/Blogs" style={getMenuItemStyle(6)} className="mobile-navlink" onClick={toggleMenu}>Why us</Link>
            <Link href="/contact" style={getMenuItemStyle(7)} className="mobile-navlink" onClick={toggleMenu}>Contact</Link>
            <a href="https://www.facebook.com/profile.php?id=61571261739335" style={getMenuItemStyle(8)} className="mobile-navlink" onClick={toggleMenu}>Facebook</a>
            <div onClick={toggleMenu} style={{ width: "100%", maxWidth: "300px" }}>
              <BookingButton style={{ width: "100%", minHeight: 48 }}>Book appointment</BookingButton>
            </div>
            <a
              href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/15/14/20250115141621-JOO3QMZ7.json"
              style={{
                ...getMenuItemStyle(9),
                background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
                color: "#fff",
                border: "none",
              }}
              className="mobile-navlink"
              onClick={toggleMenu}
            >
              AI chat
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
