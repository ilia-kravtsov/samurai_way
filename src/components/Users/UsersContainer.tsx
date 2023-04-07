import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    follow,
    loaderChanger,
    onPaginationClick,
    setUsers,
    setTotalUsersCount,
    unFollow, followInProgress
} from "../../redux/users_reducer";
import {UsersPresent} from "./UsersPresent";
import s from './Users.module.css'
import {PreLoader} from "../common/PreLoader/PreLoader";
import {usersAPI} from "../../api/api";

export type MapStatePropsType = {
    users: UsersApiType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followInProgressValue: number[]
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
    followInProgress: (followInProgress: boolean, userId: number) => void
    followInProgressValue: number[]
}
const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followInProgressValue: state.usersPage.followInProgressValue
    }
}

export class UsersContainer extends React.Component<UsersPropsType, MapStatePropsType>{

    componentDidMount() {
        this.props.loaderChanger(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.loaderChanger(false)
        })
    }

    onPageCHanged = (pageNumber: number) => {
        this.props.onPaginationClick(pageNumber)
        this.props.loaderChanger(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.loaderChanger(false)
        })
    }

    render() {
        return <div className={s.presentContainer}>
            {this.props.isLoading
                ? <PreLoader/>
                : <UsersPresent {...this.props}
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
    loaderChanger,
    followInProgress
})(UsersContainer);

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userID: number) => dispatch(followAC(userID)),
//         unFollow: (userID: number) => dispatch(unFollowAC(userID)),
//         setUsers: (users: UsersApiType) => dispatch(setUsersAC(users)),
//         onPaginationClick: (index: number) => dispatch(setCurrentPageAC(index)),
//         setTotalUsersCount: (totalCount: number) => dispatch(setUsersTotalCountAC(totalCount)),
//         loaderChanger: (isLoading: boolean) => dispatch(loaderChangeAC(isLoading))
//         followInProgress: (followInProgress: boolean) => dispatch(followInProgress(followInProgress))
//     }
// }