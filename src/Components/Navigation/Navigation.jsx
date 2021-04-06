import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={style.link}
        activeClassName={style.activeLink}
      >
        Homepage
      </NavLink>

      <NavLink
        to="/posts"
        exact
        className={style.link}
        activeClassName={style.activeLink}
      >
        Posts
      </NavLink>

      <NavLink
        to="/posts/:id"
        className={style.link}
        activeClassName={style.activeLink}
      >
        Current post
      </NavLink>
    </nav>
  );
};

export default Navigation;
