import classes from './MyPosts.module.css'
import Post from './Post/Post';
import AddPostForm from './MyPostsForm';

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likescount={p.likescount} />)

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={classes.postblock}>
      <AddPostForm onSubmit={addNewPost}/>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;