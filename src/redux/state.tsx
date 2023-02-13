import {v1} from "uuid";
import React from "react";
import {rerenderEntireTree} from "../render";

export type StateAppType = {
    state: StateType
    addPost: () => void
    updateMyPostText: (newText: string) => void
    onLikeHandler: (index: number) => void
    onDisLikeHandler: (index: number) => void
    addMyNewMessage: () => void
    updateMyNewMessage: (myNewMessageText: string) => void
}

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

let state: StateType = {
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
}

export const addPost = () => {
    let newPost: PostsData = {id: v1(), message: state.profilePage.newPostText, likesCount: 0, disLikesCount: 0}
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateMyPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const onLikeHandler = (index: number) => {
    let likesCount = state.profilePage.postsData[index].likesCount + 1
    state.profilePage.postsData[index].likesCount = likesCount
    rerenderEntireTree(state)
}

export const onDisLikeHandler = (index: number) => {
    let disLikesCount = state.profilePage.postsData[index].disLikesCount + 1
    state.profilePage.postsData[index].disLikesCount = disLikesCount
    rerenderEntireTree(state)
}

export const addMyNewMessage = () => {
    let myNewMessage: MessageDataType = {id: v1(), message: state.messagesPage.myNewMessageText}
    state.messagesPage.messageData.push(myNewMessage)
    state.messagesPage.myNewMessageText = ''
    rerenderEntireTree(state)
}

export const updateMyNewMessage = (myNewMessageText: string) => {
    state.messagesPage.myNewMessageText = myNewMessageText
    rerenderEntireTree(state)
}



export default state