import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "./ProfileContainer";

type ProfileType = {
    profile: ProfileDataType
}

const Profile = (props: ProfileType) => {
    return (
        <div className={s.container}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
