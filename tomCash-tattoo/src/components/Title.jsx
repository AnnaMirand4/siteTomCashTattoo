import style from '../styles/componets/title.module.css';

const Title = ({content}) => {
  return (
    <h1 className={style.title}>{content}</h1>
  )
}

export default Title