import React from 'react'
import Messages from "./Messages";
import {addMyNewMessage, updateMyNewMessage} from "../../redux/messages_page_reducer";
import StoreContext from "../../StoreContext";

const MessagesContainer = () => {

    return <StoreContext.Consumer>
        {
        (store) => {

            let state = store.getState();
            const updateMyNewMessageUI = (newText: string) => store.dispatch(updateMyNewMessage(newText));
            const addMyNewMessageUI = () => store.dispatch(addMyNewMessage());

            return <Messages updateMyNewMessageUI={updateMyNewMessageUI}
                      addMyNewMessageUI={addMyNewMessageUI}
                      messagesPage={state.messagesPage}
            />
        }

    }</StoreContext.Consumer>
}

export default MessagesContainer
