import React from 'react'
import s from './Friends.module.css'

type FriendName = {
    friendName: Array<{ id: string, name: string }>
    images: Array<string>
}

const Friends = (props: FriendName) => {
    return (
        <div className={s.divFriends}>
            <span className={s.spanFriends}>Friends</span>
            <FriendAva friendName={props.friendName} images={props.images}/>
        </div>
    )
}

const FriendAva = (props: FriendName) => {

    let filteredFriendsNames = props.friendName.filter((friend, index) => index < 3 ? friend : '')

    let mapFriendsAvas = filteredFriendsNames.map(friend =>
            <img src={props.images[0]} alt='littleGroot' key={friend.id}
                 className={s.friendAva}/>
    )

    let mapFriendsNames = filteredFriendsNames.map(friend =>
        <span className={s.names} key={friend.id}>{friend.name}</span>
    )

    return (
        <div>
            {mapFriendsAvas}
            {mapFriendsNames}
        </div>
    )
}

export default Friends

