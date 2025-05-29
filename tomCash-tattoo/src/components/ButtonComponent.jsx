import { Link } from "react-router-dom"
import style from '../styles/componets/buttonComponent.module.css'


const ButtonComponent = ({
    to,
    children,
    isExternal = false,
    onclick
}) => {

    if (isExternal) {
        return(
            <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className = {style.btn}
                onClick={onclick}
            >
                {children}
            </a>
        )
    };

    return(
        <Link
            to={to}
            onClick={onclick}
            className = {style.btn}
        >
            {children}
        </Link>
    );
};

export default ButtonComponent