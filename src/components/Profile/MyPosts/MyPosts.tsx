import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../validators/validators";
import {Textarea} from "components/common/FormsConntrols/FormControls";

type MyPostsType = {
    postsData: Array<{ id: string, message: string, likesCount: number, disLikesCount: number }>
    addPost: (postText: string) => void
    onLikeHandler: (id: string) => void
    onDisLikeHandler: (id: string) => void
    delPost: (id: string) => void
}

const MyPosts = (props: MyPostsType) => {

    const [listRef] = useAutoAnimate<HTMLUListElement>()

    const postsDataContent = props.postsData.map(p =>
        <Post key={p.id}
              id={p.id}
              message={p.message}
              likesCount={p.likesCount}
              disLikesCount={p.disLikesCount}
              onLikeHandler={props.onLikeHandler}
              onDisLikeHandler={props.onDisLikeHandler}
              delPost={props.delPost}
        />
    );

    const addPost = (value: AddNewPostFormType) => {
        console.log(value)
        props.addPost(value.profileTextarea)
    }

    return (
        <div className={s.postsContainer}>
            <div className={s.postsBlock}>
                <h3 className={s.title}>My Posts</h3>
                <AddNewPostReduxForm onSubmit={addPost}/>
                <div className={s.posts}>
                    <ul ref={listRef}>
                        {postsDataContent}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;

type AddNewPostFormType = {
    profileTextarea: string
}

const maxLengthCreator_10 = maxLengthCreator(10)

const AddNewPostForm: FC<InjectedFormProps<AddNewPostFormType>> = (props) => {

    return (
        <form className={s.addPostContainer} onSubmit={props.handleSubmit}>
            <Field name="profileTextarea"
                   className={s.textarea}
                   placeholder={'Add your post'}
                   component={Textarea}
                   validate={[required, maxLengthCreator_10]}
            ></Field>
            <button className={s.btnPost}>+</button>
        </form>
    );
}

const AddNewPostReduxForm = reduxForm<AddNewPostFormType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

/*

const newPostElement = React.createRef<HTMLDivElement>()

const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            if (props.newPostText.trim()) {
                props.addPost()
            }
        }
    }

return (
        <div className={s.postsContainer}>
            <div className={s.postsBlock}>
                <h3 className={s.title}>My Posts</h3>
                <form className={s.addPostContainer}>
                    <TextField className={s.textarea}
                              ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}
                              onKeyDown={onKeyDown}
                              label={'Add your new post'}
                              multiline
                              minRows={4}
                              maxRows={4}
                    ></TextField>
                    <IconButton className={s.btnPost} onClick={addPost} size={'medium'} color={'primary'} sx={{ml: '2vw'}}>
                        <AddIcon />
                    </IconButton>
                </form>
                <div className={s.posts}>
                    <ul ref={listRef}>
                        {postsDataContent}
                    </ul>
                </div>
            </div>
        </div>
    );
 */
