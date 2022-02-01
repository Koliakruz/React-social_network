import classes from './Users.module.css'

let Users = (props) => {

  if(props.users.length === 0){
  props.setUsers( [
      { id: 1, photoURL: 'https://gamehag.com/static/avatar/4620693_max.jpg', followed: true, fullName: 'Bruno', status: 'drugdiller', location: { city: 'Kalush', country: 'Ukraine' } },
      { id: 2, photoURL: 'https://gamehag.com/static/avatar/4620693_max.jpg', followed: false, fullName: 'Tony', status: 'footboller', location: { city: 'London', country: 'UK' } },
      { id: 3, photoURL: 'https://gamehag.com/static/avatar/4620693_max.jpg', followed: true, fullName: 'Kolya', status: 'fisherman', location: { city: 'Kalush', country: 'Ukraine' } },
      { id: 4, photoURL: 'https://gamehag.com/static/avatar/4620693_max.jpg', followed: false, fullName: 'Valera', status: 'drugdiller too', location: { city: 'Lviv', country: 'Ukraine' } },
  ])}

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoURL} className={classes.userPhoto}/>
          </div>
          <div>
            {u.followed 
            ? <button onClick={ () => {props.unfollow(u.id)}}>UnFollow</button>
            : <button onClick={ () => {props.follow(u.id)}}>Follow</button> }
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>

      </div>)
    }

  </div>
}

export default Users;