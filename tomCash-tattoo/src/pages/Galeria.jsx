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
        <div>
        <Title content= 'Conheça meu trabalho' />
        </div>
        <Text content= 'Trabalho com uma variedade de estilos com os quais me identifico profundamente — entre eles, boldline, old school, traços inspirados em animes e desenhos autorais. Também exploramos misturas criativas de estilos, como realismo com elementos gráficos ou traços minimalistas combinados com texturas orgânicas, o que permite entregar tatuagens verdadeiramente únicas.
          Gosto especialmente de usar cor como se estivesse pintando um quadro com tinta a óleo — com profundidade, textura e intenção. Essa diversidade permite que cada pessoa encontre um estilo que converse com sua identidade e história — sempre com acompanhamento técnico e artístico especializado.
          Mais do que estética, cada tatuagem pode ser um gesto de afirmação, uma escolha que carrega memória, sentimento ou até mesmo um posicionamento político e social. Tatuar é transformar pensamento em imagem, ideia em presença viva sobre a pele.'/>

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