import React from 'react'
import messagesStyle from './Messages.module.css'
import Message from "./Message/Message";
import MessageItem from "./MessageItem/MessageItem";
import {ActionsTypes, MessagesPageType} from '../../redux/state'
import MessageSender from "./MessageSender/MessageSender";

type MessagesType = {
    messagesPage: MessagesPageType
    images: Array<string>
    dispatch: (action: ActionsTypes) => void
}

const Messages = (props: MessagesType) => {

    const messagesItemDataElements = props.messagesPage.companionsData.map(companion => <MessageItem key={companion.id} id={companion.id} name={companion.name} images={props.images}/>);
    const messageDataElements = props.messagesPage.messageData.map((messageContent, i) => <Message key={messageContent.id} id={messageContent.id} message={messageContent.message} images={props.images} index={i}/>)

    let contentM = document.getElementById('#contentM')
    if(contentM) contentM.scroll({ top: contentM.scrollHeight, behavior: "smooth"})

    return (
        <div className={messagesStyle.messages}>
            <div className={messagesStyle.messagesItems}>
                {messagesItemDataElements}
            </div>
            <div className={messagesStyle.messagesContent} id={'#contentM'}>
                {messageDataElements}
            </div>
            <MessageSender myNewMessageText={props.messagesPage.myNewMessageText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Messages
