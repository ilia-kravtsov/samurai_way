import {v1} from "uuid";
import React from "react";
import {
    addPostAC,
    onDisLikeHandlerAC,
    onLikeHandlerAC,
    profilePageReducer,
    updateMyPostTextAC
} from "./profile_page_reducer";
import {addMyNewMessage, messagesPageReducer, updateMyNewMessage} from "./messages_page_reducer";

export type MessagesItemDataType = {
    id: string
    name: string
}
export type MessageDataType = {
    id: string
    message: string
}
export type PostsData = {
    id: string
    message: string
    likesCount: number
    disLikesCount: number
}
export type ProfilePageType = {
    postsData: Array<PostsData>
    newPostText: string
}
export type MessagesPageType = {
    companionsData: Array<MessagesItemDataType>
    messageData: Array<MessageDataType>
    myNewMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    images: Array<string>
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateMyPostTextAC> |  ReturnType<typeof addMyNewMessage> | ReturnType<typeof updateMyNewMessage> | ReturnType<typeof onLikeHandlerAC> | ReturnType<typeof onDisLikeHandlerAC>

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 11, disLikesCount: 1},
                {id: v1(), message: 'It is my first post',  likesCount: 7, disLikesCount: 2},
            ],
            newPostText: ''
        },
        messagesPage: {
            companionsData:  [
                {id: v1(), name: 'ilia'},
                {id: v1(), name: 'oleg'},
                {id: v1(), name: 'ivan'},
                {id: v1(), name: 'anna'},
                {id: v1(), name: 'ilai'},
                {id: v1(), name: 'petr'},
            ],
            messageData: [
                {id: v1(), message: 'push me'},
                {id: v1(), message: 'and then just touch me'},
            ],
            myNewMessageText: ''
        },
        images: [
            'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg',
            "https://avatars.mds.yandex.net/i?id=a69847b56ccbe331769d0552889e756a-5234578-images-thumbs&n=13",
        ],
    },
    _callSubscriber() {console.log('State changed')},
    getState() {return this._state},
    subscriber(observer: () => void) {this._callSubscriber = observer},
    dispatch(action) { // {type: 'ADD POST'}
        this._state.profilePage = profilePageReducer( this._state.profilePage, action )
        this._state.messagesPage = messagesPageReducer( this._state.messagesPage, action )
        this._callSubscriber()
    }
}


