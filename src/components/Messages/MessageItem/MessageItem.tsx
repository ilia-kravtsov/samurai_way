import React from 'react'
import {NavLink} from 'react-router-dom';
import s from "./MessageItemStyle.module.css";

type MessageItemType = {
    name: string;
    id: string;
    images: Array<string>
}

const MessageItem = (props: MessageItemType) => {
    let path = '/messages/' + props.id;

    return (
        <div className={s.messageItemName}>
            <img
                src={props.images[1]}
                alt="Groot" className={s.ava}/>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
export default MessageItem
