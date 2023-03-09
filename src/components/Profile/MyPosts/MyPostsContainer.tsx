import React from 'react';
import {addPostAC, updateMyPostTextAC} from "../../../redux/profile_page_reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";

type MyPostsContainerType = {
    store : StoreType
}


const MyPostsContainer = (props: MyPostsContainerType) => {

    let state = props.store.getState()

    const addPost = () => props.store.dispatch(addPostAC())
    const updateMyPostText = (text: string) => props.store.dispatch(updateMyPostTextAC(text))

    return <MyPosts updateMyPostText={updateMyPostText}
                    addPost={addPost}
                    newPostText={state.profilePage.newPostText}
                    postsData={state.profilePage.postsData}
                    dispatch={props.store.dispatch}
    />
}

export default MyPostsContainer;
