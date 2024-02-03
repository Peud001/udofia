import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navlinks.module.css'

type linksType = {
    title : string
    path : string
}

interface itemType {
  item: linksType;
  onClick?: () => void;
}

const Navlinks: React.FC<itemType> = ({item, onClick}) => {

  const handleClick = () => {
    if (onClick){
      onClick()
    }
  }

  return <Link href={item.path} onClick={handleClick}>{item.title}</Link>;
}

export default Navlinks