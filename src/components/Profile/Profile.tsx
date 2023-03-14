import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'

type ProfileType = {

}

const Profile = (props: ProfileType) => {
    return (
        <div className={s.container}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
