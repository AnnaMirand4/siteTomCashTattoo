import React from 'react'
import { FaInstagram, FaQuoteLeft, FaQuoteRight, FaRegClock, FaTiktok } from 'react-icons/fa'
import style from '../styles/pages/home.module.css'
import GoogleReviews from '../components/GoogleReviews'
import ImageM from '../components/ImageM'

import tattoo1 from '../assets/tattoos/IMG_15.jpg'
import tattoo2 from '../assets/tattoos/IMG_16.jpg'
import tattoo3 from '../assets/selos/IMGselo_5.jpg'
import Text from '../components/Text'
import Button from '../components/button'
import Subtitle from '../components/Subtitle'
import { FaLocationDot, FaLocationPin } from 'react-icons/fa6'
import ErrorBoundary from '../components/ErrorBoundary'


const Home = () => {
  return (
    <>
  
      <main className={style.home_container}>
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

        <section className={style.miniGallery_container}>
          <div className={style.miniGallery}>
            <ImageM img={tattoo1}/>
            <ImageM img={tattoo2}/>
            <ImageM img={tattoo3}/>
          </div>
          <div className={style.text_miniGallery}>
            <Text content='Que tal conhecer sobre o meu trabalho? Você pode visitar a galeria clicando no botão abaixo
              ou acessar a galeria pelo menu lá em cima. La é você esncontrará trabalhos concluídos, meu projeto com os selos
              e pode escolher uma arte para você!' />
          </div>
          <Button to='/galeira'>
            Veja a Galeria
          </Button>
        </section>

        {/*
        <section className={style.reviewsContainer}>
          <GoogleReviews />
        </section>
        */}

        <section className={style.budget_container}>
          <div className={style.text_budget}>
            <Text content='Para fazer um orçamento entre em contato através do botão abaixo. Mas se tiver dúvidas de como orçar a sua tattoo confira a seção de orçamento
            no menu. Lembrando que você pode escolher uma das artes disponíveis para tatuar e ela será só sua!' />
          </div>
          <div className={style.buttons_budget}>
          <Button 
          to="https://instagram.com/seu-perfil" 
          isExternal={true}>
            Entre em contato
          </Button>
          <Button to='/orçamento'>
            Faça um orçamento
          </Button>

          </div>
        </section>

        <section className={style.localization}>
          <Subtitle content='Saiba onde me encontrar, acompanhe minhas redes' />
          <div className={style.card_container}>

            <div className={style.card}>
              <FaLocationDot className={style.icon} />
              <p className={style.text_card}>
                Atualmente tatuando no Salvador TattooStudio, mesma localização. <br/>
                na sala 106!
              </p>
            </div>
            <div className={style.card}>
              <a href="https://www.instagram.com/tomcashtattoo/" target="_blank" alt="Instagram" className={style.icon_link}> <FaInstagram/> </a>
              <p className={style.text_card}>
              Acesse meu instagram e fique por dentro das novidades
              </p>
            </div>
            <div className={style.card}>
              <a href="https://www.tiktok.com/@tomcashtattoo?_t=ZM-8unKGzLw2Lv&_r=1 " target="_blank" alt="Tiktok" className={style.icon_link}> <FaTiktok /> </a>
              <p className={style.text_card}>
              Alguns processos são postados no TikTok
              </p>
            </div>
            <div className={style.card}>
              <FaRegClock className={style.icon} />
              <p className={style.text_card}>
              Horario de atendimento: <br/> 8h às 12h <br/> 14 às 18h <br/> de Segunda a Sábado
              </p>
            </div>
          </div>
          <div className={style.map}>
            <ErrorBoundary>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.418142504204!2d-38.526958600000015!3d-13.009023199999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035be7e33827%3A0xe5f3592c4f508fed!2sTomCashTattoo!5e0!3m2!1spt-BR!2sbr!4v1743624412139!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </ErrorBoundary>
          </div>
        </section>

      </main>
    </>
  )
}

export default Home