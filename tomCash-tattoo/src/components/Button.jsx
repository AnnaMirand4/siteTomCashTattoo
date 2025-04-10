import { Link } from "react-router-dom"
import style from '../styles/componets/button.module.css'


const Button = ({
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
                className = {style.button}
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
            className = {style.button}
        >
            {children}
        </Link>
    );
};

export default Button