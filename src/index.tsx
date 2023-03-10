import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {Provider} from "./StoreContext";
import {createTheme, ThemeProvider} from "@mui/material";
import {green} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: '#278A2E',
        },
        secondary: {
            main: '#0D7F19',
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



