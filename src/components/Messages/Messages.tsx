import React, {useEffect, useRef} from 'react'
import s from './Messages.module.scss'
import Message from "./Message/Message";
import {MessagesPropsType} from "./MessagesContainer";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {Redirect} from "react-router-dom";
import {MessageSender} from "components/Messages/MessageSender/MessageSender";
import MessageItem from "components/Messages/MessageItem/MessageItem";

const Messages = (props: MessagesPropsType) => {

    const [listRef] = useAutoAnimate<HTMLUListElement>()

    const messagesItemDataElements = props.users.map((friend,i) => {

        let photoSrc = i === 2 ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0qLgeb3w2s-sisWSBmrv9J9Y_bLYVz0kOg&usqp=CAU' : friend.photos.small
                               ? friend.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU'

        return <MessageItem key={friend.id}
                            id={friend.id}
                            photoSrc={photoSrc}
                            name={friend.name}/>
    });
    const messageDataElements = props.messagesPage.messageData.map((messageContent, i) => {
        return <Message key={messageContent.id}
                        id={messageContent.id}
                        message={messageContent.message}
                        onDelClickCallback={props.onDelClickCallback}
                        changeMessage={props.changeMyMessageAC}
                        index={i}/>
    })


    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = Math.ceil(
                ref.current.scrollHeight - ref.current.clientHeight,
            );
        }
    }, [props.messagesPage.messageData])

    if (props.isAuth === false) return <Redirect to={'/login'}/>

    return (
        <div className={s.messagesContainer}>
            <div className={s.messagesItems}>
                {messagesItemDataElements}
            </div>
            <div className={s.messBodyBlock}>
                <div className={s.messagesContent} ref={ref}>
                    <ul ref={listRef} className={s.ulMessagesContent}>
                        {messageDataElements}
                    </ul>
                </div>
                <MessageSender myNewMessageText={props.messagesPage.myNewMessageText}
                               addMyNewMessageAC={props.addMyNewMessageAC}
                               setMyNewMessageAC={props.setMyNewMessageAC}
                />
            </div>
        </div>
    )
}

export default Messages



