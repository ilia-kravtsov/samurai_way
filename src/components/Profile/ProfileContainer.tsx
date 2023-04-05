import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {PostDataType, setUserProfile} from "../../redux/profile_page_reducer";
import {withRouter} from "react-router-dom";

export type ProfileDataType = {
    aboutMe : string,
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
export type ProfileContainerType = {
    postsData: Array<PostDataType>
    newPostText: string
    profile: ProfileDataType
    setUserProfile: (profile: ProfileDataType) => void
}
export type MapStatePropsType = {
    postsData: Array<PostDataType>
    newPostText: string
    profile: ProfileDataType
}
export type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileDataType) => void
}

class ProfileContainer extends React.Component<any, MapStatePropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: any): MapStatePropsType => ({
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)