import React from 'react'

import styles from './Infos.module.css'

export default function Infos() {
  return (
    <div className={styles.container}>
      <div className={styles.funcionamento}>
        <span>Aberto</span>
        <small>Seg | Ter | Qui | Sex | Sáb</small>
      </div>

      <div className={styles.separator}/>

      <div className='styles.entrega'>
        <span>Não estamos fazendo entrega</span>
      </div>

      <div className={styles.separator}/>

      <div className={styles.pagamentos}>
        <span>Formas de pagamentos</span>
        <small>Crédito | Débito | Pix | Dinheiro</small>
      </div>

      <div className={styles.separator}/>

      <div className={styles.promocao}>
        <span>Promoção</span>
        <small>Suco Grátis</small>
      </div>
    </div>
  )
}
