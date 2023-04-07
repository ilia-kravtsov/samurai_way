import {v1} from "uuid";
import {PostsData} from "../components/Profile/MyPosts/MyPostsContainer";
import {ActionsTypes} from "./redux-store";
import {ProfileDataType} from "../components/Profile/ProfileContainer";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_MY_POST_TEXT = 'UPDATE-MY-POST-TEXT';
const ON_LIKE_HANDLER_TYPE = 'ON-LIKE-HANDLER-TYPE';
const ON_DISLIKE_HANDLER_TYPE = 'ON_DISLIKE_HANDLER_TYPE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

type initialStateType = {
    postsData: Array<PostsData>
    newPostText: string
    profile: ProfileDataType
}

const initialState: initialStateType = {
        postsData: [
            {id: v1(), message: "Hi, how's it going?", likesCount: 0, disLikesCount: 0},
        ],
        newPostText: '',
        profile: {} as ProfileDataType
    };

export const profilePageReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                let newPost: PostsData = {id: v1(), message: state.newPostText, likesCount: 0, disLikesCount: 0}
                return {...state, postsData: [newPost, ...state.postsData], newPostText: ''}
            }
            break;
        case DELETE_POST:
            return {...state, postsData: [...state.postsData].filter(p => p.id !== action.index)}
        case UPDATE_MY_POST_TEXT:
            return {...state, newPostText: action.newText}
        case ON_LIKE_HANDLER_TYPE:
            return {...state, postsData: state.postsData.map(p =>
                    (p.id === action.index) ? {...p, likesCount: p.likesCount < 1 && p.disLikesCount < 1? p.likesCount+1 : p.likesCount = 0} : p)}
        case ON_DISLIKE_HANDLER_TYPE:
            return {...state, postsData: state.postsData.map(p =>
                    (p.id === action.index) ? {...p, disLikesCount: p.disLikesCount < 1 && p.likesCount < 1 ? p.disLikesCount+1 : p.disLikesCount = 0} : p)}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }

    return state
}

export const delPost = (index: string) => ({type: DELETE_POST, index: index} as const)
export const addPost = () => ({type: ADD_POST} as const)
export const updateMyPostText = (newText: string) => ({type: UPDATE_MY_POST_TEXT, newText: newText} as const)
export const onLikeHandler = (index: string) => ({type: ON_LIKE_HANDLER_TYPE, index: index} as const)
export const onDisLikeHandler = (index: string) => ({type: ON_DISLIKE_HANDLER_TYPE, index: index} as const)
export const setUserProfile = (profile: ProfileDataType) => ({type: SET_USER_PROFILE, profile} as const)

