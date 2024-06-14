import {Link} from "react-router-dom";
import css from './Header.module.css'
const Header = () => {
    return (
        <div className={css.Header}>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </div>
    );
};

export {Header};