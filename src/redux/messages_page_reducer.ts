import {v1} from "uuid";
import {MessagesPageType} from "components/Messages/MessagesContainer";
import {ActionsTypes} from "redux/redux-store";

const DELETE_MY_NEW_MESSAGE = 'DELETE_MY_NEW_MESSAGE'
const ADD_MY_NEW_MESSAGE = 'ADD-MY-NEW-MESSAGE';
const SET_MY_NEW_MESSAGE_TEXT = 'SET_MY_NEW_MESSAGE_TEXT';
const CHANGE_MY_MESSAGE = 'CHANGE_MY_MESSAGE';

const initialState = {
    companionsData: [
        {id: v1(), name: 'Mike'},
        {id: v1(), name: 'Tony'},
        {id: v1(), name: 'Benedikt'},
        {id: v1(), name: 'Jason'},
        {id: v1(), name: 'Max'},
        {id: v1(), name: 'Silvester'},
    ],
    messageData: [
        {id: v1(), message: 'push me'},
        {id: v1(), message: 'and then just touch me'},
    ],
    myNewMessageText: ''
};

export const messagesPageReducer = (state: MessagesPageType = initialState, action: ActionsTypes): MessagesPageType => {
    // state = this._state.messagesPage
    switch (action.type) {
        case DELETE_MY_NEW_MESSAGE:
            return {...state, messageData: state.messageData.filter(m => m.id !== action.id)}
        case ADD_MY_NEW_MESSAGE:
            let newMessageText = {id: v1(), message: action.newMessageBody}
            return {...state, messageData: [...state.messageData, newMessageText], myNewMessageText: ''}
        case SET_MY_NEW_MESSAGE_TEXT:
            return {...state, myNewMessageText: action.newMessageText}
        case CHANGE_MY_MESSAGE:
            return {...state, messageData: state.messageData.map(m => m.id === action.newMessageId ? {...m, message: action.newMessageText} : m)}
        default:
            return state
    }
}

export const addMyNewMessageAC = (newMessageBody: string) => ({type: ADD_MY_NEW_MESSAGE, newMessageBody} as const)
export const deleteMyNewMessageAC = (id: string) => ({type: DELETE_MY_NEW_MESSAGE, id: id} as const)
export const setMyNewMessageAC = (newMessageText: string) => ({type: SET_MY_NEW_MESSAGE_TEXT, newMessageText} as const)
export const changeMyMessageAC = (newMessageText: string, newMessageId: string) => ({type: CHANGE_MY_MESSAGE, newMessageText, newMessageId} as const)