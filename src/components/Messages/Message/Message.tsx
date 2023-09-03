import React, {useState} from 'react'
import s from './MessageStyle.module.scss'
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {EditMessage} from "components/EditMessage";

type MessageType = {
    message: string
    id: string
    index: number
    onDelClickCallback: (id: string) => void
    changeMessage: (newMessageText: string, newMessageId: string) => void
}

const Message = (props: MessageType) => {

    let [editMode, setEditMode] = useState<boolean>(false)

    let txtAndAvaContainer = s.txtAndAvaMe
    let txt = s.txtMe
    let ava = s.avaMe
    let angle = s.angleMe
    let avaSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU'

    if (props.index === 1) {
         txtAndAvaContainer = s.txtAndAvaHim
         txt = s.txtHim
         ava = s.avaHim
         angle = s.angleHim
         avaSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0qLgeb3w2s-sisWSBmrv9J9Y_bLYVz0kOg&usqp=CAU'
    }

    if (props.index > 1) {
        txtAndAvaContainer = s.txtAndAvaMeNew
    }

    const onDelClick = () => {
        props.onDelClickCallback(props.id)
    }

    const onEditModeClick = () => {
        setEditMode(true)
    }

    const changeMessageCB = (mess: string) => {
        props.changeMessage(mess, props.id)
    }

    return (
        <li className={txtAndAvaContainer}>
            <div className={txt}>
                <EditMessage message={props.message} changeMessage={changeMessageCB} editMode={editMode} setEditMode={setEditMode}/>
                {txtAndAvaContainer !== s.txtAndAvaHim
                    ? <div>
                    <IconButton onClick={onDelClick}
                                color={'primary'}
                                className={s.deleteIcon}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={onEditModeClick}
                                color={'primary'}
                                className={s.deleteIcon}
                    >
                        <EditIcon />
                    </IconButton>
                    </div>
                    : <div></div>
                }
            </div>
            <div className={angle}></div>
            <img src={avaSrc}
                alt="Groot" className={ava}/>
        </li>
    )

}

export default Message