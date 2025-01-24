"use client";

import React, { Suspense, lazy } from "react";

// Lazy load components
const SpliceElement = lazy(() => import("./splice"));
const Listings = lazy(() => import("./listings"));
const Contactparent = lazy(() => import("./contactParent"));
const Socials = lazy(() => import("./socials"));
const AboutSection = lazy(() => import("./about"));
const Quote = lazy(() => import("./quote"));
const Horizontalbanner = lazy(() => import("./horizontalbanner"));
const ReviewCarousell = lazy(() => import("./reviewCarousell"));

// const Announcement = lazy(() => import("./announcement"));

// Create a simple loading component
const Loading = () => (
  <div
    style={{
      fontFamily: "Quicksand",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <div className="spinner" style={{ marginBottom: "10px" }}></div>
      Loading...
    </div>
    <style jsx>{`
      .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: #000;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

function Homepage() {
  return (
    <div>
      {/* <Suspense fallback={<Loading />}>
        <Announcement />
      </Suspense> */}

      <Suspense fallback={<Loading />}>
        <SpliceElement />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Quote />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Horizontalbanner />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Listings />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <ReviewCarousell />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Contactparent />
      </Suspense>
      <script
        src="https://widgets.sociablekit.com/facebook-page-posts/widget.js"
        defer
      ></script>
    </div>
  );
}

export default Homepage;
