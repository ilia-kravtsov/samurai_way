import React from "react";
import s from './Post.module.css';
import {delPostAC, onDisLikeHandlerAC, onLikeHandlerAC} from "../../../../redux/profile_page_reducer";
import {ActionsTypes} from "../../../../redux/store";
import {IconButton} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import DeleteIcon from '@mui/icons-material/Delete';

type PostType = {
    message: string
    likesCount: number
    disLikesCount: number
    index: string
    dispatch: (action: ActionsTypes) => void
}

const Post = (props: PostType) => {

    const onLikeHandler = () => {
        props.dispatch(onLikeHandlerAC(props.index))
    }

    const onDisLikeHandler = () => {
        props.dispatch(onDisLikeHandlerAC(props.index))
    }

    const onDelClick = () => {
        props.dispatch(delPostAC(props.index))
    }

    return (
        <li className={s.postContainer}>
            <div className={s.imgSpanContainer}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU' alt='brad pit' className={s.itemImg}/>
                <span className={s.anglePost}></span>
                <span className={s.postMessage}>{props.message}</span>
            </div>
            <div className={s.likeDisContainer}>
                <IconButton onClick={onLikeHandler}
                            color={'primary'}
                            sx={{boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.3)'}}
                >
                    <ThumbUpAltIcon />
                </IconButton>
                <span className={s.likes}>{props.likesCount}</span>
                <IconButton onClick={onDisLikeHandler}
                            color={'primary'}
                            sx={{boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.3)'}}
                >
                    <ThumbDownAltIcon />
                </IconButton>
                <span className={s.likes}>{props.disLikesCount}</span>
                <IconButton onClick={onDelClick}
                            color={'primary'}
                            sx={{boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.3)'}}
                >
                    <DeleteIcon />
                </IconButton>
            </div>
        </li>
    );
}

export default Post;
