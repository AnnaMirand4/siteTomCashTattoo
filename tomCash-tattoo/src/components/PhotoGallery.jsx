import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import style from '../styles/componets/photoGallery.module.css'



const PhotoGallery = ({images}) => {
  return (
    <div className={style.gallery}>
      <ImageGallery 
        items={images}
        thumbnailPosition="bottom"
        showPlayButton={false} 
        showFullscreenButton={window.innerWidth > 768} 
        slideInterval={5000}
        slideOnThumbnailOver={true}
        showNav={true}
        autoPlay={false}
      />
    </div>
  )
}

export default PhotoGallery