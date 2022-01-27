import React from 'react';
import { addMessageCreator, updateMessageCreator } from '../../redux/messages-reducer';
import Dialogues from './Dialogues';


const DialoguesContainer = (props) => {

  let state = props.store.getState().messagePage; 

  let onMessageClick = () => {
    props.store.dispatch(addMessageCreator());
  }

  let onNewMessageChange = (newMessage) => {
    props.store.dispatch(updateMessageCreator(newMessage));
  }

  return (
    <Dialogues updateMessageBody = {onNewMessageChange} addMessage = {onMessageClick} messagePage = {state}/>
  )
}

export default DialoguesContainer; 