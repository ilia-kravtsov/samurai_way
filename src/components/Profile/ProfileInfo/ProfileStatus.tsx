import React, {ChangeEvent} from 'react';
import s from "./ProfileInfo.module.css";
import {Button, IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateStatus() {
        this.setState({
            editMode: true
        })
    }

    deActivateStatus() {
        this.setState({
            editMode: false,
            status: this.state.status
        })
    }

    changeStatus(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className={s.borderDescriptionBLock}>
                <div className={s.status}>Status: </div>
                {this.state.editMode ? <div className={s.statusBlock}>
                                            <input value={this.state.status} onChange={this.changeStatus.bind(this)} className={s.editInput} autoFocus/>
                                            <Button sx={{ml: '10px'}} variant={'contained'} onClick={this.deActivateStatus.bind(this)}>Save</Button>
                                       </div>
                                     : <div className={s.statusBlock}>
                                            {this.props.status}
                                            <IconButton onClick={this.activateStatus.bind(this)} style={{marginLeft: '20px', boxShadow: '1px 0 10px 0 rgba(0, 0, 0, 0.3)'}} color={'primary'}>
                                                <EditIcon/>
                                            </IconButton>
                                       </div>

                }
            </div>
        );
    }
};

