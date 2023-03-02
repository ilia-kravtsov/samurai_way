import React from 'react';
import './App.css';
import Header from "./components/Headers/Header";
import Navbar from "./components/Navbars/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
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
                    <Route path='/profile' render={() => <Profile profilePageState={state.profilePage}
                                                                  images={state.images}
                                                                  addPost={props.store.addPost.bind(props.store)}
                                                                  newPostText={state.profilePage.newPostText}
                                                                  updateMyPostText={props.store.updateMyPostText.bind(props.store)}
                                                                  onLikeHandler={props.store.onLikeHandler.bind(props.store)}
                                                                  onDisLikeHandler={props.store.onDisLikeHandler.bind(props.store)}/>}/>
                    <Route path='/messages' render={() => <Messages messagesPage={state.messagesPage}
                                                                    images={state.images}
                                                                    addMyNewMessage={props.store.addMyNewMessage.bind(props.store)}
                                                                    updateMyNewMessage={props.store.updateMyNewMessage.bind(props.store)}
                                                                    myNewMessageText={state.messagesPage.myNewMessageText}/>}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                    <Route path='/video' render={() => <Video />}/>
                </div>
            </div>
    );
}

export default App;


