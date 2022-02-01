const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
  dialogues: [
    { id: 1, name: 'Kolya' },
    { id: 2, name: 'Bruno' },
    { id: 3, name: 'Tony' },
    { id: 4, name: 'Jeck' },
    { id: 5, name: 'Valera' },
    { id: 6, name: 'Jessica' }
  ],
  messages: [
    { id: 1, message: 'Hey, bro!' },
    { id: 2, message: 'How is you going?' },
    { id: 3, message: 'Would you like to meet up?' },
  ],
  newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return { 
        ...state,
        newMessageText: action.newMessage
       }
    case SEND_MESSAGE:
      let newMessage = state.newMessageText;
      return { 
        ...state,
        newMessageText: '',
        messages: [...state.messages, { id: 4, message: newMessage }],
        }
    default:
      return state;
  }
}

export const addMessageCreator = () => {
  return { type: SEND_MESSAGE }
}
export const updateMessageCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text }
}


export default messagesReducer;