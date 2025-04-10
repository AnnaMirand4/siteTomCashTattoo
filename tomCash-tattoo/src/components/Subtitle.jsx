import style from '../styles/componets/subtitle.module.css'

const Subtitle = ({content}) => {
  return (
    <h3 className={style.subtitle}>{content}</h3>
  )
}

export default Subtitle