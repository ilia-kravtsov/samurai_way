import React from 'react';
import s from './Users.module.css'
import {UsersType, UserType} from "../../redux/users_reducer";
import {v1} from "uuid";
import {Button} from "@mui/material";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: UsersType) => void
}

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers({
            users: [
                {
                    id: v1(),
                    photoUrl: 'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg',
                    fullName: 'Eddy Murphy',
                    status: 'I am the best actor',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: true
                },
                {
                    id: v1(),
                    photoUrl: 'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg',
                    fullName: 'Kris Taker',
                    status: 'I am the best actor',
                    location: {city: 'Moscow', country: 'RF'},
                    followed: false
                },
                {
                    id: v1(),
                    photoUrl: 'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg',
                    fullName: 'Arnold S.',
                    status: 'I am the best actor',
                    location: {city: 'Melbourne', country: 'Australia'},
                    followed: false
                },
                {
                    id: v1(),
                    photoUrl: 'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg',
                    fullName: 'Silvester S.',
                    status: 'I am the best actor',
                    location: {city: 'Rome', country: 'Italy'},
                    followed: false
                },
            ]
        })
    }

    return (
        <div className={s.container}>
            {
                props.users.map(u => {

                    const onFollowClick = () => {
                        props.unFollow(u.id)
                    }
                    const onUnFollowClick = () => {
                        props.follow(u.id)
                    }

                    return (
                        <div key={u.id} className={s.container_2}>
                            <div className={s.imgBtn}>
                                <div>
                                    <img src={u.photoUrl} alt='ava'/>
                                </div>
                                <div>
                                    {
                                        u.followed ? <Button onClick={onFollowClick}
                                                             variant={'contained'}
                                                             sx={{m: '10px'}}
                                            >Follow</Button>
                                            : <Button onClick={onUnFollowClick}
                                                      variant={'outlined'}
                                                      sx={{m: '10px'}}
                                            >Unfollow</Button>
                                    }
                                </div>
                            </div>
                            <div className={s.information}>
                                <div>
                                    <div>{u.fullName}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

