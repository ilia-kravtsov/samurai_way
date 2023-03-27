import {v1} from "uuid";
import {ActionsTypes} from "./store";
import {PostsData, ProfilePageType} from "../components/Profile/MyPosts/MyPostsContainer";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_MY_POST_TEXT = 'UPDATE-MY-POST-TEXT';
const ON_LIKE_HANDLER_TYPE = 'ON-LIKE-HANDLER-TYPE';
const ON_DISLIKE_HANDLER_TYPE = 'ON-DISLIKE-HANDLER-TYPE';

const initialState = {
        postsData: [
            {id: v1(), message: "Hi, how's it going?", likesCount: 1, disLikesCount: 0},
        ],
        newPostText: ''
    };

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                let newPost: PostsData = {id: v1(), message: state.newPostText, likesCount: 0, disLikesCount: 0}
                return {...state, postsData: [newPost, ...state.postsData], newPostText: ''}
            }
            break;
        case DELETE_POST:
            return {...state, postsData: [...state.postsData].filter(p => p.id != action.index)}
        case UPDATE_MY_POST_TEXT:
            return {...state, newPostText: action.newText}
        case ON_LIKE_HANDLER_TYPE:
            return {...state, postsData: state.postsData.map(p =>
                    (p.id === action.index) ? {...p, likesCount: p.likesCount < 1 ? p.likesCount+1 : p.likesCount-1} : p)}
        case ON_DISLIKE_HANDLER_TYPE:
            return {...state, postsData: state.postsData.map(p =>
                    (p.id === action.index) ? {...p, disLikesCount: p.disLikesCount < 1 ? p.disLikesCount+1 : p.disLikesCount-1} : p)}
        default:
            return state
    }

    return state
}

export const delPostAC = (index: string) => ({type: DELETE_POST, index: index} as const)
export const addPostAC = () => ({type: ADD_POST} as const)
export const updateMyPostTextAC = (newText: string) => ({type: UPDATE_MY_POST_TEXT, newText: newText} as const)
export const onLikeHandlerAC = (index: string) => ({type: ON_LIKE_HANDLER_TYPE, index: index} as const)
export const onDisLikeHandlerAC = (index: string) => ({type: ON_DISLIKE_HANDLER_TYPE, index: index} as const)