import style from '../styles/componets/subtitle.module.css'

import { useEffect, useRef } from 'react';

const Subtitle = ({content}) => {

  const subTitleRef = useRef();
  const textRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
        }
      });
    }, { threshold: 0.1 });

    if (subTitleRef.current) observer.observe(subTitleRef.current);

    return () => {
      if (subTitleRef.current) observer.unobserve(subTitleRef.current);
    };
  }, []);

  return (
    <h3 ref={subTitleRef} className={style.subtitle}>{content}</h3>
  )
}

export default Subtitle