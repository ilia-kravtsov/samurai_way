import React, {ChangeEvent} from 'react';
import s from './MessageSender.module.css'
import {addMyNewMessage, updateMyNewMessage} from "../../../redux/messages_page_reducer";
import {ActionsTypes} from "../../../redux/state";
import {rerenderEntireTree} from "../../../index";

type MessageSenderType = {
    myNewMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const MessageSender = (props: MessageSenderType) => {

    let textareaS = s.textareaS
    let btnS = s.btnS
    let inpBtnContainer = s.inpBtnContainer

    let myNewMessage = React.createRef<HTMLTextAreaElement>()

    let addMyNewMessageUI = () => {
        props.dispatch(addMyNewMessage())
    }

    let onMyNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(updateMyNewMessage(newText))
    }

    return (
        <div className={s.container}>
            <div className={inpBtnContainer}>
                <textarea ref={myNewMessage}
                          className={textareaS}
                          onChange={onMyNewMessageChange}
                          value={props.myNewMessageText}
                          placeholder='Enter your message'
                ></textarea>
                <button onClick={addMyNewMessageUI} className={btnS}>Send</button>
            </div>
        </div>
    );
};

export default MessageSender;