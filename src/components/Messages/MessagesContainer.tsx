import React from 'react'
import {StoreType} from "../../redux/redux-store";
import Messages from "./Messages";
import {addMyNewMessage, updateMyNewMessage} from "../../redux/messages_page_reducer";


type MessagesType = {
    store: StoreType
}

const MessagesContainer = (props: MessagesType) => {

    let state = props.store.getState()

    const updateMyNewMessageUI = (newText: string) => {
        props.store.dispatch(updateMyNewMessage(newText))
    }

    const addMyNewMessageUI = () => {
        props.store.dispatch(addMyNewMessage())
    }

    return <Messages updateMyNewMessageUI={updateMyNewMessageUI}
                     addMyNewMessageUI={addMyNewMessageUI}
                     messagesPage={state.messagesPage}
    />
}

export default MessagesContainer
