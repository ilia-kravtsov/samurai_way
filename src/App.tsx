import React from 'react';
import './App.css';
import Header from "./components/Headers/Header";
import Navbar from "./components/Navbars/Navbar";
import Profile from "./components/Profile/Profile";
import {Redirect, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Video from "./components/Video/Video";
import MessagesContainer from "./components/Messages/MessagesContainer";

type AppType = {

}

const App: React.FC<AppType> = (props) => {

    return (
            <div className='app_wrapper'>
                <Header/>

                <div className='app_wrapper_content'>
                    <Navbar/>
                    <Route path='/' render={() => <Redirect to={'/profile'}/>}/>
                    <Route path='/*' render={() => <Redirect to={'/profile'}/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/messages' render={() => <MessagesContainer/>}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                    <Route path='/video' render={() => <Video />}/>
                </div>
            </div>
    );
}

export default App;


