import React, {ChangeEvent, KeyboardEvent, useEffect, useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes} from "../../../redux/store";
import {IconButton, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

type MyPostsType = {
    postsData: Array<{id: string, message: string, likesCount: number, disLikesCount: number}>
    newPostText: string
    updateMyPostText: (text: string) => void
    addPost: () => void
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsType) => {

    const postsDataContent = props.postsData.map( p =>
        <Post message={p.message} likesCount={p.likesCount} disLikesCount={p.disLikesCount} key={p.id} index={p.id} dispatch={props.dispatch}/>
    );

    const newPostElement = React.createRef<HTMLDivElement>()

    const addPost = () => {
        if (props.newPostText.trim()) {
            props.addPost()
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            props.updateMyPostText(e.currentTarget.value)
        }
    }

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            if (props.newPostText.trim()) {
                props.addPost()
            }
        }
    }

    const ref = useRef<any>(null)
    useEffect(() => {
        ref.current.scrollTop = Math.ceil(
            ref.current.scrollHeight - ref.current.clientHeight,
        );
    }, [props.postsData])

    return (
        <div className={s.postsBlock}>
            <h3 className={s.box_shadow}>My Posts</h3>
            <div className={s.container}>
                    <TextField className={s.textarea}
                              ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}
                              onKeyDown={onKeyDown}
                              label={'Enter your post'}
                            sx={{width: '300px'}}
                    ></TextField>
                <div className={s.btn}>
                    <IconButton className={s.border_radius}
                            onClick={addPost}
                            size={'medium'}
                            sx={{ml: '15px', boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.5)'}}
                            color={'primary'}
                    >
                        <AddIcon />
                    </IconButton>
                </div>
            </div>
            <div className={s.posts} ref={ref}>
                {postsDataContent}
            </div>
        </div>
    );
}

export default MyPosts;
