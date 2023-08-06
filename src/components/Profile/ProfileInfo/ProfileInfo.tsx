import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileDataType} from "../ProfileContainer";
import {PreLoader} from "../../common/PreLoader/PreLoader";
import ProfileStatus from "./ProfileStatus";
import {ProfileStatusWithHooks} from "components/Profile/ProfileInfo/ProfileStatusWithHooks";

type ProfileInfo = {
    profile: ProfileDataType
    updateStatusTC: (status: string) => void
    status: string
    isOwner: boolean
    savedPhoto: (ava: string | Blob) => void
}

const ProfileInfo = (props: ProfileInfo) => {

    if (Object.keys(props.profile).length === 0) {
        return <PreLoader/>
    }

    const onMainPhotoSElect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
           props.savedPhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.avaContainer}>
                <div className={s.avaDescrBlock}>
                    <div className={s.avaBorderBlock}>
                        <img src={props.profile.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU'}
                             alt="ava" className={s.ava}/>
                    </div>
                    {props.isOwner && <input type="file" onChange={onMainPhotoSElect}/>}
                    {/*<ProfileStatus status={props.status} updateStatusTC={props.updateStatusTC}/>*/}
                    <ProfileStatusWithHooks status={props.status} updateStatusTC={props.updateStatusTC}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

/*
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU"
 */