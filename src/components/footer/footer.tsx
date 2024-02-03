"use client"
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaFileDownload } from "react-icons/fa";
import styles from "./footer.module.css";
import { usePathname } from "next/navigation";
import { getClassName } from "../hooks/bgColor/background";

const Footer = () => {

  const pathname = usePathname();

  return (
    <main className={`${styles.main} ${getClassName(pathname)}`}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <a href="" download="cv">
            <button className={styles.btnCv}>
              <FaFileDownload />
              <span>Download CV</span>
            </button>
          </a>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </Link>
        </div>
        <div className={styles.copyright}>
          Solomon Udofia &copy; all right reserved
        </div>
      </div>
    </main>
  );
};

export default Footer;
