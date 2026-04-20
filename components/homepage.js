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
const PricingStrip = lazy(() => import("./pricingStrip"));
const SectionSkeleton = lazy(() => import("./sectionSkeleton"));

// const Announcement = lazy(() => import("./announcement"));

const Skeleton = ({ tall }) => <SectionSkeleton variant={tall ? "tall" : "default"} />;

function Homepage() {
  return (
    <div style={{ paddingBottom: "5.75rem" }}>
      {/* <Suspense fallback={<Loading />}>
        <Announcement />
      </Suspense> */}

      <Suspense fallback={<Skeleton />}>
        <ConversionPage />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <PricingStrip />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <TrustSection />
      </Suspense>

      <Suspense fallback={<Skeleton tall />}>
        <SpliceElement />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <BeautyConcierge />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <MediaShowcase />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <Horizontalbanner />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <ReviewCarousell />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <Contactparent />
      </Suspense>

      <Suspense fallback={null}>
        <Socials />
      </Suspense>

      <Suspense fallback={null}>
        <StickyCta />
      </Suspense>
    </div>
  );
}

export default Homepage;
