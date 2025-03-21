import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import style from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <>
  
      <div className={style.home_container}>
        <div className={style.quote_container}>

          <div className={style.quote}>

            <div><FaQuoteLeft /></div>
            <quote>
              
            Um corpo sem pintura é um corpo mudo.

            </quote>
            <div><FaQuoteRight /></div>
      
          </div>

          <div className={style.author}>
            <span > – Índios Caduveos.</span>
          </div>

        </div>
      
      </div>
    </>
  )
}

export default Home