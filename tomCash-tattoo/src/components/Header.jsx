import style from '../styles/componets/header.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';



import image1 from'@/assets/optimized/IMG_22.jpg'
import image2 from '@/assets/optimized/IMG_19.jpg'
import image3 from '@/assets/optimized/IMGselo_5.jpg'


function Header() {

  const images= [image1, image2, image3];

  return (
    <>
    <header className={style.header_container}>
        <Swiper
          className={style.swiper}
          spaceBetween={0}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {images.map((image, index) =>(
            <SwiperSlide key={index}>
              <img 
                src={image}
                alt={`Slide ${index +1}`}
                className={style.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </header>
    </>
  )
}

export default Header