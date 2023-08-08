import {addPost, delPost, profilePageReducer} from "redux/profile_page_reducer";
import {ActionsTypes} from "redux/redux-store";
import {v1} from "uuid";
import {ProfileDataType} from "components/Profile/ProfileContainer";
import {PostsData} from "components/Profile/MyPosts/MyPostsContainer";

type initialStateType = {
    postsData: Array<PostsData>
    profile: ProfileDataType
    status: string
    fake: number
    personDataFlag: boolean
    errorStatusFlag: string
}

const state: initialStateType = {
    postsData: [
        {id: v1(), message: "Hey, how's it going?", likesCount: 0, disLikesCount: 0},
        {id: v1(), message: "Hey, how's it going?", likesCount: 0, disLikesCount: 0},
    ],
    profile: {} as ProfileDataType,
    status: '',
    fake: 0,
    personDataFlag: false,
    errorStatusFlag: ''
};

it('length of post should be increment', () => {
    // initial data
    const action = addPost('new post text')

    // action
    const newState = profilePageReducer(state, action)

    // expectation
    expect(newState.postsData.length).toBe(3)
})

it('message of the new post should be correct', () => {
    // initial data
    const action = addPost('new post text')

    // action
    const newState = profilePageReducer(state, action)

    // expectation
    expect(newState.postsData[0].message).toBe('new post text')
})

it('after remove posts length should be decrement ', () => {
    // initial data
    const action = delPost(state.postsData[0].id)

    // action
    const newState = profilePageReducer(state, action)

    // expectation
    expect(newState.postsData.length).toBe(1)
})

it("after remove posts length shouldn`t be decrement if id is incorrect ", () => {
    // initial data
    const action = delPost(state.postsData[0].id + '1')

    // action
    const newState = profilePageReducer(state, action)

    // expectation
    expect(newState.postsData.length).toBe(2)
})


