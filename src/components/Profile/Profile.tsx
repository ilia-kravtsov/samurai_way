import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer, PostsData} from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "./ProfileContainer";
import {FormInputsType} from "components/Profile/ProfileInfo/ProfileStatusWithHooks";

type ProfileType = {
    profile: ProfileDataType
    status: string
    updateStatusTC: (status: string) => void
    isOwner: boolean
    savedPhotoTC: (ava: string | Blob) => void
    saveProfileData: (formData: FormInputsType) => void
    personDataFlag: boolean
    personDataFlagToogle: (personDataFlag: boolean) => void
    errorStatusFlag: string
}

const Profile = (props: ProfileType) => {

    const saveProfileData = (formData: FormInputsType) => {
        props.saveProfileData(formData)
    }

    return (
        <div className={s.container}>
            <ProfileInfo profile={props.profile}
                         updateStatusTC={props.updateStatusTC}
                         status={props.status}
                         isOwner={props.isOwner}
                         savedPhoto={props.savedPhotoTC}
                         saveProfileData={saveProfileData}
                         personDataFlag={props.personDataFlag}
                         personDataFlagToogle={props.personDataFlagToogle}
                         errorStatusFlag={props.errorStatusFlag}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
