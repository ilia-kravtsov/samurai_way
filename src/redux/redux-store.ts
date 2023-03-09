import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profile_page_reducer";
import {messagesPageReducer} from "./messages_page_reducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer
});

export const store = createStore(reducers);

export type StoreType = typeof store;

// export type RootStateType = ReturnType<typeof reducers>