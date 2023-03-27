import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.avaContainer}>
                <div className={s.avaDescrBlock}>
                    <div className={s.avaBorderBlock}>
                        <img
                            src="https://akcdn.detik.net.id/visual/2019/05/10/7ac541ac-2c34-46b3-a999-70d2251648ea_43.jpeg?w=900&q=90"
                            alt="ava" className={s.ava}/>
                    </div>
                    <div className={s.borderDescriptionBLock}>
                        <div className={s.descriptionBlock}>
                            <span>Watch out!</span>
                            <span>Provide information about yourself!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
