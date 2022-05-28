import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import LogoFace from '../logo/LogoFace'

import styles from './Header.module.scss'

const Header: NextPage = () => {

  const [showMenu, setshowMenu] = useState(false)

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  }

  return (
    <header className={styles.header}>
      <div className={styles.menu + ''}>
        <div onClick={toggleMenu} className={styles.menuButton}>menu</div>
        {
          showMenu ? (<div onClick={toggleMenu} className={styles.menuOptions}>
            <Link href="/">
              <a>home</a>
            </Link>
            <Link href="/menu">
              <a>menú</a>
            </Link>
            <Link href="/event">
              <a>eventi</a>
            </Link>
            <Link href="/info">
              <a>info</a>
            </Link>
            <div onClick={toggleMenu}>
              chiudi
            </div>
          </div>) : null
        }
      </div >

      <div>
        <Link href="/">
          <a className={styles.logo}>
            <LogoFace />
          </a>
        </Link>
      </div>

      <div className='txt-right'>
        <Link href='/info'>
          <a>
            info
          </a>
        </Link>
      </div>
    </header >
  )
}

export default Header
