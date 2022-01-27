const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts:
  [
    { id: 1, message: 'Hello world!', likescount: 12 },
    { id: 2, message: 'I am here', likescount: 22 },
    { id: 3, message: 'I am going to chillout', likescount: 18 },
  ],
  newPostText: ''
}


const profileReducer = (state = initialState, action) => {

  switch(action.type){
    case ADD_POST:
      let newPost = {
        id: 5, message: state.newPostText, likescount: 0
      }
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
    default:
      return state;
  }
} 

export const addPostActionCreator = () => {
  return { type: ADD_POST }
}
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer;