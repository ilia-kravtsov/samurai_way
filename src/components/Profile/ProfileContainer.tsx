import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {loginTC} from "../../redux/profile_page_reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
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
}
type MapDispatchToPropsType = { loginTC: (userId: string) => void }

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        this.props.loginTC(this.props.match.params.userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
        profile: state.profilePage.profile,
    })

const withR = withRouter(ProfileContainer)
const ProfileContainerWithProps = connect(mapStateToProps, {loginTC})(withR)
let AuthRedirectComponen = withAuthRedirect(ProfileContainerWithProps)

// export default compose<React.ComponentType>(
//     connect(mapStateToProps, {loginTC}),
//     withAuthRedirect(AuthRedirectComponen))(withRouter(ProfileContainer))

export default AuthRedirectComponen

