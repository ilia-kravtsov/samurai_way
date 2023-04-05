import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {ServerUserDataType, setAuthUserData} from "../../redux/auth_reducer";
import {RootStateType} from "../../redux/redux-store";

export type PropsType = MSTP & MDTP
type StateType = {}

class HeaderContainer extends React.Component<PropsType, StateType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
             .then(response => {
             if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data)
             }
        })
    }

    render() {
        return <Header {...this.props}/>
    }

}

type MSTP = {
    isAuth: boolean
    login: string
}
type MDTP = {
    setAuthUserData: (userData: ServerUserDataType) => void
}

const MapStateToProps = (state: RootStateType): MSTP => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer)
