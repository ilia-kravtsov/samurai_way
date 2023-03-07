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
import Messages from "./components/Messages/Messages";
import {StoreType} from "./redux/state";

type AppType = {
    store: StoreType
}

const App: React.FC<AppType> = (props) => {

    const state = props.store.getState();

    return (
            <div className='app_wrapper'>
                <Header/>
                <Navbar friendName={state.messagesPage.companionsData} images={state.images}/>
                <div className='app_wrapper_content'>
                    <Route path='/' render={() => <Redirect to={'/profile'}/>}/>
                    <Route path='/profile' render={() => <Profile profilePageState={state.profilePage}
                                                                  images={state.images}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                                  newPostText={state.profilePage.newPostText}
                    />}/>
                    <Route path='/messages' render={() => <Messages messagesPage={state.messagesPage}
                                                                    images={state.images}
                                                                    dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                    <Route path='/video' render={() => <Video />}/>
                </div>
            </div>
    );
}

export default App;


