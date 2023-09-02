import React, {useEffect, useRef} from 'react'
import s from './Messages.module.scss'
import Message from "./Message/Message";
import MessageItem from "./MessageItem/MessageItem";
import {MessagesPropsType} from "./MessagesContainer";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {Redirect} from "react-router-dom";
import {MessageSender} from "components/Messages/MessageSender/MessageSender";

const Messages = (props: MessagesPropsType) => {

    const [listRef] = useAutoAnimate<HTMLUListElement>()

    // const messagesItemDataElements = props.messagesPage.companionsData.map(companion => {
    //     return <MessageItem key={companion.id}
    //                         id={companion.id}
    //                         name={companion.name}/>
    // });
    const messageDataElements = props.messagesPage.messageData.map((messageContent, i) => {
        return <Message key={messageContent.id}
                        id={messageContent.id}
                        message={messageContent.message}
                        onDelClickCallback={props.onDelClickCallback}
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
            {/*<div className={s.messagesItems}>*/}
            {/*    {messagesItemDataElements}*/}
            {/*</div>*/}
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



