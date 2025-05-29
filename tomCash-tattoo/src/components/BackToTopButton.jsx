import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "../styles/componets/backToTopButton.module.css"; 

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.backToTopButton} ${isVisible ? styles.visible : ""}`}
      aria-label="Voltar ao topo"
    >
      <FaArrowUp size={16} />
    </button>
  );
};

export default BackToTopButton;