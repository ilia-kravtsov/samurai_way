import {v1} from "uuid";
import {MessagesPageType} from "../components/Messages/MessagesContainer";

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

export const messagesPageReducer = (state: MessagesPageType = initialState, action: any): MessagesPageType => {
    // state = this._state.messagesPage
    switch (action.type) {
        case UPDATE_MY_NEW_MESSAGE:
            return {...state, myNewMessageText: action.newText}
        case ADD_MY_NEW_MESSAGE:
            if (state.myNewMessageText) {
                let newMessageText = {id: v1(), message: state.myNewMessageText}
                return {...state, messageData: [...state.messageData, newMessageText], myNewMessageText: ''}
            }
            break;
        default:
            return state
    }
    return state
}

export const addMyNewMessage = () => ({type: ADD_MY_NEW_MESSAGE} as const)
export const updateMyNewMessage = (newText: string) => ({type: UPDATE_MY_NEW_MESSAGE, newText: newText} as const)