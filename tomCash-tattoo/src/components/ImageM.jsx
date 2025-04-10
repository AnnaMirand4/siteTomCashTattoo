import style from '../styles/componets/imageM.module.css'

const ImageM = ({img}) => {
  return (
    <img src={img} className={style.image}/>
  )
}

export default ImageM