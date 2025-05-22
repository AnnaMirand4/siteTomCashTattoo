import style from '../styles/componets/imageM.module.css'

const ImageM = ({img, content }) => {
  return (
    <div className={style.container}>
    <img src={img} className={style.image} alt={content}/>
    <p className={style.name}>{content}</p>
    </div>
  )
}

export default ImageM