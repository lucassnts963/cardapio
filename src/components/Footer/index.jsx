import React from 'react'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <a
          href="https://github.com/lucassnts963"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            Lucas Santos
          </span>
        </a>
      </footer>
  )
}
