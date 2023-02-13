import React from 'react'
import s from './MessageStyle.module.css'

type MessageType = {
    message: string
    id: string
    images: Array<string>
    index: number
}

const Message = (props: MessageType) => {

    let txtAndAva = s.txtAndAvaMe
    let txt = s.txtMe
    let ava = s.avaMe
    let angle = s.angleMe

    if (props.index === 1) {
         txtAndAva = s.txtAndAvaHim
         txt = s.txtHim
         ava = s.avaHim
         angle = s.angleHim
    }

    if (props.index > 1) {
        txtAndAva= s.txtAndAvaMeNew
    }

    return (
        <div className={txtAndAva}>
            <div className={txt}>{props.message}</div>
            <div className={angle}></div>
            <img
                src={props.images[1]}
                alt="Groot" className={ava}/>
        </div>
    )

}

export default Message