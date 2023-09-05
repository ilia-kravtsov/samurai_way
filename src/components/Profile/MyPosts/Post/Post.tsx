import React from "react";
import s from './Post.module.scss';
import {IconButton} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

/*
fix the post
 */

type PostType = {
    id: string
    message: string
    likesCount: number
    disLikesCount: number
    views: number
    comments: number
    onLikeHandler: (id: string) => void
    onDisLikeHandler: (id: string) => void
    delPost: (id: string) => void
}

const Post = (props: PostType) => {

    const likeClick = () => {
        props.onLikeHandler(props.id)
    }

    const disLikeClick = () => {
        props.onDisLikeHandler(props.id)
    }

    const delClick = () => {
        props.delPost(props.id)
    }

    return (
        <li className={s.postContainer}>
            <div className={s.imgSpanContainer}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU'
                    alt='brad pit' className={s.itemImg}/>
                <span className={s.anglePost}></span>
                <span className={s.postMessage}>{props.message}</span>
            </div>
            <div className={s.likeDisContainer}>
                <IconButton color={'primary'}
                            sx={{boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)'}}
                >
                    <VisibilityIcon/>
                </IconButton>
                <span className={s.postNumbers}>{props.views}</span>
                <IconButton color={'primary'}
                            sx={{boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)'}}
                >
                    <ChatBubbleIcon/>
                </IconButton>
                <span className={s.postNumbers}>{props.comments}</span>
                <IconButton onClick={likeClick}
                            color={'primary'}
                            sx={{boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)'}}
                >
                    <ThumbUpAltIcon/>
                </IconButton>
                <span className={s.postNumbers}>{props.likesCount}</span>
                <IconButton onClick={disLikeClick}
                            color={'primary'}
                            sx={{boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)'}}
                >
                    <ThumbDownAltIcon/>
                </IconButton>
                <span className={s.postNumbers}>{props.disLikesCount}</span>
                <IconButton onClick={delClick}
                            color={'primary'}
                            sx={{boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)'}}
                >
                    <DeleteIcon/>
                </IconButton>
            </div>
        </li>
    );
}

export default Post;
