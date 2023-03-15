import React from 'react'
import {NavLink} from 'react-router-dom';
import s from "./MessageItemStyle.module.css";

type MessageItemType = {
    name: string;
    id: string;
}

const MessageItem = (props: MessageItemType) => {
    let path = '/messages/' + props.name;

    return (
        <div className={s.messageItemName}>
            <img
                src={"https://avatars.mds.yandex.net/i?id=a69847b56ccbe331769d0552889e756a-5234578-images-thumbs&n=13"}
                alt="Groot" className={s.ava}/>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
export default MessageItem
