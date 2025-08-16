"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.homeContent}>
          <h1 className={styles.homeName}>
            Hello! I am Solomon{" "}
            <span className={styles.homeNameSpan}>U</span>dofia
          </h1>
          <p className={styles.homeDesc}>
          A Business Solutions Developer with over 5 years of SME-focused innovation. Explore my world, and feel free to{" "}
            <Link href="/contact" className={styles.ctaLink}>
              connect
            </Link>{" "}
            if you have an exciting opportunity.
          </p>
        </div>
        <div className={styles.imgHome}>
          <Image
            src="/my-image.jpg"
            alt="Portrait of Solomon Udofia"
            fill
            sizes="(max-width: 768px) 300px, 480px"
            className={styles.homeImage}
            priority
          />
        </div>
      </section>
    </main>
  );
}