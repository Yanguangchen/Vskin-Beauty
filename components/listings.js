import React from "react";
import styles from "./listings.module.css";

function Listings() {
  return (
    <>
      <div className={styles.videoContainer}>
        <iframe
          className="iframeContainer"
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0yFi9AhsGMxnDYFuLMq3MBPRh3pfVUQyLjn11CfaJ7oyLUfGoTsstJor3Q7gCe14xl%26id%3D61568387910807&show_text=true&width=500"
          width="500"
          height="562"
          style={{ border: "none", overflow: "hidden", marginBottom: "10%" }}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          className="iframeContainer"
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61568387910807%2Fvideos%2F1151184566620436%2F&show_text=false&width=267&t=0"
          width="267"
          style={{ overflow: "hidden", marginBottom: "10%" }}
          height="476"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </div>
    </>
  );
}

export default Listings;
