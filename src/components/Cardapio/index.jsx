import React from 'react'

import styles from './Cardapio.module.css'
import Card from '../Card'

const lanches = [
  {nome: 'X-tudo',             items: 'Pão, carne, queijo, presunto, bacon, frango, salsisha, calabresa, ovo e Salada', preco: '19,00'},
  {nome: 'BigBidu',            items: 'Pão, 2 carne, 2 queijo, 2 presunto, 2 ovos, bacon e Salada', preco: '19,00'},
  {nome: 'Super Bidu Burguer', items: 'Pão, 2 carne, 2 queijo, 2 presunto, salsicha e Salada', preco: '16,00'},
  {nome: 'Eggs Calabresa',     items: 'Pão, carne, ovo, queijo, presunto, calabresa e Salada', preco: '12,00'},
  {nome: 'Eggs Bacon',         items: 'Pão, carne, ovo, queijo, presunto, bacon e Salada', preco: '12,00'},
  {nome: 'Eggs Salsicha',      items: 'Pão, carne, ovo, queijo, presunto, salsicha e Salada', preco: '12,00'},
  {nome: 'Eggs Frango',        items: 'Pão, frango, ovo, queijo, presunto e Salada', preco: '12,00'},
  {nome: 'Eggs Burguer',       items: 'Pão, carne, ovo, queijo, presunto e Salada', preco: '10,00'},
  {nome: 'X - calabresa',      items: 'Pão, carne, queijo, presunto, calabresa e Salada', preco: '10,00'},
  {nome: 'X - Bacon',          items: 'Pão, carne, queijo, presunto, bacon e Salada', preco: '10,00'},
  {nome: 'X - Salsicha',       items: 'Pão, carne, queijo, presunto, salsicha e Salada', preco: '10,00'},
  {nome: 'X - Frango',         items: 'Pão, frango, queijo, presunto e Salada', preco: '10,00'},
  {nome: 'X - Burg',           items: 'Pão, carne, queijo, presunto e Salada', preco: '9,00'},
  {nome: 'Hamburg',            items: 'Pão, carne e Salada', preco: '7,00'},
  {nome: 'Misto',              items: 'Pão de forma, queijo e presunto', preco: '6,00'},
]

export default function Cardapio() {
  return (
    <div className={styles.container}>
      {
        lanches.map((value, index) => {
          return <Card key={index} content={value}/>
        })
      }
    </div>
  )
}
