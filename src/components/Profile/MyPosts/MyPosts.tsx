import React, from 'react';
import myPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostAC, updateMyPostTextAC} from "../../../redux/profile_page_reducer";
import {ActionsTypes} from "../../../redux/state";

type MyPostsType = {
    postsData: Array<{id: string, message: string, likesCount: number, disLikesCount: number}>
    images: Array<string>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


const MyPosts = (props: MyPostsType) => {

    const postsDataContent = props.postsData.map( (p,i) =>
        <Post message={p.message} likesCount={p.likesCount} disLikesCount={p.disLikesCount} key={p.id} images={props.images} index={i} dispatch={props.dispatch}/>
    );

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.dispatch(updateMyPostTextAC(text))
        }
    }

    return (
        <div className={myPostsStyle.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea className={myPostsStyle.border_radius}
                              ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}
                    ></textarea>
                </div>
                <div>
                    <button className={myPostsStyle.border_radius} onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={myPostsStyle.posts}>
                {postsDataContent}
            </div>
        </div>
    );
}

export default MyPosts;
