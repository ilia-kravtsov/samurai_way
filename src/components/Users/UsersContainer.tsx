import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    follow,
    loaderChanger,
    onPaginationClick,
    setUsers,
    setTotalUsersCount,
    unFollow
} from "../../redux/users_reducer";
import axios from "axios";
import {UsersPresent} from "./UsersPresent";
import s from './Users.module.css'
import {PreLoader} from "../common/PreLoader/PreLoader";

export type MapStatePropsType = {
    users: UsersApiType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}
export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow:(userID: number) => void
    setUsers: (users: UsersApiType) => void
    onPaginationClick: (index: number) => void
    setTotalUsersCount: (totalCount: number) => void
    loaderChanger: (isLoading: boolean) => void
}
export type UserApiType = {
    "name": string,
    "id": number,
    "photos": {
        "small": null,
        "large": null
    },
    "status": null,
    "followed": boolean,
}
export type UsersApiType = Array<UserApiType>;
type UsersPropsType = {
    users: UsersApiType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersApiType) => void
    onPaginationClick: (index: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isLoading: boolean
    loaderChanger: (isLoading: boolean) => void
}
const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userID: number) => dispatch(followAC(userID)),
//         unFollow: (userID: number) => dispatch(unFollowAC(userID)),
//         setUsers: (users: UsersApiType) => dispatch(setUsersAC(users)),
//         onPaginationClick: (index: number) => dispatch(setCurrentPageAC(index)),
//         setTotalUsersCount: (totalCount: number) => dispatch(setUsersTotalCountAC(totalCount)),
//         loaderChanger: (isLoading: boolean) => dispatch(loaderChangeAC(isLoading))
//     }
// }

export class UsersContainer extends React.Component<UsersPropsType, MapStatePropsType>{

    componentDidMount() {
        this.props.loaderChanger(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.loaderChanger(false)
        })
    }

    onPageCHanged = (pageNumber: number) => {
        this.props.onPaginationClick(pageNumber)
        this.props.loaderChanger(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.loaderChanger(false)
        })
    }

    render() {
        return <div className={s.presentContainer}>
            {this.props.isLoading
                ? <PreLoader/>
                : <UsersPresent users={this.props.users}
                                totalUsersCount={this.props.totalUsersCount}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                unFollow={this.props.unFollow}
                                follow={this.props.follow}
                                onPageChanged={this.onPageCHanged}
                />
            }
        </div>
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    onPaginationClick,
    setTotalUsersCount,
    loaderChanger
})(UsersContainer);