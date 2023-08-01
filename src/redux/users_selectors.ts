import {RootStateType} from "redux/redux-store";
import {createSelector} from "reselect";
import {UsersApiType} from "components/Users/UsersContainer";

const getUsersSelector = (state: RootStateType) => {
    return state.usersPage.users
}

export const _getUsers = (state: RootStateType) => {
    return getUsersSelector(state).filter(u => true)
}

export const getUsers = createSelector(getUsersSelector, (users: UsersApiType) => {
    return users.filter(u => true)
})

export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}

export const getFollowInProgressValue = (state: RootStateType) => {
    return state.usersPage.followInProgressValue
}

export const getIsLoading = (state: RootStateType) => {
    return state.usersPage.isLoading
}
