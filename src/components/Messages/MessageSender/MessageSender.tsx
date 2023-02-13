import React, {useEffect, useRef, useState} from 'react';
import s from './MessageSender.module.css'

type MessageSenderType = {
    myNewMessageText: string
    addMyNewMessage: () => void
    updateMyNewMessage: (myNewMessageText: string) => void
}

const MessageSender = (props: MessageSenderType) => {

    let textareaS = s.textareaS
    let btnS = s.btnS
    let inpBtnContainer = s.inpBtnContainer

    let myNewMessage = React.createRef<HTMLTextAreaElement>()

    let addPost = () => props.addMyNewMessage()

    let onMyNewMessageHandler = () => {
        if (myNewMessage.current) {
            let myNewMessageText = myNewMessage.current.value
            props.updateMyNewMessage(myNewMessageText)
        }
    }

    return (
        <div className={s.container}>
            <div className={inpBtnContainer}>
                <textarea ref={myNewMessage} className={textareaS} onChange={onMyNewMessageHandler} value={props.myNewMessageText}></textarea>
                <button onClick={addPost} className={btnS}>Send</button>
            </div>
        </div>
    );
};

export default MessageSender;