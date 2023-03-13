import React from "react";
import s from './Post.module.css';
import {onDisLikeHandlerAC, onLikeHandlerAC} from "../../../../redux/profile_page_reducer";
import {ActionsTypes} from "../../../../redux/store";
import {Button} from "@mui/material";
import {IconButton} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import RecommendIcon from '@mui/icons-material/Recommend';

type PostType = {
    message: string
    likesCount: number
    disLikesCount: number
    index: number
    dispatch: (action: ActionsTypes) => void
}

const Post = (props: PostType) => {

    const btnLikes = s.border_radius
    const btnDislikes = `${s.margin_inline_end} ${s.margin_left} ${s.border_radius}`

    const onLikeHandler = () => {
        props.dispatch(onLikeHandlerAC(props.index))
    }

    const onDisLikeHandler = () => {
        props.dispatch(onDisLikeHandlerAC(props.index))
    }

    return (
        <div className={s.item}>
            <img src={'https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg'} alt='littleGroot' className={s.itemImg}/>
            <span className={s.span}>{props.message}</span>
            <div className={s.container}>
                <IconButton onClick={onLikeHandler}
                            className={btnLikes}
                            color={'primary'}
                            size={'small'}
                            sx={{m: '10px', boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.5)'}}
                >
                    <ThumbUpAltIcon />
                </IconButton>
                <span>{props.likesCount}</span>
                <IconButton onClick={onDisLikeHandler}
                        className={btnDislikes}
                        size={'small'}
                        color={'primary'}
                        sx={{m: '10px', boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.5)'}}
                >
                    <ThumbDownAltIcon />
                </IconButton>
                <span>{props.disLikesCount}</span>
            </div>
        </div>
    );
}

export default Post;
