
import css from './Header.module.css';
import {NavLink} from "react-router-dom";
const HeaderComponent = () => {
    return (
        <div className={`${css.Header}`}>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comment</NavLink>

        </div>
    );
};

export {HeaderComponent};