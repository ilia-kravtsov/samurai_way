import {ActionsTypes} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS"

export type UserType = {
    id: string
    fullName: string
    status: string
    location: { city: string, country: string },
    followed: boolean
    photoUrl: string
}

export type UsersType = {
    users: Array<UserType>
}

const initialState = {
    users: [],
};

export const usersReducer = (state: UsersType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users.users]}
        default:
            return state
    }
}

export const followAC = (userID: string) => ({type: FOLLOW, userID} as const) // подписывает usera
export const unFollowAC = (userID: string) => ({type: UNFOLLOW, userID} as const) // отписывает usera
export const setUsersAC = (users: UsersType) => ({type: SET_USERS, users} as const) // устанавливает users с сервера

/*
const initialState = {
    users: [
        // {
        //     id: v1(),
        //     photoUrl: 'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg',
        //     fullName: 'Eddy Murphy',
        //     status: 'I am the best actor',
        //     location: {city: 'Minsk', country: 'Belarus'},
        //     followed: true
        // },
        // {
        //     id: v1(),
        //     photoUrl: 'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg',
        //     fullName: 'Kris Taker',
        //     status: 'I am the best actor',
        //     location: {city: 'Moscow', country: 'RF'},
        //     followed: false
        // },
        // {
        //     id: v1(),
        //     photoUrl: 'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg',
        //     fullName: 'Arnold S.',
        //     status: 'I am the best actor',
        //     location: {city: 'Melbourne', country: 'Australia'},
        //     followed: false
        // },
        // {
        //     id: v1(),
        //     photoUrl: 'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg',
        //     fullName: 'Silvester S.',
        //     status: 'I am the best actor',
        //     location: {city: 'Rome', country: 'Italy'},
        //     followed: false
        // },
    ],
};
 */