import React from 'react'
import s from './MessageStyle.module.css'

type MessageType = {
    message: string
    id: string
    index: number
}

const Message = (props: MessageType) => {

    let txtAndAvaContainer = s.txtAndAvaMe
    let txt = s.txtMe
    let ava = s.avaMe
    let angle = s.angleMe

    if (props.index === 1) {
         txtAndAvaContainer = s.txtAndAvaHim
         txt = s.txtHim
         ava = s.avaHim
         angle = s.angleHim
    }

    if (props.index > 1) {
        txtAndAvaContainer = s.txtAndAvaMeNew
    }

    return (
        <li className={txtAndAvaContainer}>
            <div className={txt}>{props.message}</div>
            <div className={angle}></div>
            <img
                src={"https://avatars.mds.yandex.net/i?id=a69847b56ccbe331769d0552889e756a-5234578-images-thumbs&n=13"}
                alt="Groot" className={ava}/>
        </li>
    )

}

export default Message