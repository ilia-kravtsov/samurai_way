import React from 'react'
import Messages from "./Messages";
import {addMyNewMessageAC, deleteMyNewMessageAC, updateMyNewMessageAC} from "../../redux/messages_page_reducer";
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
    onDelClickCallback: (id: string) => void
}
export type MessagesPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {messagesPage: state.messagesPage}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateMyNewMessageUI: (newText: string) => dispatch(updateMyNewMessageAC(newText)),
        addMyNewMessageUI: () => dispatch(addMyNewMessageAC()),
        onDelClickCallback: (id: string) => dispatch(deleteMyNewMessageAC(id)),
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer