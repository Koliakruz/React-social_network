import { rerenderEntireTree } from "../render";

let state = {
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

  // sideBar: [
  //   {id: 1, name: 'Kolya'},
  //   {id: 2, name: 'Bruno'},
  //   {id: 3, name: 'Tony'},
  // ]
}

export let addPost = () => {
  let newPost = {
    id: 5, message: state.profilePage.newPostText, likescount: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let addMessage = () => {
  let newMessage = {
    id: 4, message: state.messagePage.newMessageText
  }
  state.messagePage.posts.push(newMessage);
  state.messagePage.newMessageText = '';
  rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
  state.messagePage.newMessageText = newText;
  rerenderEntireTree(state);
}

export default state;