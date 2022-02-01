import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer"
import messagesReducer from "./messages-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./user-reducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messagesReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer
});
let store = createStore(reducers);

export default store;