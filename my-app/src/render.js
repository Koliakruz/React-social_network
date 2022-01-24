import { BrowserRouter } from "react-router-dom"
import React from "react"
import ReactDOM from 'react-dom';
import state from "./redux/state"
import App from "./App"
import { addPost, updateNewPostText,  } from "./redux/state"

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
    <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
    </BrowserRouter>, document.getElementById('root'));
} 