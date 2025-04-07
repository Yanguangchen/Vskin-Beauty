"use client";
import TrafficWidget from "../../components/TrafficWidget";
import { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { db, auth } from "../../lib/firebaseConfig";
import styles from "./AdminPanel.module.css"; // Adjust the path if needed

export default function AdminPanel() {
  // Define allowed UIDs as an array
  const allowedUID = [
    "kDlBzw5WA5U0Nim8w3fzWFqfs2J2",
    "AlqVuAEFbfVgA5kKQnkLKXBNls62",
    "NUy7jEUqE2coyD4cDPapirvMA2x1",
    "71wiHoB4kPYjXmgz6l91FyMituH3",
  ];
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [articles, setArticles] = useState([]);

  // Always set up auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Sign out unauthorized users
  useEffect(() => {
    if (user && !allowedUID.includes(user.uid)) {
      signOut(auth);
    }
  }, [user]);

  // Listen for realtime updates to all articles in the collection
  useEffect(() => {
    if (user && allowedUID.includes(user.uid)) {
      const articlesRef = collection(
        db,
        "vskinbeauty",
        "Gm9eesscHuoLkz9US20g",
        "Today's Article"
      );
      const unsubscribe = onSnapshot(articlesRef, (snapshot) => {
        const articlesArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articlesArray);
      });
      return () => unsubscribe();
    }
  }, [user]);

  // Google Login handler
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setError("");
    } catch (err) {
      console.error("Google sign-in error:", err);
      setError(err.message);
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // Handler to add a new article
  const handleAddArticle = async (e) => {
    e.preventDefault();
    try {
      const articlesRef = collection(
        db,
        "vskinbeauty",
        "Gm9eesscHuoLkz9US20g",
        "Today's Article"
      );
      await addDoc(articlesRef, {
        Title: title,
        Body: body,
        createdAt: new Date(),
      });
      alert("Article added successfully!");
      // Clear form fields after adding
      setTitle("");
      setBody("");
    } catch (err) {
      console.error("Error adding article:", err);
      alert("Failed to add article.");
    }
  };

  if (loading) return <p className={styles.loading}>Loading...</p>;

  if (!user) {
    return (
      <>
        <div className={styles.loginContainer}>
          <h2>Admin Login</h2>
          <button className={styles.button} onClick={handleGoogleLogin}>
            Login with Google
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <TrafficWidget />
      </>
    );
  }

  if (!allowedUID.includes(user.uid)) {
    return <p>Unauthorized: You do not have access to this admin panel.</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Admin Panel</h2>
      <p className={styles.welcome}>Welcome, {user.displayName}</p>
      <button className={styles.button} onClick={handleLogout}>
        Logout
      </button>
      <form className={styles.form} onSubmit={handleAddArticle}>
        <div className={styles.inputGroup}>
          <label>Title field:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Content field:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter content"
          />
        </div>
        <button className={styles.button} type="submit">
          Add Article
        </button>
      </form>
      <div className={styles.articleList}>
        <h3>Existing Articles</h3>
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className={styles.articleCard}>
              <h4>{article.Title}</h4>
              <p>{article.Body}</p>
              <small>
                {article.createdAt &&
                  new Date(article.createdAt.seconds * 1000).toLocaleString()}
              </small>
              <hr />
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
      <TrafficWidget />
    </div>
  );
}
