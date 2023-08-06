import React, {Component} from 'react';
import s from './App.module.css';
import {BrowserRouter, Redirect, Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Video from "./components/Video/Video";
import UsersContainer from "./components/Users/UsersContainer";
import {Navbar} from "./components/Navbars/Navbar";
import HeaderContainer from "./components/Headers/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "redux/app_reducer";
import {RootStateType, store} from "redux/redux-store";
import {PreLoader} from "components/common/PreLoader/PreLoader";
import {createTheme, ThemeProvider} from "@mui/material";

// import MessagesContainer from "./components/Messages/MessagesContainer";
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'))

// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

type AppType = MSTP & MDTP

class App extends Component<AppType, any> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <PreLoader/>
        }

        return (
            <div className={s.container}>
                <HeaderContainer/>
                <div className={s.body}>
                    <Navbar/>
                    <div className={s.main}>
                        <React.Suspense fallback={<PreLoader/>}>
                            {/*<Route path='/*' render={() => <Redirect to={'/profile'}/>}/>*/}
                            {/*<Route path='/profile' render={() => <ProfileContainer/>}/>*/}
                            <Route path='/' render={() => <Redirect to={'/profile'}/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/messages' render={() => <MessagesContainer/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/video' render={() => <Video/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <LoginContainer/>}/>
                        </React.Suspense>
                    </div>
                </div>
            </div>
        );
    }
}

type MSTP = {
    initialized: boolean
}

type MDTP = {
    initializeApp: () => void
}

const MSTP = (state: RootStateType) => ({
    initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(
    connect(MSTP, {initializeApp}),
    withRouter)(App)

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

export const SocialApp = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <AppContainer/>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    )
}

/*
type AppWrapperProps = {
    getAuthUsersDataTC: () => void;
};

// Define the wrapped App component using the type above
const AppWrapper: React.FC<AppWrapperProps & RouteComponentProps> = (props) => {
    const { getAuthUsersDataTC } = props;
    React.useEffect(() => {
        getAuthUsersDataTC();
        debugger;
    }, [getAuthUsersDataTC]);

    return (
        <div className={s.container}>
            {/* Rest of the JSX code }
</div>
);
};

// Define mapDispatchToProps to include the getAuthUsersDataTC function as a prop
const mapDispatchToProps = {
    getAuthUsersDataTC: () => {
        // Define your action creator logic here if needed
    },
};

// Connect the wrapped App component using the connect HOC
const ConnectedApp = connect<null, typeof mapDispatchToProps, {}, RootStateType>(
    null,
    mapDispatchToProps
)(AppWrapper);

// Wrap the connected component with withRouter to fix routing-related issues
export const AppWithRouter = withRouter(ConnectedApp);

 */