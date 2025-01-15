"use client";
import React, { useState, useEffect, useCallback } from "react";

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tokenClient, setTokenClient] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [pendingSubmission, setPendingSubmission] = useState(null);

  const postToGoogleSheets = useCallback(
    async (data) => {
      if (!accessToken) {
        console.error("Access token is not available");
        return;
      }

      try {
        const spreadsheetId = "1DkyHthkvIXWM8J7bQlGknFMyHSwPHLRAVjaH3roFcFw";
        const range = "Sheet1!A1:B1"; // Simplified test range

        const requestBody = {
          values: [
            [
              data.firstName,
              data.lastName,
              data.email,
              data.phone,
              data.message,
            ],
          ],
        };

        console.log("Request Body:", requestBody);
        console.log("Using access token:", accessToken);

        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=RAW`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Full error response:", errorText);
          throw new Error(`Failed to submit form: ${errorText}`);
        }

        const responseData = await response.json();
        console.log("Response Data:", responseData);

        alert("Form submitted successfully!");
        setPendingSubmission(null);
      } catch (error) {
        console.error("Detailed error:", error);
        alert("There was an error submitting the form. Please try again.");
      }
    },
    [accessToken]
  );

  useEffect(() => {
    const initializeGisClient = () => {
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id:
          "841295177666-bc1cj07ktal1s6a590qs5l8sre4uvpjo.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/spreadsheets",
        callback: async (response) => {
          if (response.error) {
            console.error("Error during token request:", response.error);
          } else {
            console.log("Access Token:", response.access_token);
            setAccessToken(response.access_token);
            if (pendingSubmission) {
              await postToGoogleSheets(pendingSubmission);
            }
          }
        },
      });
      setTokenClient(client);
    };

    if (
      window.google &&
      window.google.accounts &&
      window.google.accounts.oauth2
    ) {
      initializeGisClient();
    } else {
      window.addEventListener("load", initializeGisClient);
    }

    return () => {
      window.removeEventListener("load", initializeGisClient);
    };
  }, [postToGoogleSheets, pendingSubmission]);

  useEffect(() => {
    if (accessToken && pendingSubmission) {
      postToGoogleSheets(pendingSubmission);
    }
  }, [accessToken, pendingSubmission, postToGoogleSheets]);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    setPendingSubmission(data);

    if (!accessToken) {
      tokenClient.requestAccessToken();
    } else {
      await postToGoogleSheets(data);
    }
  };
  //---------INLINE CSS STYLES---------//
  const Pstyle = {
    fontFamily: "League Spartan !important",
    color: "white !important",
    textAlign: "center",
    fontFamily: "Quicksand, sans-serif, helvetica, arial",
  };

  const styles = {
    mailIcon: {
      position: "fixed",
      left: "30px",
      bottom: "20px",
      border: "none",
      cursor: "pointer",
      fontSize: "110%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      transition: "background-color 0.3s ease",
      fontWeight: "bold",
      background: "darkRed",
      borderRadius: "10px",
      color: "white",
      padding: "1%",
      fontFamily: "Quicksand, sans-serif, helvetica, arial",
    },

    contactForm: {
      position: "fixed",
      right: isOpen ? "0" : "-400px",
      top: "0",
      width: "400px",
      height: "100%",
      backgroundColor: "#003c43",
      color: "white",
      boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
      transition: "right 0.3s ease-in-out",
      padding: "30px",
      boxSizing: "border-box",
      zIndex: 1001,
      overflowY: "auto",
      fontFamily: "Quicksand, sans-serif, helvetica, arial",
    },
    formTitle: {
      fontSize: "24px",
      marginBottom: "10px",
      fontFamily: "Quicksand, sans-serif, helvetica, arial",
    },
    formSubtitle: {
      fontSize: "14px",
      marginBottom: "20px",
      opacity: 0.8,
      fontFamily: "Quicksand, sans-serif, helvetica, arial",
    },
    inputGroup: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "15px",
      width: "100%",
      gap: "10px",
      fontFamily: "Quicksand, sans-serif, helvetica, arial",
    },
    input: {
      width: "48%",
      padding: "10px",
      backgroundColor: "rgba(255,255,255,0.1)",
      border: "none",
      borderRadius: "4px",
      color: "white",
      fontFamily: "Quicksand, sans-serif, helvetica, arial",
    },
    fullWidthInput: {
      width: "100%",
      padding: "10px",
      backgroundColor: "rgba(255,255,255,0.1)",
      border: "none",
      borderRadius: "4px",
      color: "white",
      marginBottom: "15px",
      fontFamily: "Quicksand, sans-serif, helvetica, arial",
    },
    textarea: {
      width: "95%",
      padding: "10px",
      backgroundColor: "rgba(255,255,255,0.1)",
      border: "none",
      borderRadius: "4px",
      color: "white",
      minHeight: "100px",
      marginBottom: "15px",
      fontFamily: "Quicksand, sans-serif, helvetica, arial",
    },
    submitButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#ffffff",
      color: "#00514e",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
      fontFamily: "Quicksand, sans-serif, helvetica, arial",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "none",
      border: "none",
      color: "white",
      fontSize: "24px",
      cursor: "pointer",
      fontFamily: "Quicksand, sans-serif, helvetica, arial",
    },
  };

  return (
    <>
      <button style={styles.mailIcon} onClick={toggleForm}>
        ✉️
      </button>
      <div style={styles.contactForm}>
        <button style={styles.closeButton} onClick={toggleForm}>
          ×
        </button>
        <h2 style={styles.formTitle}>Appointment request</h2>
        <p style={styles.formSubtitle}>
          Sent use an appointment request and we will get back to you shortly
        </p>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <input
              style={styles.input}
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              style={styles.input}
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              style={styles.input}
              type="tel"
              name="phone"
              placeholder="Phone"
            />
          </div>
          <textarea
            style={styles.textarea}
            name="message"
            placeholder="Your questions or comments, appointment date and time"
            required
          />
          <button style={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
        <p style={Pstyle}>
          Powered by Web Wizard Forms for Journey Beauty & Brow Work
        </p>
        <img
          src="Assets/webwizards.webp"
          alt="Web Wizards"
          style={{ width: "100%", marginTop: "20px" }}
        />
      </div>
    </>
  );
};

export default ContactForm;
