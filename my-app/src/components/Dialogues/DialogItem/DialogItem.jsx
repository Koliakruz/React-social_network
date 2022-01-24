import classes from './../Dialogues.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {

  let path = '/dialogues/' + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>

  )
}

export default DialogItem;