import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePageState: ProfilePageType
    addPost: () => void
    images: Array<string>
    newPostText: string
    updateMyPostText: (newText: string) => void
    onLikeHandler: (index: number) => void
    onDisLikeHandler: (index: number) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo images={props.images}/>
            <MyPosts postsData={props.profilePageState.postsData}
                     images={props.images}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateMyPostText={props.updateMyPostText}
                     onLikeHandler={props.onLikeHandler}
                     onDisLikeHandler={props.onDisLikeHandler}
            />
        </div>
    );
}

export default Profile;
