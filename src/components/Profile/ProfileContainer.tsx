import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {loginTC} from "../../redux/profile_page_reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "redux";

type PathParamsType = { userId: string }
export type ProfileDataType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
type ProfileContainerType = MapStatePropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>
type MapStatePropsType = {
    profile: ProfileDataType
    isAuth: boolean
}
type MapDispatchToPropsType = { loginTC: (userId: string) => void }

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        this.props.loginTC(this.props.match.params.userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    })

export default compose<React.ComponentType>(
    connect(mapStateToProps, {loginTC}),
    withRouter)(ProfileContainer)