import './App.css';
import Dialogues from './components/Dialogues/Dialogues';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar friends={props.state.sideBar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogues/*' element={<Dialogues
            dialogues={props.state.messagePage.dialogues}
            messages={props.state.messagePage.messages}
            addMessage = {props.addMessage}
            newMessageText = {props.state.messagePage.newMessageText} 
            updateNewMessageText = {props.updateNewMessageText} />} />
          <Route path='/profile' element={<Profile
            posts={props.state.profilePage.posts}
            newPostText={props.state.profilePage.newPostText}
            updateNewPostText={props.updateNewPostText}
            addPost={props.addPost} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;