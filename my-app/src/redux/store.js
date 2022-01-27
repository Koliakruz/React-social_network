import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello world!', likescount: 12 },
        { id: 2, message: 'I am here', likescount: 22 },
        { id: 3, message: 'I am going to chillout', likescount: 18 },
      ],
      newPostText: ''
    },

    messagePage: {
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
    },

    sideBar: [
      { id: 1, name: 'Kolya' },
      { id: 2, name: 'Bruno' },
      { id: 3, name: 'Tony' },
    ]
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messagesReducer(this._state.messagePage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;