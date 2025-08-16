"use client";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaFileDownload } from "react-icons/fa";
import styles from "./footer.module.css";
import { usePathname } from "next/navigation";
import { getClassName } from "../hooks/bgColor/background";

const Footer = () => {
  const pathname = usePathname();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Solomon_Udofia_CV.pdf"; // Must match the filename in public
    link.download = "Solomon_Udofia_CV.pdf"; // Desired download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className={`${styles.main} ${getClassName(pathname)}`}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <button className={styles.btnCv} onClick={handleDownload}>
            <FaFileDownload />
            <span>Download CV</span>
          </button>
          <Link href="https://www.linkedin.com/in/solomon-udofia-601421250/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/Peud001/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
        </div>
        <div className={styles.copyright}>
          Solomon Udofia &copy; {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </main>
  );
};

export default Footer;