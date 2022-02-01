import React from 'react';
import { addMessageCreator, updateMessageCreator } from '../../redux/messages-reducer';
import Dialogues from './Dialogues';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return{
    messagePage: state.messagePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    updateMessageBody: (newMessage) => {
      dispatch(updateMessageCreator(newMessage));
    },
    addMessage: () => {
      dispatch(addMessageCreator());
    }

  }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogues);

export default DialoguesContainer; 