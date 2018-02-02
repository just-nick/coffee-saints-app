import UserStore from './user.store';
import {ApiRequestAction} from "../common/api-request.action";
import {UserActions} from './user.actions';


let initialState: UserStore = {
    loading: false,
    user: null
};

export function userReducer(state: UserStore = initialState, action: ApiRequestAction): UserStore {
    console.log('userReducer',action.type, action.payload);
    switch (action.type) {
        case UserActions.LOGIN:
            return {
                ...state,
                loading: true
            };

        case UserActions.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };

        case UserActions.LOGIN_FAILURE:
            console.error('FIND_BUYER_FAILURE', action);
            return state;


        case UserActions.REGISTER:
            return {
                ...state,
                loading: true
            };

        case UserActions.REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: true
            };

        case UserActions.REGISTER_FAILURE:
            console.error('REGISTER_FAILURE', action);
            return state;

        default:
            return state;
    }
}