import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import {createTheme, ThemeProvider} from "@mui/material";
import App from "App";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1e88e5',
        },
        secondary: {
            main: '#FFF',
        },
    },
    typography: {
        fontSize: 14,
    },
})
//
// setInterval(() => {
//     store.dispatch({type: 'FAKE'})
// }, 1000)

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



