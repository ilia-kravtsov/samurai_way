import React, {FC} from 'react';
import s from "./Users.module.css";
import {UsersApiType} from "./UsersContainer";
import {Paginator} from "components/common/Paginators/Paginator";
import {User} from "components/Users/User";

type UsersPresentType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (page: number) => void
    currentPage: number
    followTC: (userID: number) => void
    unFollowTC: (userID: number) => void
    followInProgressValue: number[]
    users: UsersApiType
}

export const UsersPresent: FC<UsersPresentType> = ({...props}) => {

    return <div className={s.container}>
        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   pageSize={props.pageSize}
                   totalUsersCount={props.totalUsersCount}/>
        {props.users.map(u => <User user={u}
                                    followInProgressValue={props.followInProgressValue}
                                    followTC={props.followTC}
                                    unFollowTC={props.unFollowTC}/>)}
    </div>
};
