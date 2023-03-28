import React from 'react'
import s from './Friends.module.css'

type FriendName = {
    friendName: Array<{ id: string, name: string }>
}

const Friends = (props: FriendName) => {
    return (
        <div className={s.friendsContainer}>
            <span className={s.friendsTitle}>Friends</span>
            <FriendAva friendName={props.friendName}/>
        </div>
    )
}

const FriendAva = (props: FriendName) => {

    let filteredFriendsNames = props.friendName.filter((friend, index) =>
        index < 3 ? friend : '');

    let buildFriends = filteredFriendsNames.map(friend => {
        return (
            <div key={friend.id} className={s.avaNameBlock}>
                <img src='https://kartinkin.net/uploads/posts/2021-03/1616119039_2-p-bred-pitt-krasivie-foto-2.jpg'
                     alt='littleGroot'
                     key={friend.id}
                     className={s.friendAva}/>
                <span className={s.friendName}>{friend.name}</span>
            </div>
        )
    })

    return <div className={s.friendBlock}>{buildFriends}</div>
}

export default Friends

