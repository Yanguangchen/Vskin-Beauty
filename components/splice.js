import React, { Suspense, lazy } from "react";
import styles from "./splice.module.css";

// Lazy load the spline-viewer component
const SplineViewer = lazy(() => import("./SplineViewer"));

function SpliceElement() {
  return (
    <main>
      <div>
        <div className={`${styles["spline-container"]} ${styles.splineContainer}`}>
          <div className={styles.darkmodeContainer}></div>
          <Suspense fallback={<div>Loading...</div>}>
            <SplineViewer />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

export default SpliceElement;
