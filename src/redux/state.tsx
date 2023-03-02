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
    _rerenderEntireTree: () => void
    subscribeToRerenderEntireTree: (observer: () => void) => void
    addPost: () => void
    updateMyPostText: (newText: string) => void
    onLikeHandler: (index: number) => void
    onDisLikeHandler: (index: number) => void
    addMyNewMessage: () => void
    updateMyNewMessage: (myNewMessageText: string) => void
    getState: () => StateType
}

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
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },
    subscribeToRerenderEntireTree(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    addPost() {
        let newPost: PostsData = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0, disLikesCount: 0}
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree()
    },
    updateMyPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree()
    },
    onLikeHandler(index: number) {
        let likesCount = this._state.profilePage.postsData[index].likesCount + 1
        this._state.profilePage.postsData[index].likesCount = likesCount
        this._rerenderEntireTree()
    },
    onDisLikeHandler(index: number) {
        let disLikesCount = this._state.profilePage.postsData[index].disLikesCount + 1
        this._state.profilePage.postsData[index].disLikesCount = disLikesCount
        this._rerenderEntireTree()
    },
    addMyNewMessage() {
        let myNewMessage: MessageDataType = {id: v1(), message: this._state.messagesPage.myNewMessageText}
        this._state.messagesPage.messageData.push(myNewMessage)
        this._state.messagesPage.myNewMessageText = ''
        this._rerenderEntireTree()
    },
    updateMyNewMessage(myNewMessageText: string) {
        this._state.messagesPage.myNewMessageText = myNewMessageText
        this._rerenderEntireTree()
    }
}


