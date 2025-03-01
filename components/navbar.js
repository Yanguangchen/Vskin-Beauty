"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Use Next.js's built-in Link

//import local components
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      console.log("Mobile View:", window.innerWidth <= 768); // Debugging output
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bodyStyle = {
    padding: "none",
    margin: "none",
    width: "100%",
  };

  const navBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1% 0",
    width: "100%",
    position: "relative",
    zIndex: 1001,
  };

  const linkStyle = {
    color: "#e2b019",
    textDecoration: "none",
    fontSize: "20px",
    padding: "10px",
    backgroundColor: "white",
    padding: "10px 20px",
    borderRadius: "30px",
    border: "1px solid #e2b019",
  };

  const logoStyle = {
    width: "10%",
  };

  const menuStyle = {
    display: isMenuOpen ? "block" : "none",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    textAlign: "center",
  };

  const hamburgerStyle = {
    display: isMobileView ? "block" : "none",
    fontSize: "30px",
    color: "#9c2a28",
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const navLinksContainerStyle = {
    display: isMobileView ? "none" : "flex",
    justifyContent: "space-around",
    width: "100%",
  };

  const navLinksMobileStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <nav>
      <div style={bodyStyle}>
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          <img
            src="topBanner.jpg"
            alt="Logo"
            style={logoStyle}
            className="topbanner"
          />
        </div>
        <div style={navBarStyle} className="navbarStyle">
          <div
            style={hamburgerStyle}
            onClick={toggleMenu}
            className="hamburger"
          >
            &#9776;
          </div>
          <div style={navLinksContainerStyle}>
            <Link href="/" style={linkStyle} className="navlinks">
              Home
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=61568387910807"
              style={linkStyle}
              className="navlinks"
            >
              Facebook Page
            </a>
            <Link href="/listings" style={linkStyle} className="navlinks">
              Price List
            </Link>
            <Link href="/contact" style={linkStyle} className="navlinks">
              Contact
            </Link>
            <Link href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/15/14/20250115141621-JOO3QMZ7.json" style={linkStyle} className="navlinks">
              Chat with our AI
            </Link>
          </div>
          {isMenuOpen && (
            <div style={{ ...menuStyle, ...navLinksMobileStyle }}>
              <Link
                href="/"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <a
                href="https://www.facebook.com/profile.php?id=61571261739335"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Facebook Page
              </a>
              <Link
                href="/listings"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Price List
              </Link>
              <Link
                href="/contact"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/15/14/20250115141621-JOO3QMZ7.json" style={linkStyle} className="navlinks">
                Chat with our AI
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
