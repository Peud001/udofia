"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navlinks.module.css'
import { usePathname } from 'next/navigation'

type linksType = {
    title: string
    path: string
}

interface itemType {
  item: linksType
  onClick?: () => void
}

const Navlinks: React.FC<itemType> = ({ item, onClick }) => {
  const pathname = usePathname()
  const isActive = pathname === item.path

  return (
    <Link 
      href={item.path} 
      onClick={onClick}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
    >
      {item.title}
    </Link>
  )
}

export default Navlinks