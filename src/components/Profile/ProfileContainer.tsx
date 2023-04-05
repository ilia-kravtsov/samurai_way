import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {PostDataType, setUserProfile} from "../../redux/profile_page_reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {PostsData} from "./MyPosts/MyPostsContainer";
export type PathParamsType = { userId: string }
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
export type ProfileContainerType = MapStatePropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>
export type MapStatePropsType = {
    profile: ProfileDataType
    postsData: Array<PostDataType>
    newPostText: string
}
export type MapDispatchToPropsType = { setUserProfile: (profile: ProfileDataType) => void }
type StateType = {}

class ProfileContainer extends React.Component<ProfileContainerType, StateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile}),
    withRouter)(ProfileContainer)