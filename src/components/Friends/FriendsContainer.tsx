import React, {useEffect} from "react";
import {connect} from "react-redux";
import {RootStateType} from "redux/redux-store";
import {getUsers} from "redux/users_selectors";
import {UsersApiType} from "components/Users/UsersContainer";
import Friends from "components/Friends/Friends";
import {getUsersTC} from "redux/users_reducer";

export type FriendsContainerType = MSTP & MDTP

const FriendsContainer = (props: FriendsContainerType) => {

    useEffect(() => {
        props.getUsersTC(49, 10)
    },[])

    return <Friends users={props.users} isAuth={props.isAuth}/>
}

type MSTP = {
    users: UsersApiType
    isAuth: boolean
}
type MDTP = {
    getUsersTC: (currentPage: number, pageSize: number) => void
}

const MSTP = (state: RootStateType): MSTP => ({
    users: getUsers(state),
    isAuth: state.auth.isAuth
})

export default connect(MSTP, {getUsersTC})(FriendsContainer)