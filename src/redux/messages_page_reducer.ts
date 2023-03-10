import {v1} from "uuid";
import {MessageDataType, MessagesPageType} from "./store";

const ADD_MY_NEW_MESSAGE = 'ADD-MY-NEW-MESSAGE';
const UPDATE_MY_NEW_MESSAGE = 'UPDATE-MY-NEW-MESSAGE';

const initialState = {
    companionsData:  [
        {id: v1(), name: 'ilia'},
        {id: v1(), name: 'oleg'},
        {id: v1(), name: 'ivan'},
        {id: v1(), name: 'anna'},
        {id: v1(), name: 'maksim'},
        {id: v1(), name: 'petr'},
    ],
    messageData: [
        {id: v1(), message: 'push me'},
        {id: v1(), message: 'and then just touch me'},
    ],
    myNewMessageText: ''
};

export const messagesPageReducer = (state: MessagesPageType = initialState, action: any) => {
    // state = this._state.messagesPage
    switch (action.type) {
        case UPDATE_MY_NEW_MESSAGE:
                state.myNewMessageText = action.newText
            break;
        case ADD_MY_NEW_MESSAGE:
            if (state.myNewMessageText) {
                let myNewMessage: MessageDataType = {id: v1(), message: state.myNewMessageText}
                state.myNewMessageText = ''
                state.messageData = [...state.messageData, myNewMessage]
            }
            break;
        default:
            return state
    }
    return state
}

export const addMyNewMessage = () => ({type: ADD_MY_NEW_MESSAGE} as const)
export const updateMyNewMessage = (newText: string) => ({type: UPDATE_MY_NEW_MESSAGE, newText: newText} as const)