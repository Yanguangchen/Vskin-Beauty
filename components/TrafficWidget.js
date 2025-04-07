"use client";

import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import style from "./traffic.module.css";

// 2. Import the Firestore instance you exported in firebaseConfig.js
import { db } from "../lib/firebaseConfig"; // ✅ Correct for Pages Router
import { doc, getDoc } from "firebase/firestore"; // ✅ Import Firestore methods

export default function TrafficWidget() {
  const [traffic, setTraffic] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  function generateRandomNumber() {
    return Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  }
  // Use useMemo to compute randomNum only once
  const randomNum = useMemo(() => generateRandomNumber(), []);
  const request = Math.round(Math.sqrt(randomNum + 1000 * 1.114) * 85.2);


  useEffect(() => {    
    async function fetchUserData() {
      try {
        const start = performance.now();
        const userRef = doc(db, "MedTrustHub", "5thWeLmi7aMQMX7OTYB8");
        const userSnap = await getDoc(userRef);
        const end = performance.now();
        const ping = Math.round(end - start);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setUserData({ ...data, _ping: ping });
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.error("Failed to load user data", err);
        setError("Failed to load user data.");
      }
    }

    async function fetchTraffic() {
      try {
        const response = await axios.get("/api/cloudflare-traffic");
        setTraffic(response.data);
      } catch (err) {
        setError("Failed to load traffic data.");
      }
    }

    // Initial fetch
    fetchUserData();

    // 🔁 Set interval to live-update ping every 10 seconds
    const interval = setInterval(fetchUserData, 1000); // 10,000ms = 10 seconds

    // 🧹 Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handle loading / error states
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!userData) return <p>Loading data...</p>;

  return (
    <div style={styles.container}>
      {/* USER DATA SECTION */}
      <h2>Database Status</h2>
      <p style={{color: "green"}}>
        <strong>Database Connection Status:</strong>{" "}
        {userData["Database Connection Status"]}
      </p>
      <p className={style.ping}>
        <strong>Google Firestore Ping:</strong> {userData?._ping ?? "N/A"} ms
      </p>

      <img src="/Assets/firebase.png" alt="Firebase" style={styles.logo} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "15px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    padding: "10px 15px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontWeight: "bold",
    color: "#555",
  },
  metrics: {
    fontSize: "16px",
    color: "#777",
  },
  footerText: {
    fontSize: "14px",
    color: "#999",
    marginTop: "20px",
  },
  logo: {
    width: "30%",
    marginTop: "10px",
    marginBottom: "40px",
  },

};


