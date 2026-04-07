"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

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
    background: "rgba(245, 245, 247, 0.72)",
    border: "1px solid rgba(255, 255, 255, 0.6)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
    padding: "0.5rem 1.25rem 0.5rem 0.75rem",
    gap: "1rem",
  };

  const logoStyle = {
    height: "44px",
    width: "auto",
    borderRadius: "100px",
    flexShrink: 0,
  };

  const linkStyle = {
    color: "#333",
    textDecoration: "none",
    fontSize: "15px",
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: "600",
    padding: "8px 14px",
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
    backgroundColor: "rgba(255, 255, 255, 0.97)",
    backdropFilter: "blur(12px)",
    zIndex: 9999,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    animation: isMenuOpen ? "fadeInMenu 0.35s ease forwards" : "none",
  };

  const mobileLinkStyle = {
    color: "#333",
    textDecoration: "none",
    fontSize: "22px",
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: "700",
    padding: "14px 32px",
    borderRadius: "100px",
    border: "1px solid rgba(101,45,144,0.15)",
    background: "rgba(245,245,247,0.8)",
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
    color: "#652D90",
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
        {/* Logo */}
        <Link href="/">
          <img src="topBanner.jpg" alt="VSkin Beauty" style={logoStyle} className="topbanner" />
        </Link>

        {/* Desktop links */}
        {!isMobileView && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", flexWrap: "wrap" }}>
            <Link href="/" style={linkStyle} className="navlinks">Home</Link>
            <a href="https://www.facebook.com/profile.php?id=61568387910807" style={linkStyle} className="navlinks">Facebook</a>
            <Link href="/listings" style={linkStyle} className="navlinks">Price List</Link>
            <Link href="/contact" style={linkStyle} className="navlinks">Contact</Link>
            <Link href="/Blogs" style={linkStyle} className="navlinks">Why Us</Link>
            <Link href="/about" style={linkStyle} className="navlinks">About</Link>
            <Link href="/faq" style={linkStyle} className="navlinks">FAQ</Link>
            <a
              href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/15/14/20250115141621-JOO3QMZ7.json"
              style={{
                ...linkStyle,
                background: "linear-gradient(135deg, #652D90 0%, #40215C 100%)",
                color: "#fff",
                padding: "8px 18px",
              }}
              className="navlinks"
            >
              Chat with AI
            </a>
          </div>
        )}

        {/* Hamburger */}
        {isMobileView && (
          <div
            onClick={toggleMenu}
            className="hamburger"
            style={{
              fontSize: "26px",
              color: "#652D90",
              cursor: "pointer",
              padding: "6px 10px",
              lineHeight: 1,
            }}
          >
            &#9776;
          </div>
        )}
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div style={menuStyle} className="mobile-menu-overlay">
          <button style={closeButtonStyle} onClick={toggleMenu} aria-label="Close menu">
            &#10005;
          </button>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", width: "100%", maxWidth: "320px" }}>
            <Link href="/" style={getMenuItemStyle(0)} className="mobile-navlink" onClick={toggleMenu}>Home</Link>
            <a href="https://www.facebook.com/profile.php?id=61571261739335" style={getMenuItemStyle(1)} className="mobile-navlink" onClick={toggleMenu}>Facebook</a>
            <Link href="/listings" style={getMenuItemStyle(2)} className="mobile-navlink" onClick={toggleMenu}>Price List</Link>
            <Link href="/contact" style={getMenuItemStyle(3)} className="mobile-navlink" onClick={toggleMenu}>Contact</Link>
            <Link href="/Blogs" style={getMenuItemStyle(4)} className="mobile-navlink" onClick={toggleMenu}>Why Us</Link>
            <Link href="/about" style={getMenuItemStyle(5)} className="mobile-navlink" onClick={toggleMenu}>About</Link>
            <Link href="/faq" style={getMenuItemStyle(6)} className="mobile-navlink" onClick={toggleMenu}>FAQ</Link>
            <a
              href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/15/14/20250115141621-JOO3QMZ7.json"
              style={{
                ...getMenuItemStyle(7),
                background: "linear-gradient(135deg, #652D90 0%, #40215C 100%)",
                color: "#fff",
                border: "none",
              }}
              className="mobile-navlink"
              onClick={toggleMenu}
            >
              Chat with AI
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
