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
    display: isMenuOpen ? "flex" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(10px)",
    zIndex: 9999,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    // Fade-in animation
    opacity: isMenuOpen ? 1 : 0,
    animation: isMenuOpen ? "fadeInMenu 0.4s ease-out forwards" : "fadeOutMenu 0.3s ease-in forwards",
    visibility: isMenuOpen ? "visible" : "hidden",
  };

  const hamburgerStyle = {
    display: isMobileView ? "block" : "none",
    fontSize: "35px",
    color: "#9c2a28",
    cursor: "pointer",
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "10px",
    zIndex: 1002,
    // Hamburger animation
    transition: "all 0.3s ease-in-out",
  };

  const navLinksContainerStyle = {
    display: isMobileView ? "none" : "flex",
    justifyContent: "space-around",
    width: "100%",
  };

  const navLinksMobileStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    alignItems: "center",
    width: "100%",
    maxWidth: "300px",
    // Staggered animation for menu items
    animation: isMenuOpen ? "slideInUp 0.6s ease-out 0.2s both" : "slideOutDown 0.3s ease-in both",
  };

  const mobileLinkStyle = {
    ...linkStyle,
    fontSize: "24px",
    padding: "15px 30px",
    width: "100%",
    textAlign: "center",
    marginBottom: "10px",
    // Enhanced neumorphic styling for mobile
    boxShadow: 
      "8px 8px 16px rgba(0, 0, 0, 0.1), " +
      "-8px -8px 16px rgba(255, 255, 255, 0.9), " +
      "inset 0 0 0 rgba(0, 0, 0, 0)",
    // Individual link animation
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
    transition: "all 0.4s ease-out",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "30px",
    right: "30px",
    fontSize: "40px",
    color: "#9c2a28",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: "10px",
    zIndex: 10000,
    // Close button animation
    animation: isMenuOpen ? "rotateIn 0.5s ease-out 0.1s both" : "rotateOut 0.2s ease-in both",
  };

  // Generate staggered delay for each menu item
  const getMenuItemStyle = (index) => ({
    ...mobileLinkStyle,
    animationDelay: isMenuOpen ? `${0.1 + (index * 0.1)}s` : "0s",
    animation: isMenuOpen ? `fadeInSlideUp 0.5s ease-out ${0.1 + (index * 0.1)}s both` : `fadeOutSlideDown 0.2s ease-in both`,
  });

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
            <Link
              href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/15/14/20250115141621-JOO3QMZ7.json"
              style={linkStyle}
              className="navlinks"
            >
              Chat with our AI
            </Link>
            <Link href="/Blogs" style={linkStyle} className="navlinks">
              Why Us
            </Link>
          </div>
          {isMenuOpen && (
            <div style={menuStyle} className="mobile-menu-overlay">
              <button
                style={closeButtonStyle}
                onClick={toggleMenu}
                className="close-button"
                aria-label="Close menu"
              >
                &#10005;
              </button>
              <div style={navLinksMobileStyle} className="mobile-menu-container">
                <Link
                  href="/"
                  style={getMenuItemStyle(0)}
                  className="navlinks mobile-navlink"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <a
                  href="https://www.facebook.com/profile.php?id=61571261739335"
                  style={getMenuItemStyle(1)}
                  className="navlinks mobile-navlink"
                  onClick={toggleMenu}
                >
                  Facebook Page
                </a>
                <Link
                  href="/listings"
                  style={getMenuItemStyle(2)}
                  className="navlinks mobile-navlink"
                  onClick={toggleMenu}
                >
                  Price List
                </Link>
                <Link
                  href="/contact"
                  style={getMenuItemStyle(3)}
                  className="navlinks mobile-navlink"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <Link
                  href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/15/14/20250115141621-JOO3QMZ7.json"
                  style={getMenuItemStyle(4)}
                  className="navlinks mobile-navlink"
                  onClick={toggleMenu}
                >
                  Chat with our AI
                </Link>
                <Link 
                  href="/Blogs" 
                  style={getMenuItemStyle(5)}
                  className="navlinks mobile-navlink"
                  onClick={toggleMenu}
                >
                  Why Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
