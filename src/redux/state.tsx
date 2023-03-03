import {v1} from "uuid";
import React from "react";

type MessagesItemDataType = {
    id: string
    name: string
}

export type MessageDataType = {
    id: string
    message: string
}

type PostsData = {
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

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewMessageType = {
    type: 'UPDATE-MY-NEW-MESSAGE'
    newText: string
}

type AddMyNewMessage = {
    type: 'ADD-MY-NEW-MESSAGE'
}

type UpdateMyPostText = {
    type: 'UPDATE-MY-POST-TEXT'
    newText: string
}

type OnLikeHandlerType = {
    type: 'ON-LIKE-HANDLER-TYPE'
    index: number
}

type OnDisLikeHandlerType = {
    type: 'ON-DISLIKE-HANDLER-TYPE'
    index: number
}

export type ActionsTypes = AddPostActionType | UpdateNewMessageType | AddMyNewMessage | UpdateMyPostText | OnLikeHandlerType | OnDisLikeHandlerType

const ADD_POST = 'ADD-POST';
const UPDATE_MY_POST_TEXT = 'UPDATE-MY-POST-TEXT';
const UPDATE_MY_NEW_MESSAGE = 'UPDATE-MY-NEW-MESSAGE';
const ADD_MY_NEW_MESSAGE = 'ADD-MY-NEW-MESSAGE';

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
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscriber(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) { // {type: 'ADD POST'}
        if (action.type === ADD_POST) {
            let newPost: PostsData = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0, disLikesCount: 0}
            this._state.profilePage.newPostText = ''
            this._state.profilePage.postsData.push(newPost)
            this._callSubscriber()
        } else if (action.type === UPDATE_MY_NEW_MESSAGE) {
            this._state.messagesPage.myNewMessageText = action.newText
            this._callSubscriber()
        } else if (action.type === ADD_MY_NEW_MESSAGE) {
            let myNewMessage: MessageDataType = {id: v1(), message: this._state.messagesPage.myNewMessageText}
            this._state.messagesPage.myNewMessageText = ''
            this._state.messagesPage.messageData.push(myNewMessage)
            this._callSubscriber()
        } else if (action.type === UPDATE_MY_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'ON-LIKE-HANDLER-TYPE') {
            let likesCount = this._state.profilePage.postsData[action.index].likesCount + 1
            this._state.profilePage.postsData[action.index].likesCount = likesCount
            this._callSubscriber()
        }  else if (action.type === 'ON-DISLIKE-HANDLER-TYPE') {
            let disLikesCount = this._state.profilePage.postsData[action.index].disLikesCount + 1
            this._state.profilePage.postsData[action.index].disLikesCount = disLikesCount
            this._callSubscriber()
        }
    },
}

export const addPostAC = (): ActionsTypes  => ({type: ADD_POST})
export const updateMyPostTextAC = (newText: string): ActionsTypes => ({type: UPDATE_MY_POST_TEXT, newText: newText})
export const addMyNewMessage = (): ActionsTypes => ({type: ADD_MY_NEW_MESSAGE})
export const updateMyNewMessage = (newText: string): ActionsTypes => ({type: UPDATE_MY_NEW_MESSAGE, newText: newText})


