import React from "react";
import postStyle from './Post.module.css';
import {onDisLikeHandlerAC, onLikeHandlerAC} from "../../../../redux/profile_page_reducer";
import {ActionsTypes} from "../../../../redux/state";

type PostType = {
    message: string
    likesCount: number
    disLikesCount: number
    images: Array<string>
    index: number
    dispatch: (action: ActionsTypes) => void
}

const Post = (props: PostType) => {

    const onLikeHandler = () => {
        props.dispatch(onLikeHandlerAC(props.index))
    }

    const onDisLikeHandler = () => {
        props.dispatch(onDisLikeHandlerAC(props.index))
    }

    return (
        <div className={postStyle.item}>
            <img src={props.images[0]} alt='littleGroot'/>
            <span className={postStyle.span}>{props.message}</span>
            <div className='margin_left'>
                <button onClick={onLikeHandler} className={`${postStyle.margin_inline_end} ${postStyle.border_radius}`}>Likes</button>
                <span>{props.likesCount}</span>
                <button onClick={onDisLikeHandler} className={`${postStyle.margin_inline_end} ${postStyle.margin_left} ${postStyle.border_radius}`}>Dislikes</button>
                <span>{props.disLikesCount}</span>
            </div>
        </div>
    );
}

export default Post;
