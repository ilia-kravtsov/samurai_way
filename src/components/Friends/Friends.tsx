import React from 'react'
import s from './Friends.module.scss'
import {UsersApiType} from "components/Users/UsersContainer";

type FriendName = {
    users: UsersApiType
}

/*
export type UserApiType = {
    "name": string,
    "id": number,
    "photos": {
        "small": null,
        "large": null
    },
    "status": null,
    "followed": boolean,
}
 */

const Friends = (props: FriendName) => {

    return (
        <div className={s.friendsContainer}>
            <h2 className={s.friendsTitle}>Friends</h2>
            <FriendAva users={props.users}/>
        </div>
    )
}

const FriendAva = (props: FriendName) => {

    let filteredFriendsNames = props.users.filter((friend, index) =>
        index < 8 && index > 0 ? friend.name : '');

    let buildFriends = filteredFriendsNames.map(friend => {
        return (
            <div key={friend.id} className={s.avaNameBlock}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU'
                     alt='ava'
                     key={friend.id}
                     className={s.friendAva}/>
                <span className={s.friendName}>{friend.name}</span>
            </div>
        )
    })

    return <div className={s.friendBlock}>{buildFriends}</div>
}

export default Friends

