"use client"
import React, { useState } from 'react'
import Navlinks from './navLinks/Navlinks'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'
import { getClassName } from '../hooks/bgColor/background'
import ThemeSwitch from '../themeswitch/ThemeSwitch'

type linksType = {
    title: string
    path: string
}

const Navbar = () => {
  const pathname = usePathname()
  const [isMenu, setIsMenu] = useState<boolean>(false)

  const links: linksType[] = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/project" },
    { title: "Contact", path: "/contact" },
  ]

  const handleClick = () => {
    setIsMenu(prev => !prev)
  }

  return (
    <nav className={`${styles.main} ${getClassName(pathname)}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoSpan}>U</span>dofia
        </div>
        <div className={styles.links}>
          {links.map((link, i) => (
            <Navlinks key={i} item={link} />
          ))}
        </div>
        <div className={styles.menuBtn}>
          <button className={styles.menu} onClick={handleClick}>
            Menu
          </button>
        </div>
        {isMenu && (
          <div className={`${styles.mobileLinks} ${getClassName(pathname)}`}>
            {links.map((link, i) => (
              <Navlinks key={i} item={link} onClick={handleClick} />
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar