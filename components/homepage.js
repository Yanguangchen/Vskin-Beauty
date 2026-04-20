"use client";

import React, { Suspense, lazy } from "react";

// Lazy load components
const SpliceElement = lazy(() => import("./splice"));
const Contactparent = lazy(() => import("./contactParent"));
const Socials = lazy(() => import("./socials"));
const Horizontalbanner = lazy(() => import("./horizontalbanner"));
const ConversionPage = lazy(() => import("./conversionPage"));
const ReviewCarousell = lazy(() => import("./reviewCarousell"));
const MediaShowcase = lazy(() => import("./mediaShowcase"));
const BeautyConcierge = lazy(() => import("./beautyConcierge"));
const TrustSection = lazy(() => import("./trustSection"));
const StickyCta = lazy(() => import("./stickyCta"));

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
    <div style={{ paddingBottom: "5.75rem" }}>
      {/* <Suspense fallback={<Loading />}>
        <Announcement />
      </Suspense> */}

      <Suspense fallback={<Loading />}>
        <ConversionPage />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <TrustSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <SpliceElement />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <BeautyConcierge />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <MediaShowcase />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Horizontalbanner />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <ReviewCarousell />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Contactparent />
      </Suspense>

      <Suspense fallback={null}>
        <StickyCta />
      </Suspense>
    </div>
  );
}

export default Homepage;
