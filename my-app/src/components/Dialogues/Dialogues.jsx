import React from 'react';
import { Navigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogues.module.css'
import AddMessageForm from './DialoguesForm';
//import AddMessageReduxForm from './DialoguesForm';
import Message from './Message/Message'

const Dialogues = (props) => {

  let state = props.messagePage;

  let dialoguesElements = state.dialogues.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />);
  let newMessageText = state.newMessageText;

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  }

  if (!props.isAuth) return <Navigate to="/login" />

  return (
    <div className={classes.dialogues}>
      <div className={classes.dialoguesItem}>
        {dialoguesElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElement}</div>
        <div>
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

export default Dialogues;