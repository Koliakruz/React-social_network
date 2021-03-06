import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.usersID) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.usersID) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.usersID]
          : state.followingInProgress.filter(id => id !== action.usersID)
      }
    }
    default:
      return state;
  }
}

export const followSuccess = (usersID) => ({ type: FOLLOW, usersID })
export const unfollowSuccess = (usersID) => ({ type: UNFOLLOW, usersID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, usersID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, usersID })

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    })
  }
}

export const follow = (usersID) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, usersID));
    userAPI.follow(usersID).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(usersID))
      }
      dispatch(toggleFollowingProgress(false, usersID));
    })
  }
}

export const unfollow = (usersID) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, usersID));
    userAPI.unfollow(usersID).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(usersID))
      }
      dispatch(toggleFollowingProgress(false, usersID));
    })
  }
}

export default usersReducer;