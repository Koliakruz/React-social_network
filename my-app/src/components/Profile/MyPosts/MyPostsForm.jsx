import { Form, Field } from "react-final-form"
// import { maxLengthCreator, require } from "../../../utils/validators/validators"
import classes from './MyPosts.module.css'

// const require = (value) => {
//   if (value) return undefined
//   return "Field is required"
// }

// const maxLengthCreator = (maxLength) => value => {
//   if (value.length > maxLength) return `Max lenght is ${maxLength} symbols`;
//   return undefined;
// }

const AddPostForm = (props) => (
  <Form
    onSubmit={props.onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className={classes.postblock}>
          <h3>My posts</h3>
          <div>
            <Field component={"textarea"} name={"newPostText"} placeholder="Enter your message" />
          </div>
          <div>
            <button type="submit">Add post</button>
          </div>
        </div>
      </form>
    )}
  />
)

export default AddPostForm;