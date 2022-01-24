import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://gamehag.com/static/avatar/4620693_max.jpg' />
      {props.message}
      <div>
        <span>like </span> {props.likescount}
      </div>
    </div>
  )
}

export default Post;