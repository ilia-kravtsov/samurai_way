import React, {Component} from 'react';
import s from './App.module.css';
import {Redirect, Route, RouteComponentProps, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Video from "./components/Video/Video";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Navbar} from "./components/Navbars/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Headers/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {getAuthUsersDataTC} from "redux/auth_reducer";
import {compose} from "redux";
import {initializeApp} from "redux/app_reducer";
import {RootStateType} from "redux/redux-store";
import {PreLoader} from "components/common/PreLoader/PreLoader";

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
                        {/*<Route path='/*' render={() => <Redirect to={'/profile'}/>}/>*/}
                        {/*<Route path='/profile' render={() => <ProfileContainer/>}/>*/}
                        {/*<Route path='/' render={() => <Redirect to={'/profile'}/>}/>*/}
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/messages' render={() => <MessagesContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/video' render={() => <Video/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
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

export default compose<React.ComponentType>(
    connect(MSTP, {initializeApp}),
    withRouter)(App)



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