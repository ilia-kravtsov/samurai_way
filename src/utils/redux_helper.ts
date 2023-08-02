import {ActionsTypes} from "redux/redux-store";
import {MapStatePropsType} from "components/Users/UsersContainer";

export const updateStateReduser = (state: MapStatePropsType, actionId: number, newProp: any) => {
    return {...state, users: state.users.map(u => u.id === actionId ? {...u, ...newProp} : u)}
}