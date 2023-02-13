import React, {RefObject} from 'react';
import myPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsType = {
    postsData: Array<{id: string, message: string, likesCount: number, disLikesCount: number}>
    addPost: () => void
    images: Array<string>
    newPostText: string
    updateMyPostText: (newText: string) => void
    onLikeHandler: (index: number) => void
    onDisLikeHandler: (index: number) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsDataContent = props.postsData.map( (p,i) =>
        <Post message={p.message} likesCount={p.likesCount} disLikesCount={p.disLikesCount} key={p.id} images={props.images} index={i} onLikeHandler={props.onLikeHandler} onDisLikeHandler={props.onDisLikeHandler}/>
    );

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => props.addPost()

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateMyPostText(text)
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
