import React, {ChangeEvent} from 'react';
import s from './MessageSender.module.css'

type MessageSenderType = {
    myNewMessageText: string
    updateMyNewMessageUI: (newText: string) => void
    addMyNewMessageUI: () => void
}

const MessageSender = (props: MessageSenderType) => {

    let textareaS = s.textareaS
    let btnS = s.btnS
    let inpBtnContainer = s.inpBtnContainer

    let myNewMessage = React.createRef<HTMLTextAreaElement>()

    let addMyNewMessageUI = () => {
        props.addMyNewMessageUI()
    }

    let onMyNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateMyNewMessageUI(newText)
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