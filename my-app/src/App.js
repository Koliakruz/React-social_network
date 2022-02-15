import './App.css';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route } from 'react-router-dom';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainet from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainet />
      <NavBar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogues/*' element={<DialoguesContainer />} />
          {/* <Route path='/profile/:userId' element={<ProfileContainer />} /> */}
          <Route path='/profile/*' element={<ProfileContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;