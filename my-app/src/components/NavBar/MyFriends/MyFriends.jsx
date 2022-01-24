import NavBar from '../NavBar';
import classes from './MyFriends.module.css'

const MyFriends = (props) => {

  let sideBarElements = props.sideBarFriends.map(f => <NavBar name={f.name} />)

  return (
      <div className={classes.item}>
        Friends
        <div>
        <img src='https://gamehag.com/static/avatar/4620693_max.jpg' />
      {sideBarElements} 
      <div>
        <span> </span> 
      </div>
        </div>
      </div>
  )
}

export default MyFriends;