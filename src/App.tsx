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
import {StateAppType} from "./redux/state";

const App = (props: StateAppType) => {

    return (
            <div className='app_wrapper'>
                <Header/>
                <Navbar friendName={props.state.messagesPage.companionsData} images={props.state.images}/>
                <div className='app_wrapper_content'>
                    <Route path='/profile' render={() => <Profile profilePageState={props.state.profilePage}
                                                                  images={props.state.images}
                                                                  addPost={props.addPost}
                                                                  newPostText={props.state.profilePage.newPostText}
                                                                  updateMyPostText={props.updateMyPostText}
                                                                  onLikeHandler={props.onLikeHandler}
                                                                  onDisLikeHandler={props.onDisLikeHandler}/>}/>
                    <Route path='/messages' render={() => <Messages messagesPage={props.state.messagesPage}
                                                                    images={props.state.images}
                                                                    addMyNewMessage={props.addMyNewMessage}
                                                                    updateMyNewMessage={props.updateMyNewMessage}
                                                                    myNewMessageText={props.state.messagesPage.myNewMessageText}/>}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                    <Route path='/video' render={() => <Video />}/>
                </div>
            </div>
    );
}

export default App;


