import image from '../assets/logo1.png'
import style from '../styles/componets/logo.module.css'

const Logo = () => {
  return (
    <div className={style.logo}>
        <img src={image} className={style.image_logo} alt="Logo do Tom Cash Tattoo"/>
    </div>
  )
}

export default Logo