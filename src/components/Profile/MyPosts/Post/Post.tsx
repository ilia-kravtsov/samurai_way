import React from "react";
import s from './Post.module.css';
import {onDisLikeHandlerAC, onLikeHandlerAC} from "../../../../redux/profile_page_reducer";
import {ActionsTypes} from "../../../../redux/store";

type PostType = {
    message: string
    likesCount: number
    disLikesCount: number
    index: number
    dispatch: (action: ActionsTypes) => void
}

const Post = (props: PostType) => {

    const btnLikes = `${s.margin_inline_end} ${s.border_radius}`
    const btnDislikes = `${s.margin_inline_end} ${s.margin_left} ${s.border_radius}`

    const onLikeHandler = () => {
        props.dispatch(onLikeHandlerAC(props.index))
    }

    const onDisLikeHandler = () => {
        props.dispatch(onDisLikeHandlerAC(props.index))
    }

    return (
        <div className={s.item}>
            <img src={'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg'} alt='littleGroot' className={s.box_shadow}/>
            <span className={s.span}>{props.message}</span>
            <div className={'margin_left'}>
                <button onClick={onLikeHandler} className={btnLikes}>Likes</button>
                <span>{props.likesCount}</span>
                <button onClick={onDisLikeHandler} className={btnDislikes}>Dislikes</button>
                <span>{props.disLikesCount}</span>
            </div>
        </div>
    );
}

export default Post;
