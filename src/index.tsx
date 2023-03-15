import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {createTheme, ThemeProvider} from "@mui/material";
import {Provider} from "react-redux";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1e88e5',
        },
        secondary: {
            main: '#FFF',
        },
        mode: 'light'
    },
    typography: {
        fontSize: 14,
    },
})

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
            <App/>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// export let rerenderEntireTree = () => {
// store.subscribe(() => rerenderEntireTree());



