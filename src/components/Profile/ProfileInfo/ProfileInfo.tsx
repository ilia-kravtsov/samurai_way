import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.avaContainer}>
                <div className={s.avaDescrBlock}>
                    <div className={s.avaBorderBlock}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU"
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
