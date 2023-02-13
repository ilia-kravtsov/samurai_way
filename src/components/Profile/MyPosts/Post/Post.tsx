import React from "react";
import postStyle from './Post.module.css';

type PostType = {
    message: string
    likesCount: number
    disLikesCount: number
    images: Array<string>
    index: number
    onLikeHandler: (index: number) => void
    onDisLikeHandler: (index: number) => void
}

const Post = (props: PostType) => {

    const onLikeHandler = () => {
        props.onLikeHandler(props.index)
    }

    const onDisLikeHandler = () => {
        props.onDisLikeHandler(props.index)
    }

    return (
        <div className={postStyle.item}>
            <img src={props.images[0]} alt='littleGroot'/>
            <span className={postStyle.span}>{props.message}</span>
            <div className='margin_left'>
                <button onClick={onLikeHandler} className={`${postStyle.margin_inline_end} ${postStyle.border_radius}`}>Like</button>
                <span>{props.likesCount}</span>
                <button onClick={onDisLikeHandler} className={`${postStyle.margin_inline_end} ${postStyle.margin_left} ${postStyle.border_radius}`}>Dislike</button>
                <span>{props.disLikesCount}</span>
            </div>
        </div>
    );
}

export default Post;
