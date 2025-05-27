import style from '../styles/componets/title.module.css';
import { useEffect, useRef } from 'react';

const Title = ({content}) => {

  const titleRef = useRef();
  const textRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <h1 ref={titleRef} className={style.title}>{content}</h1>
  )
}

export default Title