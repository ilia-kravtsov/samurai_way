import {v1} from "uuid";
import {ActionsTypes, PostsData, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_MY_POST_TEXT = 'UPDATE-MY-POST-TEXT';
const ON_LIKE_HANDLER_TYPE = 'ON-LIKE-HANDLER-TYPE';
const ON_DISLIKE_HANDLER_TYPE = 'ON-DISLIKE-HANDLER-TYPE';

export const profilePageReducer = (state: ProfilePageType, action: ActionsTypes) => {
    // state = this._state.profilePage
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsData = {id: v1(), message: state.newPostText, likesCount: 0, disLikesCount: 0}
            state.newPostText = ''
            state.postsData.push(newPost)
            break;
        case UPDATE_MY_POST_TEXT:
            state.newPostText = action.newText
            break;
        case ON_LIKE_HANDLER_TYPE:
            let likesCount = state.postsData[action.index].likesCount + 1
            state.postsData[action.index].likesCount = likesCount
            break;
        case ON_DISLIKE_HANDLER_TYPE:
            let disLikesCount = state.postsData[action.index].disLikesCount + 1
            state.postsData[action.index].disLikesCount = disLikesCount
            break;
        default:
            return state
    }

    return state
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateMyPostTextAC = (newText: string) => ({type: UPDATE_MY_POST_TEXT, newText: newText} as const)
export const onLikeHandlerAC = (index: number) => ({type: ON_LIKE_HANDLER_TYPE, index: index} as const)
export const onDisLikeHandlerAC = (index: number) => ({type: ON_DISLIKE_HANDLER_TYPE, index: index} as const)