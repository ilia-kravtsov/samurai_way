import React, {useEffect, useRef} from 'react'
import messagesStyle from './Messages.module.css'
import Message from "./Message/Message";
import MessageItem from "./MessageItem/MessageItem";
import MessageSender from "./MessageSender/MessageSender";
import {MessagesPageType} from "../../redux/store";


type MessagesType = {
    updateMyNewMessageUI: (newText: string) => void
    addMyNewMessageUI: () => void
    messagesPage: MessagesPageType
}

const Messages = (props: MessagesType) => {


    const messagesItemDataElements = props.messagesPage.companionsData.map(companion => {
        return <MessageItem key={companion.id}
                     id={companion.id}
                     name={companion.name}/>
    });
    const messageDataElements = props.messagesPage.messageData.map((messageContent, i) => {
        return <Message key={messageContent.id}
                        id={messageContent.id}
                        message={messageContent.message}
                        index={i}/>
    })

    const ref = useRef<any>(null)
    useEffect(() => {
        ref.current.scrollTop = Math.ceil(
            ref.current.scrollHeight - ref.current.clientHeight,
        );
    }, [props.messagesPage.messageData])

    return (
        <div className={messagesStyle.messages}>
            <div className={messagesStyle.messagesItems}>
                {messagesItemDataElements}
            </div>
            <div className={messagesStyle.messagesContent} ref={ref}>
                {messageDataElements}
            </div>
            <MessageSender myNewMessageText={props.messagesPage.myNewMessageText}
                           updateMyNewMessageUI={props.updateMyNewMessageUI}
                           addMyNewMessageUI={props.addMyNewMessageUI}

            />
        </div>
    )
}

export default Messages
