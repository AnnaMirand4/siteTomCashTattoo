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
        <Title content='Termos e condições para orçamento, agendamento e pagamento de tatuagem:'/>
      </div>

      <div className={style.steps}>

        <div className={style.steps_content}>
          <Subtitle content='1- Orçamento Aprovado:'/> <Text content='para que possamos desenvolver sua arte especialmente pra você e deixarmos tudo preparado para te atender um sinal será cobrado para confirmação do serviço:
            30% do valor total caso a arte já esteja pronta, com ajustes pequenos.
            50% do valor total caso a arte seja autoral e necessite ser criada do início.
            Processo Criativo: Para artes autorais, após o pagamento do sinal:
            Esboços serão enviados para alinhamento de expectativas entre as partes.
            A arte final será enviada com até 24 horas de antecedência da data do procedimento.'/>
        </div>

        <div className={style.steps_content}>
          <Subtitle content='2- Agendamento'/> <Text content='Pagamento do Sinal:
            A data e horário escolhidos para o procedimento só serão confirmados mediante o pagamento do sinal (e0% ou 50%, conforme descrito acima).
            O cliente deverá realizar o pagamento do sinal no ato do agendamento, garantindo a reserva do horário.
            O pagamento do sinal deve ser realizado via Pix ou transferência bancária.'/>
        </div>

        <div className={style.steps_content}>
          <Subtitle content='3. Pagamento'/> <Text content='Pagamento do Procedimento : O saldo do valor total da tatuagem deverá ser quitado no dia do procedimento.
            Mesmo para tatuagens que necessitam de mais de uma sessão, o valor integral da tatuagem também deve ser pago antes do início da primeira sessão
            Formas de Pagamento: 
            Pix/transferência bancária ou dinheiro.
            Cartões de débito.
            Cartões de crédito (parcelamento em até 12x, com juros).
            Observações Importantes'/>
        </div>

        <div className={style.steps_alert}>
          <Subtitle content='Atenção'/> <Text content='O valor do sinal não é reembolsável em casos de desistência por parte do cliente, salvo em situações previamente discutidas e acordadas.
            Alterações no agendamento devem ser comunicadas com antecedência.'/>
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