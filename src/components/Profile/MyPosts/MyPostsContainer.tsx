import React from 'react';
import {addPostAC, updateMyPostTextAC} from "../../../redux/profile_page_reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


type MyPostsContainerType = {}


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

export default MyPostsContainer;
