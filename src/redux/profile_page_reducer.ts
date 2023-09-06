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
const NEW_POST_TEXT = 'profile/NEW_POST_TEXT';
const ACTIVE_LIKE_COLOR = 'profile/ACTIVE_LIKE_COLOR';
const ACTIVE_DISLIKE_COLOR = 'profile/ACTIVE_DISLIKE_COLOR';

type initialStateType = {
    postsData: Array<PostsData>
    profile: ProfileDataType
    status: string
    fake: number
    personDataFlag: boolean
    errorStatusFlag: string
    newPostText: string
}

const initialState: initialStateType = {
    postsData: [
        {
            id: v1(),
            message: "Self-development is a concept that holds great significance in the pursuit of personal growth and fulfillment. It refers to the intentional and continuous process of improving oneself, whether it be intellectually, emotionally, or spiritually. At its core, self-development is about cultivating a deeper understanding of oneself and striving towards becoming the best version of oneself. It involves setting goals, acquiring new skills, and expanding one's knowledge and perspectives. It is a journey that requires self-reflection, self-awareness, and a willingness to step outside of one's comfort zone",
            likesCount: 139,
            disLikesCount: 11,
            views: 287,
            comments: 16,
            isLike: false,
            isDislike: false,
            activeLikeColor: 'primary',
            activeDisLikeColor: 'primary',
        },
        {
            id: v1(),
            message: "The journey of self-development is an ongoing process of learning and growth. We must remain open to new knowledge, experiences, and perspectives. Engaging in lifelong learning, whether through formal education, reading, or seeking wisdom from mentors, enables us to broaden our horizons and evolve as individuals. By nurturing a curious and receptive mind, we ensure that our journey of self-development remains dynamic and ever-evolving.",
            likesCount: 168,
            disLikesCount: 7,
            views: 318,
            comments: 4,
            isLike: false,
            isDislike: false,
            activeLikeColor: 'primary',
            activeDisLikeColor: 'primary',
        },
    ],
    profile: {} as ProfileDataType,
    status: '',
    fake: 0,
    personDataFlag: false,
    errorStatusFlag: '',
    newPostText: '',
};

export const profilePageReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case FAKE:
            return {...state, fake: state.fake + 1}
        case ADD_POST:
            let newPost: PostsData = {id: v1(), message: action.postText, likesCount: 0, disLikesCount: 0, views: 0, comments: 0, isLike: false, isDislike: false, activeLikeColor: 'primary', activeDisLikeColor: 'primary'}
            return {...state, postsData: [newPost, ...state.postsData], newPostText: ''}
        case DELETE_POST:
            return {...state, postsData: state.postsData.filter(p => p.id !== action.index)}
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
        case NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case ACTIVE_LIKE_COLOR:
            return {...state, postsData: state.postsData.map(p => p.id === action.id ? {...p, activeLikeColor: p.activeLikeColor === 'primary' ? 'secondary' : 'primary', activeDisLikeColor: p.activeDisLikeColor === 'secondary' ? 'primary' : 'primary', likesCount: p.activeLikeColor === 'primary' ? p.likesCount + 1 : p.likesCount - 1, disLikesCount: p.activeDisLikeColor === 'primary' ? p.disLikesCount : p.disLikesCount - 1} : p)}
        case ACTIVE_DISLIKE_COLOR:
            return {...state, postsData: state.postsData.map(p => p.id === action.id ? {...p, activeDisLikeColor: p.activeDisLikeColor === 'primary' ? 'secondary' : 'primary', activeLikeColor: p.activeLikeColor === 'secondary' ? 'primary' : 'primary', disLikesCount: p.activeDisLikeColor === 'primary' ? p.disLikesCount + 1 : p.disLikesCount - 1, likesCount: p.activeLikeColor === 'primary' ? p.likesCount : p.likesCount - 1} : p)}
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
export const setNewPostText = (newText: string) => ({type: NEW_POST_TEXT, newText} as const)
export const activeLikeColorCB = (id: string, value: 'primary' | 'secondary') => ({type: ACTIVE_LIKE_COLOR, id, value} as const)
export const activeDisLikeColorCB = (id: string, value: 'primary' | 'secondary') => ({type: ACTIVE_DISLIKE_COLOR, id, value} as const)

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





