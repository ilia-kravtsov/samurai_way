import React from "react";
import {connect} from "react-redux";
import {Login, LoginFormType} from "../Login/Login";
import {RootStateType} from "redux/redux-store";
import {getLoginUsersDataTC} from "../../redux/auth_reducer";

export type PropsType = MSTP & MDTP

const LoginContainer = (props: PropsType) => {

    // const dispatch = useDispatch()
    //
    // const callSubmitBack = (loginData: LoginFormType) => {
    //     dispatch(getLoginUsersDataTC(loginData))
    // }

    return (
        <Login isAuth={props.isAuth} getLoginUsersDataTC={props.getLoginUsersDataTC}/>
    )
}

type MSTP = {
    isAuth: boolean
}
type MDTP = {
    getLoginUsersDataTC: (loginData: LoginFormType) => void
}

const MapStateToProps = (state: RootStateType): MSTP => ({
    isAuth: state.auth.isAuth
})

export default connect(MapStateToProps, {getLoginUsersDataTC})(LoginContainer)