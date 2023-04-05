import React from 'react';
import {
    addPostAC,
    delPostAC,
    onDisLikeHandlerAC,
    onLikeHandlerAC,
    updateMyPostTextAC
} from "../../../redux/profile_page_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfileDataType} from "../ProfileContainer";

export type PostsData = {
    id: string
    message: string
    likesCount: number
    disLikesCount: number
}
export type ProfilePageType = {
    postsData: Array<PostsData>
    newPostText: string
    profile: ProfileDataType
}
type MapStatePropsType = {
    postsData: Array<PostsData>
    newPostText: string
}
type MapDispatchToPropsType = {
    updateMyPostText: (text: string) => void
    delPost: (index: string) => void
    addPost: () => void
    likeCallback: (id: string) => void
    disLikeCallback: (id: string) => void
    delClickCallback: (id: string) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateMyPostText: (text: string) => dispatch(updateMyPostTextAC(text)),
        addPost: () => dispatch(addPostAC()),
        delPost: (id: string) => dispatch(delPostAC(id)),
        likeCallback: (id: string) => dispatch(onLikeHandlerAC(id)),
        disLikeCallback: (id: string) => dispatch(onDisLikeHandlerAC(id)),
        delClickCallback: (id: string) => dispatch(delPostAC(id)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


/*
const MyPostsContainer = (props: MyPostsContainerType) => {

    return <StoreContext.Consumer>
        {(store) => {

            let state = store.getState();
            const addPost = () => store.dispatch(addPostAC());
            const updateMyPostText = (text: string) => store.dispatch(updateMyPostTextAC(text));

            return <MyPosts updateMyPostText={updateMyPostText}
                     addPost={addPost}
                     newPostText={state.profilePage.newPostText}
                     postsData={state.profilePage.postsData}
                     dispatch={store.dispatch}
            />}
        }
    </StoreContext.Consumer>
}
 */