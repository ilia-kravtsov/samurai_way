import React, {useEffect} from "react";
import {connect} from "react-redux";
import {RootStateType} from "redux/redux-store";
import {getCurrentPage, getPageSize, getUsers} from "redux/users_selectors";
import {UsersApiType} from "components/Users/UsersContainer";
import Friends from "components/Friends/Friends";
import {getUsersTC} from "redux/users_reducer";

export type PropsType = MSTP & MDTP

const FriendsContainer = (props: PropsType) => {

    useEffect(() => {
        props.getUsersTC(18, props.pageSize)
    },[])

    return <Friends users={props.users}/>
}

type MSTP = {
    users: UsersApiType
    pageSize: number
    currentPage: number
}
type MDTP = {
    getUsersTC: (currentPage: number, pageSize: number) => void
}

const MSTP = (state: RootStateType): MSTP => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
})

export default connect(MSTP, {getUsersTC})(FriendsContainer)