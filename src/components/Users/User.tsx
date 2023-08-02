import React, {FC} from 'react';
import s from "./Users.module.css";
import {Button} from "@mui/material";
import {UserApiType, UsersApiType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import {Paginator} from "components/common/Paginators/Paginator";


type UserPresentType = {
    followTC: (userID: number) => void
    unFollowTC: (userID: number) => void
    followInProgressValue: number[]
    user: UserApiType
}

export const User: FC<UserPresentType> = ({user, ...props}) => {

    return (
        <div key={user.id} className={s.container_2}>
            <div className={s.imgBtn}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small !== null
                        ? user.photos.small
                        : 'https://kartinkin.net/uploads/posts/2021-03/1616119039_2-p-bred-pitt-krasivie-foto-2.jpg'} alt='ava'/>
                </NavLink>
                <div>
                    {
                        user.followed
                            ? <Button onClick={() => props.unFollowTC(user.id)}
                                      variant={'outlined'}
                                      sx={{m: '10px', width: '110px'}}
                                      disabled={props.followInProgressValue.some(id => id === user.id)}
                            >Unfollow</Button>
                            : <Button onClick={() => props.followTC(user.id)}
                                      variant={'contained'}
                                      sx={{m: '10px'}}
                                      disabled={props.followInProgressValue.some(id => id === user.id)}
                            >Follow</Button>
                    }
                </div>
            </div>
            <div className={s.information}>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>
        </div>
    );
};
