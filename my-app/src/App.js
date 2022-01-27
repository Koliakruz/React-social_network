import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route } from 'react-router-dom';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar friends={props.state.sideBar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogues/*' element={<DialoguesContainer store={props.store} />} />
          <Route path='/profile' element={<Profile store={props.store} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;