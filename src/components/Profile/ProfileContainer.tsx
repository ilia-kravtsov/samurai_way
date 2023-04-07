import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_page_reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {ProfileAPI} from "../../api/api";

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
type MapStatePropsType = { profile: ProfileDataType }
type MapDispatchToPropsType = { setUserProfile: (profile: ProfileDataType) => void }
type StateType = {}

class ProfileContainer extends React.Component<ProfileContainerType, StateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        ProfileAPI.login(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({profile: state.profilePage.profile})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile}),
    withRouter)(ProfileContainer)