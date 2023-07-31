import {RootStateType} from "redux/redux-store";

export const getUsers = (state: RootStateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}

export const getIsLoading = (state: RootStateType) => {
    return state.usersPage.isLoading
}

export const getFollowInProgressValue = (state: RootStateType) => {
    return state.usersPage.followInProgressValue
}


