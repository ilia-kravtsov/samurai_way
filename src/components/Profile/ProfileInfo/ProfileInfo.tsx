import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileDataType} from "../ProfileContainer";
import {PreLoader} from "../../common/PreLoader/PreLoader";
import ProfileStatus from "./ProfileStatus";
import {FormInputsType, ProfileStatusWithHooks} from "components/Profile/ProfileInfo/ProfileStatusWithHooks";

type ProfileInfo = {
    profile: ProfileDataType
    updateStatusTC: (status: string) => void
    status: string
    isOwner: boolean
    savedPhoto: (ava: string | Blob) => void
    saveProfileData: (formData: FormInputsType) => void
    personDataFlag: boolean
    personDataFlagToogle: (personDataFlag: boolean) => void
    errorStatusFlag: string
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
                    <ProfileStatusWithHooks status={props.status}
                                            updateStatusTC={props.updateStatusTC}
                                            profile={props.profile}
                                            isOwner={props.isOwner}
                                            saveProfileData={props.saveProfileData}
                                            personDataFlag={props.personDataFlag}
                                            personDataFlagToggle={props.personDataFlagToogle}
                                            errorStatusFlag={props.errorStatusFlag}
                    />
                    {/*<ProfileStatus status={props.status} updateStatusTC={props.updateStatusTC}/>*/}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

/*
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU"
 */