import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = (props) => {
  return <header className={classes.header}>
  <img src='https://cdn.dribbble.com/users/1238622/screenshots/8550645/media/572b51ee0e469a4681358e83b19628c7.jpg' />

  <div className={classes.loginBlock}>
    {props.isAuth ? props.login :
    <NavLink to={'/login'}>
      Login
    </NavLink>}
  </div>
</header>
}

export default Header;