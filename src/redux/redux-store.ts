import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profile_page_reducer";
import {messagesPageReducer} from "./messages_page_reducer";
import {usersReducer} from "./users_reducer";

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersReducer
});

export const store = createStore(rootReducer);

export type StoreType = typeof store;

export type RootStateType = ReturnType<typeof rootReducer>

