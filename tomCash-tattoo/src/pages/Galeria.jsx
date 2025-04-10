import PhotoGallery from '../components/PhotoGallery'
import style from '../styles/pages/galeria.module.css'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'

import tattooPhoto from '../data/tattooPhoto'
import tattooSelos from '../data/tattooSelos'



const Galeria = () => {
  return (
    <main className={style.galleryContainer}>
      <section className={style.sectionGallery}>

        <Title content= 'Conheça meu trabalho' />
        <Text content= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Accusantium, sed nihil ducimus rerum doloremque cupiditate repellendus facilis repudiandae maxime non, quo necessitatibus aliquid blanditiis voluptatum. 
            Vitae odit autem modi accusantium?' />

        <article className={style.articleGallery}>
          <Subtitle content= 'Aqui alguns trabalhos já feitos' />
          <Text content='Conheça tatuagens que os clientes amaram' />
          <PhotoGallery 
            images={tattooPhoto} />
        </article>

        <article className={style.articleGallery}>
          <Subtitle content= 'Conheça meu projeto: Os Selos' />
          <Text content='Tenho um projeto que consiste em tatuar selos que remetem memórias ou obras de arte, 
          confira alguns trabalhos' />
          <PhotoGallery images={tattooSelos} />
        </article>

        
      </section>
    </main>
  )
}

export default Galeria