import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileDataType} from "../ProfileContainer";
import {PreLoader} from "../../common/PreLoader/PreLoader";

type ProfileInfo = {
    profile: ProfileDataType
}

const ProfileInfo = (props: ProfileInfo) => {

    if (Object.keys(props.profile).length === 0) {
        return <PreLoader/>
    }

    return (
        <div>
            <div className={s.avaContainer}>
                <div className={s.avaDescrBlock}>
                    <div className={s.avaBorderBlock}>
                        <img src={props.profile.photos.large}
                             alt="ava" className={s.ava}/>
                    </div>
                    <div className={s.borderDescriptionBLock}>
                        <div className={s.descriptionBlock}>
                            <span>Watch out!</span>
                            <span>I hope you'll be enjoyed about this network ;)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

/*
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU"
 */