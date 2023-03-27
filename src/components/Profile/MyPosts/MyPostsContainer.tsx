import React from 'react';
import {addPostAC, delPostAC, updateMyPostTextAC} from "../../../redux/profile_page_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {ActionsTypes} from "../../../redux/store";
import {Dispatch} from "redux";

export type PostsData = {
    id: string
    message: string
    likesCount: number
    disLikesCount: number
}
export type ProfilePageType = {
    postsData: Array<PostsData>
    newPostText: string
}
type MapStatePropsType = {
    postsData: Array<PostsData>
    newPostText: string
}
type MapDispatchToPropsType = {
    updateMyPostText: (text: string) => void
    delPost: (index: string) => void
    addPost: () => void
    dispatch: (action: ActionsTypes) => void
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
        delPost: (index: string) => dispatch(delPostAC(index)),
        dispatch: (action:ActionsTypes) => dispatch(action)
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer

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