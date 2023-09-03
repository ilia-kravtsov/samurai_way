import React from 'react'
import Messages from "./Messages";
import {
    addMyNewMessageAC,
    changeMyMessageAC,
    deleteMyNewMessageAC,
    setMyNewMessageAC
} from "../../redux/messages_page_reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {UsersApiType} from "components/Users/UsersContainer";
import {getUsers} from "redux/users_selectors";

export type MessagesItemDataType = {
    id: string
    name: string
}
export type MessageDataType = {
    id: string
    message: string
}

export type MessagesPageType = {
    companionsData: Array<MessagesItemDataType>
    messageData: Array<MessageDataType>
    myNewMessageText: string
}
type MapStatePropsType = {
    users: UsersApiType
    messagesPage: MessagesPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    addMyNewMessageAC: (newMessageBody: string) => void
    onDelClickCallback: (id: string) => void
    setMyNewMessageAC: (newMessageText: string) => void
    changeMyMessageAC: (newMessageText: string, newMessageId: string) => void
}
export type MessagesPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth,
        users: getUsers(state),
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMyNewMessageAC: (newMessageBody) => dispatch(addMyNewMessageAC(newMessageBody)),
        onDelClickCallback: (id: string) => dispatch(deleteMyNewMessageAC(id)),
        setMyNewMessageAC: (newMessageText: string) => dispatch(setMyNewMessageAC(newMessageText)),
        changeMyMessageAC: (newMessageText: string, newMessageId: string) => dispatch(changeMyMessageAC(newMessageText, newMessageId))
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Messages));

export default MessagesContainer

