import {v1} from "uuid";
import {PostsData} from "components/Profile/MyPosts/MyPostsContainer";
import {ActionsTypes, AppThunk} from "./redux-store";
import {ProfileDataType} from "components/Profile/ProfileContainer";
import {ProfileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const ON_LIKE_HANDLER_TYPE = 'ON-LIKE-HANDLER-TYPE';
const ON_DISLIKE_HANDLER_TYPE = 'ON_DISLIKE_HANDLER_TYPE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const FAKE = 'FAKE';

type initialStateType = {
    postsData: Array<PostsData>
    profile: ProfileDataType
    status: string
    fake: number
}

const initialState: initialStateType = {
    postsData: [
        {id: v1(), message: "Hey, how's it going?", likesCount: 0, disLikesCount: 0},
    ],
    profile: {} as ProfileDataType,
    status: '',
    fake: 0
};

export const profilePageReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case FAKE:
            return {...state, fake: state.fake + 1}
        case ADD_POST:
            let newPost: PostsData = {id: v1(), message: action.postText, likesCount: 0, disLikesCount: 0}
            return {...state, postsData: [newPost, ...state.postsData]}
        case DELETE_POST:
            return {...state, postsData: state.postsData.filter(p => p.id !== action.index)}
        case ON_LIKE_HANDLER_TYPE:
            return {
                ...state, postsData: state.postsData.map(p =>
                    (p.id === action.index) ? {
                        ...p,
                        likesCount: p.likesCount < 1 && p.disLikesCount < 1 ? p.likesCount + 1 : p.likesCount = 0
                    } : p)
            }
        case ON_DISLIKE_HANDLER_TYPE:
            return {
                ...state, postsData: state.postsData.map(p =>
                    (p.id === action.index) ? {
                        ...p,
                        disLikesCount: p.disLikesCount < 1 && p.likesCount < 1 ? p.disLikesCount + 1 : p.disLikesCount = 0
                    } : p)
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const delPost = (index: string) => ({type: DELETE_POST, index: index} as const)
export const addPost = (postText: string) => ({type: ADD_POST, postText} as const)
export const onLikeHandler = (index: string) => ({type: ON_LIKE_HANDLER_TYPE, index: index} as const)
export const onDisLikeHandler = (index: string) => ({type: ON_DISLIKE_HANDLER_TYPE, index: index} as const)
export const setUserProfile = (profile: ProfileDataType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)

export const loginTC = (userId: string): AppThunk => async dispatch => {
    const data = await ProfileAPI.login(userId)
    dispatch(setUserProfile(data))
}

export const getStatusTC = (userId: string): AppThunk => async dispatch => {
    const data = await ProfileAPI.getStatus(userId)
    dispatch(setStatusAC(data.data))
}

export const updateStatusTC = (status: string): AppThunk => async dispatch => {
    const data = await ProfileAPI.updateStatus(status)
    if (data.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}