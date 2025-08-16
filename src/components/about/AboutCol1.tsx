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
      <p className='txt'>
      A dedicated Business Solutions Developer with over five years of experience creating innovative digital solutions tailored for small and medium-scale enterprises. Proficient in React, React Native, TypeScript, and PHP, I have delivered impactful projects, including a customer engagement platform that boosted user interaction by 20%, empowering SMEs with scalable tools to enhance their operations. Passionate about driving business growth through client-centric strategies, I thrive in collaborative environments where technical expertise meets market demands. 
      </p>
    </div>
  );
}

export default AboutCol1