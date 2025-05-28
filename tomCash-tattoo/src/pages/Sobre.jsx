import style from '../styles/pages/sobre.module.css'
import Title from '@components/Title.jsx'
import Text from '@components/Text.jsx'
import img1 from '@assets/tatuador e studio/airton1.png'
import img2 from '@assets/tatuador e studio/airton2.png'
import { useEffect, useRef } from 'react';
import 'animate.css';
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import images from '../data/studioPhoto'
import Subtitle from '@components/Subtitle.jsx'



const Sobre = () => {

  const textRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const images = entry.target.querySelectorAll('img');
            images[0]?.classList.add('animate__animated', 'animate__fadeInLeft');
            images[1]?.classList.add('animate__animated', 'animate__fadeInRight');
          }
        });
      },
      { threshold: 0.1 }
    );

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>

    <main className={style.container}>

      <section className={style.sobre}> 

        <Title content= 'Quem é o Tatuador'/>

        <div className={style.text_container}ref={el => textRefs.current[0] = el}>

          <Text className={style.text} content= 'Sou co-proprietário do estúdio Salvador Tattoo e atuo como tatuador há alguns anos. Minha formação artística e trajetória profissional sempre foram pautadas pela busca de autenticidade e qualidade em cada trabalho. Acredito que tatuar é também escutar, entender histórias e transformar sentimentos em traços e cores permanentes.
            Na tatuagem, sou fascinado pela tradução colocada na pele da minha técnica com o pensamento do outro. Existe algo poderoso nessa troca: onde eu posso sintetizar algo pensado por alguém e traduzir isso em algo feito especialmente para ela.
            Utilizo técnicas exclusivas que desenvolvi ao longo do tempo, como sobreposições sutis de linhas para criar texturas delicadas, sombras rasteladas que remetem à densidade da tinta a óleo, e a fusão entre traço fino e pontilhismo para dar leveza a composições mais densas.
            Todo o processo é feito respeitando o tempo e o conforto de cada pessoa, com pausas sempre que necessário. A experiência precisa ser leve e segura — tanto física quanto emocionalmente.
            ' 
          />

          <img src={img1} className={style.image}/>
          
        </div>

        <div className={style.text_container}ref={el => textRefs.current[1] = el}>

            <img src={img2} className={style.image}/>

            <Text className={style.text} content= 'Trabalho com uma variedade de estilos com os quais me identifico profundamente — entre eles, boldline, old school, traços inspirados em animes e desenhos autorais. Também exploramos misturas criativas de estilos, como realismo com elementos gráficos ou traços minimalistas combinados com texturas orgânicas, o que permite entregar tatuagens verdadeiramente únicas.
            Gosto especialmente de usar cor como se estivesse pintando um quadro com tinta a óleo — com profundidade, textura e intenção. Essa diversidade permite que cada pessoa encontre um estilo que converse com sua identidade e história — sempre com acompanhamento técnico e artístico especializado.
            Mais do que estética, cada tatuagem pode ser um gesto de afirmação, uma escolha que carrega memória, sentimento ou até mesmo um posicionamento político e social. Tatuar é transformar pensamento em imagem, ideia em presença viva sobre a pele.
            '
            />
          
        </div>
      </section>

      <section className={style.studio_container}>
      
      <div className={style.studio_text}>

        <Title content='Salvador Tattoo Studio'/>

        <Text content='O Salvador Tattoo é um estúdio que fundei com outros profissionais apaixonados pela arte da tatuagem. Localizado na Barra, um dos bairros mais icônicos de Salvador, com vista privilegiada para o mar e o Farol — um verdadeiro cartão-postal da cidade. O estúdio foi pensado para oferecer uma experiência completa, unindo excelência artística, conforto e bem-estar.
        Cada detalhe do espaço foi projetado para acolher com cuidado, com ambiente climatizado, iluminação natural, vista inspiradora e estrutura profissional de alto padrão. Nosso compromisso é garantir não só uma tatuagem de qualidade, mas também um momento agradável, seguro e inesquecível para quem nos visita.'/>

      </div>

      <div className={style.studio_gallery}>

        <div className={style.gallery}>
          <ImageGallery 
            items={images}
            thumbnailPosition="bottom"
            showPlayButton={false} 
            showFullscreenButton={window.innerWidth > 768} 
            slideInterval={5000}
            slideOnThumbnailOver={false}
            showNav={false}
            autoPlay={true}
          />
        </div>

        <div className={style.gallery_text}>
          <Subtitle content='Um lugar seguro, confortável e cheio de estilo'/>
        </div>

      </div>
      
      </section>

    </main>
    </>
  )
}

export default Sobre