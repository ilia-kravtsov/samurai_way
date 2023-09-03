import React, {useState} from 'react'
import s from './Friends.module.scss'
import {UsersApiType} from "components/Users/UsersContainer";

type FriendName = {
    users: UsersApiType
    isAuth: boolean
}

const Friends = (props: FriendName) => {

    const [searchValue, setSearchValue] = useState<string>('');

    if (props.isAuth === false) return <div></div>

    return (
        <div className={s.friendsContainer}>
            <h2 className={s.friendsTitle}>Friends</h2>
            <input placeholder={'search'} className={s.searchInput} value={searchValue}  onChange={(e) => setSearchValue(e.currentTarget.value)}/>
            <FriendAva users={props.users} searchValue={searchValue}/>
        </div>
    )
}

const FriendAva = (props: {users: UsersApiType, searchValue: string}) => {

    let filteredFriendsNames = props.users.filter((friend) =>
        friend.name.toLowerCase().includes(props.searchValue.toLowerCase())
    );

    let buildFriends = filteredFriendsNames.map((friend, i) => {

        let photoSrc = friend.photos.small ? friend.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU'

        return (
            <div key={friend.id} className={s.avaNameBlock}>
                <img src={ i === 2 ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0qLgeb3w2s-sisWSBmrv9J9Y_bLYVz0kOg&usqp=CAU' : photoSrc}
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