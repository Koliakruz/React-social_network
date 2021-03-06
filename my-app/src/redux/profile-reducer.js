import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts:
    [
      { id: 1, message: 'Hello world!', likescount: 12 },
      { id: 2, message: 'I am here', likescount: 22 },
      { id: 3, message: 'I am going to chillout', likescount: 18 },
    ],
  profile: null,
  status: ""
}


const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5, message: action.newPostText, likescount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText }
}
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile }
}
export const setStatus = (status) => {
  return { type: SET_STATUS, status }
}
export const getUserProfile = (usersID) => (dispatch) => {
  userAPI.getProfile(usersID).then(response => {
    dispatch(setUserProfile(response.data))
  })
}
export const getStatus = (usersID) => (dispatch) => {
  profileAPI.getStatus(usersID).then(response => {
    dispatch(setStatus(response.data))
  })
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}

export default profileReducer;