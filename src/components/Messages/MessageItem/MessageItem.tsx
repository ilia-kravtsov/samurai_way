import React from 'react'
import {NavLink} from 'react-router-dom';
import s from "./MessageItemStyle.module.scss";

type MessageItemType = {
    name: string;
    id: number;
    photoSrc: string
}

const MessageItem = (props: MessageItemType) => {

    let path = '/messages/' + props.name;

    return <NavLink to={path} activeClassName={s.active} className={s.itemLinkImg}>
            <img src={props.photoSrc}
                 alt="Groot" className={s.ava}/>
            {props.name}
        </NavLink>
}
export default MessageItem
