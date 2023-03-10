import React from 'react'
import s from './Friends.module.css'

type FriendName = {
    friendName: Array<{ id: string, name: string }>
}

const Friends = (props: FriendName) => {
    return (
        <div className={s.divFriends}>
            <span className={s.spanFriends}>Friends</span>
            <FriendAva friendName={props.friendName}/>
        </div>
    )
}

const FriendAva = (props: FriendName) => {

    let filteredFriendsNames = props.friendName.filter((friend, index) =>
        index < 3 ? friend : '')

    let mapFriendsAvas = filteredFriendsNames.map(friend =>
            <img src={'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg'}
                      alt='littleGroot'
                      key={friend.id}
                      className={s.friendAva}/>)

    let mapFriendsNames = filteredFriendsNames.map(friend =>
        <div className={s.names} key={friend.id}>{friend.name}</div>)

    return (
        <div className={s.container}>
            <div className={s.avasBlock}>{mapFriendsAvas}</div>
            <div className={s.friendNamesBlock}>{mapFriendsNames}</div>
        </div>
    )
}

export default Friends

