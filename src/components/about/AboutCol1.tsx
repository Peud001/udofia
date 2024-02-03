import Image from 'next/image'
import React from 'react'
import styles from './aboutCol1.module.css'

const AboutCol1 = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>About Me</p>
      <div className={styles.imageAbout}>
        <Image src="/my-img.jpg" alt="" fill className={styles.image} />
      </div>
      <p>
        Certainly! Here's another variation for a bit of diversity: "Hello! I'm
        excited that you're interested in connecting. Please use the form below
        to send me a message. If you have other preferred methods, don't
        hesitate to reach out through the social icons located in the footer."
      </p>
      <p>
        Certainly! Here's another variation for a bit of diversity: "Hello! I'm
        excited that you're interested in connecting. Please use the form below
        to send me a message. If you have other preferred methods, don't
      </p>
    </div>
  );
}

export default AboutCol1