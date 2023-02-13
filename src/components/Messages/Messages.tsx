import React from 'react'
import messagesStyle from './Messages.module.css'
import Message from "./Message/Message";
import MessageItem from "./MessageItem/MessageItem";
import {MessagesPageType} from '../../redux/state'
import MessageSender from "./MessageSender/MessageSender";

type MessagesType = {
    messagesPage: MessagesPageType
    images: Array<string>
    addMyNewMessage: () => void
    updateMyNewMessage: (myNewMessageText: string) => void
    myNewMessageText: string
}

const Messages = (props: MessagesType) => {

    let messagesItemDataElements = props.messagesPage.companionsData.map(companion => <MessageItem id={companion.id} name={companion.name} images={props.images}/>);
    let messageDataElements = props.messagesPage.messageData.map((messageContent, i) => <Message id={messageContent.id} message={messageContent.message} images={props.images} index={i}/>)

    return (
        <div className={messagesStyle.messages}>
            <div className={messagesStyle.messagesItems}>
                {messagesItemDataElements}
            </div>
            <div className={messagesStyle.messagesContent}>
                {messageDataElements}
                <MessageSender myNewMessageText={props.messagesPage.myNewMessageText} addMyNewMessage={props.addMyNewMessage} updateMyNewMessage={props.updateMyNewMessage}/>
            </div>
        </div>
    )
}

export default Messages
