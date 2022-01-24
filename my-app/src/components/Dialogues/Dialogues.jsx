import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogues.module.css'
import Message from './Message/Message'

const Dialogues = (props) => {

  let dialoguesElements = props.dialogues.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElement = props.messages.map(m => <Message message={m.message} />);


  let newMessageElement = React.createRef();
  
  let addMessage = () => {
    props.addMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={classes.dialogues}>
      <div className={classes.dialoguesItem}>
        {dialoguesElements}
      </div>
      <div className={classes.messages}>
        {messagesElement}
        <div>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={props.NewMessageText}/>
          <div>
            <button onClick={addMessage}>add message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogues;