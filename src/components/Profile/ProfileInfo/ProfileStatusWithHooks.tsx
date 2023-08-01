import React, {ChangeEvent, LegacyRef, useState} from 'react';
import s from "./ProfileInfo.module.css";
import {Button, IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

type ProfileStatusType = {
    status: string
    updateStatusTC: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

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

    return (
        <div className={s.borderDescriptionBLock}>
            <div className={s.status}>Status:</div>
            {editMode ? <div className={s.statusBlock}>
                    <input value={status}
                           onChange={changeStatus}
                           className={s.editInput}
                           autoFocus
                    />
                    <Button sx={{ml: '10px'}} variant={'contained'} onClick={deActivateStatus}>
                        Save
                    </Button>
                </div>
                : <div className={s.statusBlock}>
                    {props.status || "I haven't added my status yet"}
                    <IconButton onClick={activateStatus}
                                style={{marginLeft: '20px', boxShadow: '1px 0 5px 0 rgba(0, 0, 0, 0.2)'}}
                                color={'primary'}>
                        <EditIcon/>
                    </IconButton>
                </div>

            }
        </div>
    );
};

// state = {
//     editMode: false,
//     status: this.props.status
// }
//
// activateStatus = () => {
//     this.setState({
//         editMode: true,
//         status: this.props.status
//     })
// }
//
// deActivateStatus = () => {
//     this.setState({
//         editMode: false,
//         status: this.state.status
//     })
//     this.props.updateStatusTC(this.state.status)
// }
//
// changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
//     this.setState({
//         status: e.currentTarget.value
//     })
// }
//
// componentDidUpdate(prevProps:Readonly < ProfileStatusType >, prevState:Readonly<{}>)
// {
//     if (prevProps.status !== this.props.status) {
//         this.setState({
//             status: this.props.status
//         })
//     }
// }