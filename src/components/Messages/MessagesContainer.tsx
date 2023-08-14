import React from 'react'
import Messages from "./Messages";
import {addMyNewMessageAC, deleteMyNewMessageAC, setMyNewMessageAC} from "../../redux/messages_page_reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


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
    messagesPage: MessagesPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    addMyNewMessageAC: (newMessageBody: string) => void
    onDelClickCallback: (id: string) => void
    setMyNewMessageAC: (newMessageText: string) => void
}
export type MessagesPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMyNewMessageAC: (newMessageBody) => dispatch(addMyNewMessageAC(newMessageBody)),
        onDelClickCallback: (id: string) => dispatch(deleteMyNewMessageAC(id)),
        setMyNewMessageAC: (newMessageText: string) => dispatch(setMyNewMessageAC(newMessageText)),
    }
}

const AuthRedirectComponent = withAuthRedirect(Messages)

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MessagesContainer

// export default compose<React.ComponentType>(
//     connect(mapStateToProps, mapDispatchToProps),
//     withAuthRedirect,
// )(Messages)