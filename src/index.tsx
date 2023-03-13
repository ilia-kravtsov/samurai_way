import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {Provider} from "./StoreContext";
import {createTheme, ThemeProvider} from "@mui/material";

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

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                <App/>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
        , document.getElementById('root'));
}

rerenderEntireTree();
store.subscribe(() => rerenderEntireTree());



