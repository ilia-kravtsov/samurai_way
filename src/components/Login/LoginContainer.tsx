import React from "react";
import {connect} from "react-redux";
import {Login, LoginFormType} from "../Login/Login";
import {RootStateType} from "redux/redux-store";
import {CaptchaServerType, loginTC} from "../../redux/auth_reducer";

export type PropsType = MSTP & MDTP

const LoginContainer = (props: PropsType) => {

    // const dispatch = useDispatch()
    //
    // const callSubmitBack = (loginData: LoginFormType) => {
    //     dispatch(getLoginUsersDataTC(loginData))
    // }

    return (
        <Login isAuth={props.isAuth}
               loginTC={props.loginTC}
               captchaData={props.captchaData}
        />
    )
}

type MSTP = {
    isAuth: boolean
    captchaData: CaptchaServerType
}
type MDTP = {
    loginTC: (loginData: LoginFormType) => void
}

const MapStateToProps = (state: RootStateType): MSTP => ({
    isAuth: state.auth.isAuth,
    captchaData: state.auth.captchaData
})

export default connect(MapStateToProps, {loginTC})(LoginContainer)