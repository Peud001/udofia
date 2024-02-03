"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.homeContent}>
          <p className={styles.homeName}>Hello!</p>
          <p className={styles.homeName}>
            I am Solomon <span className={styles.homeNameSpan1}>U</span>dofia,
          </p>
          <p className={styles.homeDesc}>
            a skilled front-end web developer. Explore my world, and feel free
            to connect, if you have an exciting opportunity.
          </p>
        </div>
        <div className={styles.imgHome}>
          <Image src="/my-image.jpg" alt="" fill className={styles.homeImage} />
        </div>
      </div>
    </main>
  );
}
