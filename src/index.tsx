import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
        , document.getElementById('root'));
}

rerenderEntireTree()
store.subscribeToRerenderEntireTree(rerenderEntireTree)



