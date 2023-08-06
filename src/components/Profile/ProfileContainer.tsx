import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, loginTC, savedPhotoTC, updateStatusTC} from "../../redux/profile_page_reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type PathParamsType = { userId: string }
export type ProfileDataType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
type ProfileContainerType = MapStatePropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>
type MapStatePropsType = {
    profile: ProfileDataType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
    fake: number
}
type MapDispatchToPropsType = {
    loginTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
    savedPhotoTC: (ava: string | Blob) => void
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    refreshProfile () {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = `${this.props.authorizedUserId}`
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.loginTC(userId)
        this.props.getStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return <Profile {...this.props}
                        status={this.props.status}
                        profile={this.props.profile}
                        updateStatusTC={this.props.updateStatusTC}
                        isOwner={!this.props.match.params.userId}
        />
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        fake: state.profilePage.fake
    }
    }

export default compose<React.ComponentType>(
    connect(mapStateToProps, {loginTC, getStatusTC, updateStatusTC, savedPhotoTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

// export default compose<React.ComponentType>(
//     connect(mapStateToProps, {loginTC}),
//     withAuthRedirect(AuthRedirectComponen))(withRouter(ProfileContainer))

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// const withR = withRouter(ProfileContainer)
// const ProfileContainerWithProps = connect(mapStateToProps, {loginTC})(withR)
// let AuthRedirectComponen = withAuthRedirect(ProfileContainerWithProps)


