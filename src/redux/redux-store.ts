import {combineReducers, createStore} from "redux";
import {
    addPostAC, delPostAC,
    onDisLikeHandlerAC,
    onLikeHandlerAC,
    profilePageReducer, setUserProfile,
    updateMyPostTextAC
} from "./profile_page_reducer";
import {
    addMyNewMessageAC,
    deleteMyNewMessageAC,
    messagesPageReducer,
    updateMyNewMessageAC
} from "./messages_page_reducer";
import {
    follow, loaderChanger,
    onPaginationClick,
    setUsers,
    setTotalUsersCount,
    unFollow,
    usersReducer
} from "./users_reducer";

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersReducer
});

export const store = createStore(rootReducer);

export type StoreType = typeof store;
export type RootStateType = ReturnType<typeof rootReducer>
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateMyPostTextAC>
    | ReturnType<typeof addMyNewMessageAC>
    | ReturnType<typeof updateMyNewMessageAC>
    | ReturnType<typeof onLikeHandlerAC>
    | ReturnType<typeof onDisLikeHandlerAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof delPostAC>
    | ReturnType<typeof deleteMyNewMessageAC>
    | ReturnType<typeof onPaginationClick>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof loaderChanger>
    | ReturnType<typeof setUserProfile>

// @ts-ignore
window.store = store