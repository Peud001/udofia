"use client"
import React from 'react'
import { ClipLoader } from 'react-spinners';
import styles from './spinner.module.css'
import { getClassName } from '../hooks/bgColor/background';
import { usePathname } from 'next/navigation';

const Spinner = () => {

    const pathname = usePathname()
    const className = getClassName(pathname)

  return (
    <div>
      <div className={`${styles.spinner} ${className}`}>
        <ClipLoader color="#36d7b7" speedMultiplier={2} />
      </div>
    </div>
  );
}

export default Spinner