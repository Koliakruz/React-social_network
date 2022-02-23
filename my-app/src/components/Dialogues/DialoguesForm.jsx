import { Form, Field } from 'react-final-form';


const AddMessageForm = (props) => (
  <Form
    onSubmit={props.onSubmit}
    // validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <Field component={"textarea"} name={"newMessageText"} placeholder="Enter your message" />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    )}
  />
)

export default AddMessageForm;






//import { Field, reduxForm } from 'redux-form';

// const AddMessageForm = (props) => {
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <div>
//         <Field component={"textarea"} name={"newMessageText"} placeholder="Enter your message" />
//       </div>
//       <div>
//         <button> send </button>
//       </div>
//     </form>
//   )
// }

//const AddMessageReduxForm = reduxForm({ form: 'DialoguesAddMessageForm' })(AddMessageForm)
