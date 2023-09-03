import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileInfo.module.scss';
import {ProfileDataType} from "../ProfileContainer";
import {PreLoader} from "../../common/PreLoader/PreLoader";
import {FormInputsType, ProfileStatusWithHooks} from "components/Profile/ProfileInfo/ProfileStatusWithHooks";
import {Button, IconButton, Tooltip} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

type ProfileInfo = {
    profile: ProfileDataType
    updateStatusTC: (status: string) => void
    status: string
    isOwner: boolean
    savedPhoto: (ava: string | Blob) => void
    saveProfileData: (formData: FormInputsType) => void
    personDataFlag: boolean
    personDataFlagToggle: (personDataFlag: boolean) => void
    errorStatusFlag: string
}

const ProfileInfo = (props: ProfileInfo) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const deActivateStatus = () => {
        setEditMode(false)
        props.updateStatusTC(status)
    }

    const activateStatus = () => {
        setEditMode(true)
    }

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
            <div className={s.profileInfoContainer}>
                <div className={s.avaDescriptionBlock}>
                    <div className={s.avaBorderBlock}>
                        <img
                            src={props.profile.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU'}
                            alt="ava" className={s.ava}/>
                        {props.isOwner && <label htmlFor='file' className={s.changePhoto}>
                                <input
                                    id='file'
                                    type='file'
                                    multiple
                                    style={{ position: 'fixed', top: '-100em' }}
                                    onChange={onMainPhotoSElect}
                                />
                                <Tooltip title='Change Photo'>
                                    <IconButton component='span'>
                                        <AddAPhotoIcon/>
                                    </IconButton>
                                </Tooltip>
                            </label>
                        }
                    </div>
                    <section className={s.status}>
                        <span className={s.statusHeader}>Status: </span>
                        {editMode
                            ? <span className={s.statusBlock}>
                                    <input value={status}
                                           onChange={changeStatus}
                                           className={s.editInput}
                                           autoFocus
                                    />
                                    <Button sx={{ml: '10px'}} variant={'contained'} onClick={deActivateStatus}>
                                        Save
                                    </Button>
                                </span>
                            :
                            <span className={s.statusBlock}>
                            {props.status || "I haven't added my status yet"}
                                <IconButton onClick={activateStatus}
                                            style={{marginLeft: '20px', borderRadius: '5px'}}
                                            color={'primary'}>
                                    <EditIcon/>
                                </IconButton>
                                {props.errorStatusFlag && <div>{props.errorStatusFlag}</div>}
                            </span>
                        }
                    </section>
                </div>
            </div>

            <ProfileStatusWithHooks profile={props.profile}
                                    isOwner={props.isOwner}
                                    saveProfileData={props.saveProfileData}
                                    personDataFlag={props.personDataFlag}
                                    personDataFlagToggle={props.personDataFlagToggle}/>
        </div>
    );
}

export default ProfileInfo;

/*
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU"

 */