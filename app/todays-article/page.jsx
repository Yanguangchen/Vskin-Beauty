"use client";

import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";
import styles from "./ArticlesList.module.css"; // Adjust the path if needed

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reference the collection where all articles are stored
    const articlesRef = collection(

      //---------------------------------------------------------------------
      //adjust the collection name to match your Firestore structure
      db,
      "vskinbeauty",
      "Gm9eesscHuoLkz9US20g",
      "Today's Article"
    );
      //---------------------------------------------------------------------

    // Listen for realtime updates
    const unsubscribe = onSnapshot(
      articlesRef,
      (snapshot) => {
        const articlesArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articlesArray);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching articles: ", error);
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading)
    return <p className={styles.loading}>Loading articles...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Our Latest Posts</h2>
      {articles.length > 0 ? (
        articles.map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <h3 className={styles.articleTitle}>{article.Title}</h3>
            <p className={styles.articleBody}>{article.Body}</p>
          </div>
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
}
