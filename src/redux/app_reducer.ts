import {ActionsTypes, AppThunk} from "./redux-store";
import {authAPI} from "../api/api";
import {getAuthUsersDataTC} from "redux/auth_reducer";

export type AppInitial = {
    initialized: boolean
    globalError: string | null
}
const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

const initialState: AppInitial = {
    initialized: false,
    globalError: null
};

export const appReducer = (state = initialState, action: ActionsTypes): AppInitial => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return {...state, initialized: action.initialized}
        default:
            return state
    }
}

export const initializedSucces = (initialized: boolean) => ({
    type: INITIALIZED_SUCCES,
    initialized
} as const)

export const initializeApp = (): AppThunk => dispatch => {
    try {
        Promise.all([dispatch(getAuthUsersDataTC())])
            .then(() => {
                dispatch(initializedSucces(true))
            })
    } catch (error) {
        console.error('Error in initializeApp:', error);
    }
}




