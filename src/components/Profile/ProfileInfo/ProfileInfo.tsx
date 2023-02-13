import React from 'react';
import s from './ProfileInfo.module.css';

type ProfileInfo = {
    images: Array<string>
}

const ProfileInfo = (props: ProfileInfo) => {
    return (
        <div>
            <div>
                <img
                    src={props.images[1]}
                    alt="Groot" className={s.ava}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;
