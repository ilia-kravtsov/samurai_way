import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MessageSender.module.css'
import {Button, IconButton, TextField} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SendIcon from '@mui/icons-material/Send';
import OutboxIcon from '@mui/icons-material/Outbox';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

type MessageSenderType = {
    myNewMessageText: string
    updateMyNewMessageUI: (newText: string) => void
    addMyNewMessageUI: () => void
}

const MessageSender = (props: MessageSenderType) => {

    let textareaS = s.textareaS
    let btnS = s.btnS
    let inpBtnContainer = s.inpBtnContainer

    const myNewMessage = React.createRef<HTMLDivElement>()

    const addMyNewMessageUI = () => {
        if (props.myNewMessageText.trim()) {
            props.addMyNewMessageUI()
        }
    }

    const onMyNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        if (newText) {
            props.updateMyNewMessageUI(newText)
        }
    }

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            if (props.myNewMessageText.trim() !== '') {
                props.addMyNewMessageUI()
            }
        }
    }

    return (
        <div className={s.container}>
            <div className={inpBtnContainer}>
                <TextField ref={myNewMessage}
                          className={textareaS}
                          onChange={onMyNewMessageChange}
                          onKeyDown={onKeyDown}
                          value={props.myNewMessageText}
                          label='Enter your message'
                           variant="outlined"
                           sx={{height: '55px'}}
                ></TextField>
                <IconButton onClick={addMyNewMessageUI}
                        className={btnS}
                        size={'medium'}
                        color={'primary'}
                        sx={{ml: '20px', boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.5)'}}
                > <AddCircleRoundedIcon /></IconButton>
            </div>
        </div>
    );
};

export default MessageSender;