import styles from "./quote.module.css";

function Quote() {
  return (
    <section>
      <div className={styles["container-wrapper"]}>
        <img
          src="/Assets/Quote.png" // Update the src path
          className={styles["quote-image"]}
          alt="quote"
        />
      </div>
    </section>
  );
}

export default Quote;
