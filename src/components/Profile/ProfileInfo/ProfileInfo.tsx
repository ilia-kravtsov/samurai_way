import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={"https://avatars.mds.yandex.net/i?id=a69847b56ccbe331769d0552889e756a-5234578-images-thumbs&n=13"}
                    alt="Groot" className={s.ava}/>
            </div>
            <div className={s.descriptionBlock}>

            </div>

        </div>
    );
}

export default ProfileInfo;
