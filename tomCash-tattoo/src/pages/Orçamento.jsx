import Text from '../components/Text'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import style from '../styles/pages/orçamento.module.css'
import { IoLogoWhatsapp } from 'react-icons/io'


const Orçamento = () => {
  return (
    <>
    <main className={style.main_container}>

    <section className={style.budget_container}>

      <Title content='Vamos fazer um orçamento?' />

      <Text content='Cada tatuagem é única — e o orçamento também. O valor de um trabalho é definido com base em diversos fatores, como o tamanho da peça, o nível de detalhamento, a localização no corpo, o tempo estimado de execução e o estilo escolhido.
        Para oferecer um orçamento justo e personalizado, é importante entender o que você deseja. Por isso, os pedidos de orçamento são feitos a partir de um formulário simples, onde você descreve sua ideia, envia referências visuais (se tiver) e informa onde gostaria de tatuar.
        Após o envio, analisamos com atenção e respondemos com o valor estimado e outras informações importantes para a realização do trabalho.
        O mais importante: aqui, respeitamos o seu tempo, seu corpo e seu processo. Cada proposta é pensada com cuidado — para que você se sinta seguro, acolhido e satisfeito com cada etapa da experiência.'/>
    </section>

    <section className={style.steps_container}>

      <div className={style.steps_title}>
        <Title content='Vamos ao passo a passo para construir seu orçamento'/>
      </div>

      <div className={style.steps}>

        <div className={style.steps_content}>
          <Subtitle content='1.'/> <Text content='Entre em contato, se identique e envie sua ideia'/>
        </div>

        <div className={style.steps_content}>
          <Subtitle content='2.'/> <Text content='Descreva detalhes e envie referênicas visais, se tiver'/>
        </div>

        <div className={style.steps_content}>
          <Subtitle content='3.'/> <Text content='Me informe em qual área do corpo pretende tatuar e o tamanho da tattoo'/>
        </div>

        <div className={style.steps_content}>
          <Subtitle content='4.'/> <Text content='Te informo valores e cuidados pré tatuagem'/>
        </div>

        <div className={style.steps_content}>
          <Subtitle content='5.'/> <Text content='Marcamos um horário e data'/>
        </div>

      </div>

    </section>

    <section className={style.contact}>
      <Subtitle content='Fale comigo'/>
      <a href='https://wa.me/5574988610287' target='_blank' alt='instagram'><IoLogoWhatsapp className={style.icon_contact}/></a>  
      
    </section>

    </main>
    </>
  )
}

export default Orçamento