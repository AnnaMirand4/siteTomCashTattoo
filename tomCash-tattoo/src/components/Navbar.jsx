import {Link} from 'react-router-dom'
import style from '../styles/componets/navbar.module.css'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className={style.navbar_container}>
        <li>
            <Link className={style.navbar_Link} to='/'>Home</Link>
        </li>
        <li>
            <Link className={style.navbar_Link} to='/sobre'>Sobre</Link>
        </li>
        <Logo className= {style.logo}/>
        <li>
            <Link className={style.navbar_Link} to='/galeira'>Galeria</Link>
        </li>
        <li>
            <Link className={style.navbar_Link} to='/orçamento'>Orçamento</Link>
        </li>

    </nav>
  )
}

export default Navbar