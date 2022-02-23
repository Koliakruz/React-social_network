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
  ]
}

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = action.newMessageText;
      return { 
        ...state,
        messages: [...state.messages, { id: 4, message: newMessage }],
        }
    default:
      return state;
  }
}

export const addMessageCreator = (newMessageText) => {
  return { type: SEND_MESSAGE, newMessageText }
}

export default messagesReducer;