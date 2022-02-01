import React from 'react';
import { addMessageCreator, updateMessageCreator } from '../../redux/messages-reducer';
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogues.module.css'
import Message from './Message/Message'

const Dialogues = (props) => {

  let state = props.messagePage; 
  
  let dialoguesElements = state.dialogues.map(d => <DialogItem name={d.name} key = {d.id} id={d.id} />);
  let messagesElement = state.messages.map(m => <Message message={m.message} key = {m.id} />);
  let newMessageText = state.newMessageText;

  let onMessageClick = () => {
    props.addMessage();
  }

  let onNewMessageChange = (e) => {
    let newMessage = e.target.value;
    props.updateMessageBody(newMessage)
  }

  return (
    <div className={classes.dialogues}>
      <div className={classes.dialoguesItem}>
        {dialoguesElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea onChange={ onNewMessageChange } value={newMessageText} placeholder= 'Enter your message'/>
          </div>
          <div>
            <button onClick={ onMessageClick }> send </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogues;