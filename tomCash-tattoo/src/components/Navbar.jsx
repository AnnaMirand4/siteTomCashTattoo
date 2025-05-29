import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Ícones do menu hamburguer
import style from '../styles/componets/navbar.module.css';
import logoImage from '../assets/optimized/logo1.webp';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navbar padrão (telas grandes) */}
      <nav className={style.navbar_container}>
        <li>
          <Link className={style.navbar_Link} to="/">Home</Link>
        </li>
        <li>
          <Link className={style.navbar_Link} to="/sobre">Sobre</Link>
        </li>
        <li className={style.logo}>
          <img src={logoImage} alt="Logo" className={style.image_logo} />
        </li>
        <li>
          <Link className={style.navbar_Link} to="/galeira">Galeria</Link>
        </li>
        <li>
          <Link className={style.navbar_Link} to="/orçamento">Orçamento</Link>
        </li>
      </nav>

      {/* Ícone do menu hamburguer (somente no mobile) */}
      <div className={style.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Menu hamburguer (somente no mobile) */}
      <div className={`${style.mobileMenu} ${menuOpen ? style.open : ''}`}>
        <li className={style.logo}>
          <img src={logoImage} alt="Logo" className={style.image_logo} />
        </li>
        <Link className={style.mobile_Link} to="/" onClick={toggleMenu}>Home</Link>
        <Link className={style.mobile_Link} to="/sobre" onClick={toggleMenu}>Sobre</Link>
        <Link className={style.mobile_Link} to="/galeira" onClick={toggleMenu}>Galeria</Link>
        <Link className={style.mobile_Link} to="/orçamento" onClick={toggleMenu}>Orçamento</Link>
      </div>
    </>
  );
};

export default Navbar;


/*const Navbar = () => {
  return (
    <nav className={style.navbar_container}>
        <li>
            <Link className={style.navbar_Link} to='/'>Home</Link>
        </li>
        <li>
            <Link className={style.navbar_Link} to='/sobre'>Sobre</Link>
        </li>
        <li className={style.logo}>
        <img 
          src={logoImage} 
          alt="Logo" 
          className={style.image_logo} 
        />
        </li>
        <li>
            <Link className={style.navbar_Link} to='/galeira'>Galeria</Link>
        </li>
        <li>
            <Link className={style.navbar_Link} to='/orçamento'>Orçamento</Link>
        </li>

    </nav>
  )
}

export default Navbar*/