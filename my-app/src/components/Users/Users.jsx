import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';


let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 15) {
      pages.push(i);
    }
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span className={props.currentPage === p && classes.selectedPage}
          onClick={() => { props.onPageChanged(p) }}>{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} />
            </NavLink>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                  { withCredentials: true, headers: { "API-KEY": "7605bccb-a49f-4971-a51b-bd789708e384" } })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id)
                    }
                  })
              }}>UnFollow</button>

              : <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                  { withCredentials: true, headers: { "API-KEY": "7605bccb-a49f-4971-a51b-bd789708e384" } })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id)
                    }
                  })
              }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;