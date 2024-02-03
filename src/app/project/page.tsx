"use client"
import styles from './project.module.css'
import { works } from '@/components/work/work';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {FaGithub, FaGlobe, FaAngleDoubleLeft} from 'react-icons/fa'

type workType = {
    path: string;
    title: string;
    stacks: string[];
    description: string;
    features: string[];
    website: string;
    github: string;
}

const Project = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [data, setData] = useState<workType | undefined>(undefined)

  const handleClick = (
    item: workType
  ) => {
    setIsOpen((prev) => !prev);
    setData(item);
  };

  return (
    <main className={styles.main}>
      <div className={`${styles.container} ${isOpen && styles.opacity}`}>
        <div className={styles.images}>
          {works.map((work, i) => (
            <div key={i}>
              <div className={styles.imageContainer}>
                <Image
                  src={work.path}
                  alt=""
                  fill
                  className={styles.img}
                  priority
                  onClick={() => handleClick(work)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.sideContainer} ${isOpen && styles.active}`}>
        <div className={`${isOpen ? styles.showSlide : styles.hideSlide}`}>
          <button
            className={styles.sideSlideBtn}
            onClick={() => setIsOpen(false)}
          >
            <FaAngleDoubleLeft />
          </button>
          <div className={styles.slideContainer}>
            {data && (
              <div className={styles.sideSlideContent}>
                <p className={styles.sideTitle}>{data.title}</p>
                <div className={styles.imageContainer}>
                  <Image
                    src={data.path}
                    alt=""
                    fill
                    priority
                    className={styles.img}
                  />
                </div>
                <div className={styles.keyFeaturesDesc}>
                  <div className={styles.desContainer}>
                    <p className={styles.descTitle}>Description</p>
                    <p className={styles.sideDesc}>{data.description}</p>
                  </div>
                  <div className={styles.keyStack}>
                    <div className={styles.keyContainer}>
                      <p className={styles.key}>Features</p>
                      <ul className={styles.features}>
                        {data.features.map((item, i) => (
                          <li className={styles.li} key={i}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.stackContainer}>
                      <p className={styles.stacks}>Technologies</p>
                      <ul>
                        {data.stacks.map((item, i) => (
                          <li className={styles.li} key={i}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> <span>View Code</span>
                    </Link>
                  </p>
                  <p>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <FaGlobe /> <span>View Website</span>
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project