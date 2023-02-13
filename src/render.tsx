import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {
    addMyNewMessage,
    addPost,
    onDisLikeHandler,
    onLikeHandler,
    StateType,
    updateMyNewMessage,
    updateMyPostText
} from "./redux/state";

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateMyPostText={updateMyPostText}
                 onLikeHandler={onLikeHandler}
                 onDisLikeHandler={onDisLikeHandler}
                 addMyNewMessage={addMyNewMessage}
                 updateMyNewMessage={updateMyNewMessage}/>
        </BrowserRouter>
        , document.getElementById('root'));
}




