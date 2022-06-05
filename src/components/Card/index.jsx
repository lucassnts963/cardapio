import React from 'react'

import styles from './Card.module.css'

export default function Card({ content }) {
  const { nome, items, preco } = content
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h2>{nome}</h2>
        <small className={styles.details}>{items}</small>
      </div>

      <div className={styles.second}>
        <span>R$ {preco}</span>
      </div>
    </div>
  )
}
