import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePageState: ProfilePageType
    images: Array<string>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo images={props.images}/>
            <MyPosts postsData={props.profilePageState.postsData}
                     images={props.images}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;
