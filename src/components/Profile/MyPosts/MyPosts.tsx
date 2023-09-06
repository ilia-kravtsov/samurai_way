import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {IconButton, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import ImageIcon from '@mui/icons-material/Image';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import {PostsData} from "components/Profile/MyPosts/MyPostsContainer";

type MyPostsType = {
    postsData: Array<PostsData>
    newPostText: string
    addPost: (postText: string) => void
    onLikeHandler: (id: string) => void
    onDisLikeHandler: (id: string) => void
    delPost: (id: string) => void
    setNewPostText: (newText: string) => void
    activeLikeColorCB: (id: string, value: 'primary' | 'secondary') => void
    activeDisLikeColorCB: (id: string, value: 'primary' | 'secondary') => void
}

export const MyPosts = React.memo((props: MyPostsType) => {

    const [listRef] = useAutoAnimate<HTMLUListElement>()

    const postsDataContent = props.postsData.map(p =>
        <Post key={p.id}
              id={p.id}
              message={p.message}
              likesCount={p.likesCount}
              disLikesCount={p.disLikesCount}
              views={p.views}
              activeLikeColor={p.activeLikeColor}
              activeDisLikeColor={p.activeDisLikeColor}
              activeLikeColorCB={props.activeLikeColorCB}
              activeDisLikeColorCB={props.activeDisLikeColorCB}
              comments={p.comments}
              delPost={props.delPost}

        />
    );

    const addPost = () => {
        if (props.newPostText.trim()) {
            props.addPost(props.newPostText)
        }
    }

    const newPostElement = React.createRef<HTMLDivElement>()

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            if (props.newPostText.trim()) {
                props.addPost(props.newPostText)
            }
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsContainer}>
            <div className={s.postsBlock}>

                <form className={s.addPostContainer}>
                    <TextField className={s.preparePostTextarea}
                               ref={newPostElement}
                               value={props.newPostText}
                               onChange={onPostChange}
                               onKeyDown={onKeyDown}
                               label={'write something'}
                               multiline
                               minRows={4}
                               maxRows={4}
                    ></TextField>
                    <div className={s.postIcons}>
                        <ImageIcon color={'primary'}/>
                        <MusicNoteIcon color={'primary'}/>
                        <VideocamIcon color={'primary'}/>
                        <AddAPhotoIcon color={'primary'}/>
                        <IconButton className={s.btnPost} onClick={addPost} size={'medium'} color={'primary'}
                                    sx={{borderRadius: '5px'}}>
                            <AddIcon/>
                        </IconButton>
                    </div>
                </form>
                <div className={s.posts}>
                    <ul ref={listRef}>
                        {postsDataContent}
                    </ul>
                </div>
            </div>
        </div>
    );
})


// type AddNewPostFormType = {
//     profileTextarea: string
// }
//
// const maxLengthCreator_10 = maxLengthCreator(10)
//
// const AddNewPostForm: FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
//
//     return (
//         <form className={s.addPostContainer} onSubmit={props.handleSubmit}>
//             <Field name="profileTextarea"
//                    className={s.textarea}
//                    placeholder={'Add your post'}
//                    component={Textarea}
//                    validate={[required, maxLengthCreator_10]}
//             ></Field>
//             <button className={s.btnPost}>+</button>
//         </form>
//     );
// }
//
// const AddNewPostReduxForm = reduxForm<AddNewPostFormType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


/*
________________________________________________________________________________________________________________________
const MyPosts = React.memo((props: MyPostsType) => {
    // // @ts-ignore
    // window.props.push(props)
    // console.log('MyPosts')
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
        // console.log(value)
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
})

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
________________________________________________________________________________________________________________________
class MyPosts extends React.PureComponent<MyPostsType> {

    componentDidMount() {
        setTimeout(() => {
            this.setState({a:12})
        },1000)
    }

    // shouldComponentUpdate(nextProps: Readonly<MyPostsType>, nextState: Readonly<{}>, nextContext: any): boolean {
    //     return nextProps !== this.props || nextState !== this.state
    // }

    render() {
        console.log('Render')
        console.log(this.props)

        const postsDataContent = this.props.postsData.map(p =>
            <Post key={p.id}
                  id={p.id}
                  message={p.message}
                  likesCount={p.likesCount}
                  disLikesCount={p.disLikesCount}
                  onLikeHandler={this.props.onLikeHandler}
                  onDisLikeHandler={this.props.onDisLikeHandler}
                  delPost={this.props.delPost}
            />
        );

        const addPost = (value: AddNewPostFormType) => {
            console.log(value)
            this.props.addPost(value.profileTextarea)
        }

        return (
            <div className={s.postsContainer}>
                <div className={s.postsBlock}>
                    <h3 className={s.title}>My Posts</h3>
                    <AddNewPostReduxForm onSubmit={addPost}/>
                    <div className={s.posts}>
                        <ul>
                            {postsDataContent}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
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
________________________________________________________________________________________________________________________
type MyPostsType = {
    postsData: Array<{ id: string, message: string, likesCount: number, disLikesCount: number }>
    addPost: (postText: string) => void
    onLikeHandler: (id: string) => void
    onDisLikeHandler: (id: string) => void
    delPost: (id: string) => void
}
// @ts-ignore
window.props = []
const MyPosts = (props: MyPostsType) => {
    // @ts-ignore
    window.props.push(props)
    console.log('MyPosts')
    console.log(props)
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
 */

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
