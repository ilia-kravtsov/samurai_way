import React from "react";
import s from './Post.module.css';
import {onDisLikeHandlerAC, onLikeHandlerAC} from "../../../../redux/profile_page_reducer";
import {ActionsTypes} from "../../../../redux/store";
import {IconButton} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

type PostType = {
    message: string
    likesCount: number
    disLikesCount: number
    index: string
    dispatch: (action: ActionsTypes) => void
}

const Post = (props: PostType) => {

    const btnDislikes = `${s.margin_inline_end} ${s.margin_left}`

    const onLikeHandler = () => {
        props.dispatch(onLikeHandlerAC(props.index))
    }

    const onDisLikeHandler = () => {
        props.dispatch(onDisLikeHandlerAC(props.index))
    }

    return (
        <div className={s.item}>
            <div className={s.conImgSpan}>
                <img src={'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg'} alt='littleGroot' className={s.itemImg}/>
                <span className={s.span}>{props.message}</span>
            </div>
            <div className={s.container}>
                <IconButton onClick={onLikeHandler}
                            color={'primary'}
                            size={'small'}
                            sx={{m: '10px', boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.5)'}}
                >
                    <ThumbUpAltIcon />
                </IconButton>
                <span className={s.likes}>{props.likesCount}</span>
                <IconButton onClick={onDisLikeHandler}
                        className={btnDislikes}
                        size={'small'}
                        color={'primary'}
                        sx={{m: '10x', boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.5)'}}
                >
                    <ThumbDownAltIcon />
                </IconButton>
                <span className={s.likes}>{props.disLikesCount}</span>
            </div>
        </div>
    );
}

export default Post;
