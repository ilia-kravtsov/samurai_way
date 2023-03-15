import React from 'react'
import Messages from "./Messages";
import {addMyNewMessage, updateMyNewMessage} from "../../redux/messages_page_reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {MessageDataType, MessagesItemDataType} from "../../redux/store";

export type MessagesPageType = {
    companionsData: Array<MessagesItemDataType>
    messageData: Array<MessageDataType>
    myNewMessageText: string
}

type MapStatePropsType = {
    messagesPage: MessagesPageType
}

type MapDispatchToPropsType = {
    updateMyNewMessageUI: (newText: string) => void
    addMyNewMessageUI: () => void
}

export type MessagesPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateMyNewMessageUI: (newText: string) => {
            dispatch(updateMyNewMessage(newText));
        },
        addMyNewMessageUI: () => {
            dispatch(addMyNewMessage());
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer