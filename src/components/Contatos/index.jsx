import React from 'react'

import styles from './Contatos.module.css'

export default function Contatos() {
  return (
    <div className={styles.container}>
      <small className={styles.type}>
        WhatsApp: (91) 98093-0176 <a href="https://wa.me/5591980930176">Entrar em contato</a>
      </small>
      <small className={styles.type}>
        Ligação: (91) 98083-0176 <a href="tel:+5591980930176">Clique aqui para ligar</a>
      </small>
    </div>
  )
}
