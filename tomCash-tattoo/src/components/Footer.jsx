import style from '../styles/componets/footer.module.css'
import {BsInstagram , BsTiktok } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
    <div className={style.footer_container}>

      <div className={style.footer_text}>
         <p>Copyright© 2025 TomCash Tattoo | Desenvolvido por <a href="https://www.linkedin.com/in/anna-caroline-miranda-martins/" target="_blank" alt="Anna LinkedIn"> Anna </a></p>
        
      </div>

      <div className={style.social_media}>
        <a href="https://www.instagram.com/tomcashtattoo/" target="_blank" alt="Instagram"> <BsInstagram /> </a>
        <a href="https://www.tiktok.com/@tomcashtattoo?_t=ZM-8unKGzLw2Lv&_r=1 " target="_blank" alt="Tiktok"> <BsTiktok /> </a>
      </div>

    </div>
    </footer>
  )
}

export default Footer