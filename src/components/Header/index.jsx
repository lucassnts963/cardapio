import React from 'react'
import Link from 'next/link'

import styles from './Header.module.css'

export default function Header({pageActive}) {
  return (
    <header className={styles.header}>
        <h1>Bidu Lanches</h1>
        <small>Rua João Rabelo, 728 - Marambaia | Santa Maria do Pará</small>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={`${styles.li} ${pageActive == 'Cardápio' ? styles.active : ''}`}>
              <Link href="/">
                <a>Cardápio</a>
              </Link>
            </li>
            
            <li className={`${styles.li} ${pageActive == 'contato' ? styles.active : ''}`}>
              <Link href="/contato">
                <a>Contato</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}
