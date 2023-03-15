import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersType, UserType} from "../../redux/users_reducer";

type MapStatePropsType = {
    users: Array<UserType>
}

type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unFollow:(userID: string) => void
    setUsers: (users: UsersType) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
       },
        unFollow: (userID: string) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UsersType) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);