import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {
    addPost, delPost, maxCountOfSymbolsWhenUpdateStatusAC,
    onDisLikeHandler,
    onLikeHandler, personDataFlagToogle,
    profilePageReducer, profileToggle, savePhotoAC, setNewPostText, setStatusAC, setUserProfile,
} from "./profile_page_reducer";
import {
    addMyNewMessageAC,
    deleteMyNewMessageAC,
    messagesPageReducer, setMyNewMessageAC,
} from "./messages_page_reducer";
import {
    follow, loaderChanger,
    onPaginationClick,
    setUsers,
    setTotalUsersCount,
    unFollow,
    usersReducer, followInProgress
} from "./users_reducer";
import {addCaptchaImgUrl, authReducer, isUserLoginDataCorrect, setAuthUserData} from "./auth_reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {appReducer, initializedSucces} from "redux/app_reducer";

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type StoreType = typeof store;
export type RootStateType = ReturnType<typeof rootReducer>
export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof addMyNewMessageAC>
    | ReturnType<typeof onLikeHandler>
    | ReturnType<typeof onDisLikeHandler>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof delPost>
    | ReturnType<typeof deleteMyNewMessageAC>
    | ReturnType<typeof onPaginationClick>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof loaderChanger>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof followInProgress>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof isUserLoginDataCorrect>
    | ReturnType<typeof addCaptchaImgUrl>
    | ReturnType<typeof initializedSucces>
    | ReturnType<typeof savePhotoAC>
    | ReturnType<typeof profileToggle>
    | ReturnType<typeof maxCountOfSymbolsWhenUpdateStatusAC>
    | ReturnType<typeof setNewPostText>
    | ReturnType<typeof setMyNewMessageAC>
    | {type: 'profile/FAKE'}

export type AppThunk<ReturnType = void> = ThunkAction<void, RootStateType, unknown, ActionsTypes>
// @ts-ignore
window.store = store