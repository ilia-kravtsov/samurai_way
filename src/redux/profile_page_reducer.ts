import {v1} from "uuid";
import {PostsData} from "components/Profile/MyPosts/MyPostsContainer";
import {ActionsTypes, AppThunk} from "./redux-store";
import {ProfileDataType} from "components/Profile/ProfileContainer";
import {ProfileAPI} from "../api/api";
import {FormInputsType} from "components/Profile/ProfileInfo/ProfileStatusWithHooks";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE_POST';
const ON_LIKE_HANDLER_TYPE = 'profile/ON-LIKE-HANDLER-TYPE';
const ON_DISLIKE_HANDLER_TYPE = 'profile/ON_DISLIKE_HANDLER_TYPE';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const FAKE = 'profile/FAKE';
const SAVE_NEW_PHOTO = 'profile/SET_NEW_PHOTO';
const PROFILE_TOGGLE = 'profile/PROFILE_TOGGLE';
const MAX_COUNT_OF_SYMBOLS = 'profile/MAX_COUNT_OF_SYMBOLS';

type initialStateType = {
    postsData: Array<PostsData>
    profile: ProfileDataType
    status: string
    fake: number
    personDataFlag: boolean
    errorStatusFlag: string
}

const initialState: initialStateType = {
    postsData: [
        {id: v1(), message: "Hey, how's it going?", likesCount: 0, disLikesCount: 0},
    ],
    profile: {} as ProfileDataType,
    status: '',
    fake: 0,
    personDataFlag: false,
    errorStatusFlag: ''
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
        case SAVE_NEW_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}}
        case PROFILE_TOGGLE:
            return {...state, personDataFlag: action.personDataFlag}
        case MAX_COUNT_OF_SYMBOLS:
            return {...state, errorStatusFlag: action.error}
        default:
            return state
    }
}
// actions
export const delPost = (index: string) => ({type: DELETE_POST, index: index} as const)
export const addPost = (postText: string) => ({type: ADD_POST, postText} as const)
export const onLikeHandler = (index: string) => ({type: ON_LIKE_HANDLER_TYPE, index: index} as const)
export const onDisLikeHandler = (index: string) => ({type: ON_DISLIKE_HANDLER_TYPE, index: index} as const)
export const setUserProfile = (profile: ProfileDataType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const maxCountOfSymbolsWhenUpdateStatusAC = (error: string) => ({type: MAX_COUNT_OF_SYMBOLS, error} as const)
export const savePhotoAC = (photos: { small: string, large: string }) => ({type: SAVE_NEW_PHOTO, photos} as const)
export const profileToggle = (personDataFlag: boolean) => ({type: PROFILE_TOGGLE, personDataFlag} as const)

//thunks
export const loginTC = (userId: string): AppThunk => async dispatch => {
    const data = await ProfileAPI.login(userId)
    dispatch(setUserProfile(data))
}
export const getStatusTC = (userId: string): AppThunk => async dispatch => {
    const data = await ProfileAPI.getStatus(userId)
    dispatch(setStatusAC(data.data))
}
export const updateStatusTC = (status: string): AppThunk => async dispatch => {
    try {
        const data = await ProfileAPI.updateStatus(status)
        if (data.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        } else if (data.data.resultCode === 1) {
            dispatch(maxCountOfSymbolsWhenUpdateStatusAC(data.data.messages[0]))
        }
    } catch (error) {

    }

}
export const savedPhotoTC = (ava: string | Blob): AppThunk => async dispatch => {
    const data = await ProfileAPI.savedPhoto(ava)

    if (data.data.resultCode === 0) {
        dispatch(savePhotoAC(data.data.data.photos))
    }
}
export const personDataFlagToogle = (personDataFlag: boolean): AppThunk => async dispatch => {
    dispatch(profileToggle(personDataFlag))
}

export const saveProfileData = (formData: FormInputsType): AppThunk => async (dispatch, getState) => {

    const userId = getState().auth.id

    const data = await ProfileAPI.saveProfileData(formData)
    if (data.data.resultCode === 0) {
        dispatch(personDataFlagToogle(false))
        dispatch(loginTC(`${userId}`))
    } else {
        // "Invalid url format (Contacts->Youtube)"
        const message = data.data.messages.length > 0 ? data.data.messages[0] : ''
        const regex = /\(([^->]+)->([^)]+)\)/;
        const match = message.match(regex);
        const word_1 = match[2].trim().toLowerCase();
        const errors_text = {'contacts': {[word_1]: message}}
        dispatch(stopSubmit('profileData', errors_text))
        console.log(message)
    }
}





