import React from "react";
import Listings from "./listings";
import Maps from "./maps";
import styles from "./Midsection.module.css";

function Midsection() {
  return (
    <main>
      <div className="container-wrapper">
        <div className="grid-wrapper">
          <Listings />
          <Maps />
        </div>
      </div>
    </main>
  );
}

export default Midsection;
