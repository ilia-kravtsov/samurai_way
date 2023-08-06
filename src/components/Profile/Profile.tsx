import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer, PostsData} from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "./ProfileContainer";
import {savedPhotoTC} from "redux/profile_page_reducer";

type ProfileType = {
    profile: ProfileDataType
    status: string
    updateStatusTC: (status: string) => void
    isOwner: boolean
    savedPhotoTC: (ava: string | Blob) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div className={s.container}>
            <ProfileInfo profile={props.profile} updateStatusTC={props.updateStatusTC} status={props.status} isOwner={props.isOwner} savedPhoto={props.savedPhotoTC}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
