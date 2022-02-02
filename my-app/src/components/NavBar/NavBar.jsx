import { NavLink } from 'react-router-dom';
import MyFriends from './MyFriends/MyFriends';
import classes from './NavBar.module.css'

const NavBar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' className={SelectedLink()}>Profile </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogues' className={SelectedLink()}>Message</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/users' className={SelectedLink()}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' className={SelectedLink()}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' className={SelectedLink()}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' className={SelectedLink()}>Settings</NavLink>
      </div>
      <div>
        {/* <MyFriends friends = {props.name}/>  */}
      </div>
    </nav>
  )
}

const SelectedLink = () => {
  return (
    select => select.isActive ? classes.activeLink : classes.item
  )
}

export default NavBar;