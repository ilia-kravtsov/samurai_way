import {v1} from "uuid";
import {MessageDataType, MessagesPageType} from "./state";

const ADD_MY_NEW_MESSAGE = 'ADD-MY-NEW-MESSAGE';
const UPDATE_MY_NEW_MESSAGE = 'UPDATE-MY-NEW-MESSAGE';

export const messagesPageReducer = (state: MessagesPageType, action: any) => {
    // state = this._state.messagesPage
    switch (action.type) {
        case UPDATE_MY_NEW_MESSAGE:
            state.myNewMessageText = action.newText
            break;
        case ADD_MY_NEW_MESSAGE:
            let myNewMessage: MessageDataType = {id: v1(), message: state.myNewMessageText}
            state.myNewMessageText = ''
            state.messageData.push(myNewMessage)
            break;
        default:
            return state
    }
    return state
}

export const addMyNewMessage = () => ({type: ADD_MY_NEW_MESSAGE} as const)
export const updateMyNewMessage = (newText: string) => ({type: UPDATE_MY_NEW_MESSAGE, newText: newText} as const)