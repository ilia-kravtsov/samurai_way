import {ActionsTypes, AppThunk} from "./redux-store";
import {authAPI} from "../api/api";
import {LoginFormType} from "components/Login/Login";
import {stopSubmit} from "redux-form";

export type ServerUserDataType = {
    id: number | null
    login: string | null
    email: string | null
}

export type UserDataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaData: CaptchaServerType
}

export type CaptchaServerType = {
    data: {}
    fieldsErrors: Array<{ field: string, error: string }>
    messages: Array<string>
    resultCode: number
    url: string
}

const SET_USER_DATA = 'SET_USER_DATA';
const IS_USER_LOGIN_DATA_CORRECT = 'IS_USER_LOGIN_DATA_CORRECT';
const ADD_CAPTCHA_DATA_IMG_URL = 'ADD_CAPTCHA_DATA_IMG_URL';

const initialState: UserDataType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaData: {
        data: {},
        fieldsErrors: [],
        messages: [],
        resultCode: 0,
        url: '',
    }
};

export const authReducer = (state = initialState, action: ActionsTypes): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.userData, isAuth: action.isAuth, captchaData: {
                    data: {},
                    fieldsErrors: [],
                    messages: [],
                    resultCode: 0,
                    url: ''
                }
            }
        case IS_USER_LOGIN_DATA_CORRECT:
            return {...state, captchaData: action.captchaServerData}
        case ADD_CAPTCHA_DATA_IMG_URL:
            return {...state, captchaData: {...state.captchaData, url: action.url}}
        default:
            return state
    }
}

export const setAuthUserData = (userData: ServerUserDataType, isAuth: boolean) => ({
    type: SET_USER_DATA,
    userData,
    isAuth
} as const)
export const isUserLoginDataCorrect = (captchaServerData: CaptchaServerType) => ({
    type: IS_USER_LOGIN_DATA_CORRECT,
    captchaServerData
} as const)
export const addCaptchaImgUrl = (url: string) => ({
    type: ADD_CAPTCHA_DATA_IMG_URL,
    url
} as const)

export const getAuthUsersDataTC = (): AppThunk => async dispatch => {
    const data = await authAPI.authorization()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data, true))
    }
}

export const loginTC = (loginData: LoginFormType): AppThunk => async dispatch => {
    try {
        const data = await authAPI.login(loginData);
        if (data.resultCode === 0) {
            dispatch(getAuthUsersDataTC());
        } else if (data.resultCode === 1) {
            dispatch(isUserLoginDataCorrect(data))
            // const action: any = stopSubmit('login', {_error: 'Email or Password are incorrect'})
            // dispatch(action)
        } else if (data.resultCode === 10) {
            dispatch(isUserLoginDataCorrect(data))
            dispatch(getCaptchaImgTC())
        }
    } catch (error) {
        console.error('Error in getLoginUsersDataTC:', error);
    }
}

export const logoutTC = (): AppThunk => async dispatch => {
    try {
        const data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData({login: null, email: null, id: null}, false))
        }
    } catch (error) {
        console.error('Error in getLogOutTC:', error);
    }
}

export const getCaptchaImgTC = (): AppThunk => async dispatch => {
    try {
        const data = await authAPI.getCaptchaImg();
        dispatch(addCaptchaImgUrl(data.url))
    } catch (error) {
        console.error('Error in getCaptchaImgTC:', error);
    }
}




