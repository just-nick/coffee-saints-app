import {UserActions} from './user.actions';
import {UserStore} from './user.store';

let initialState: UserStore = {
    currentCoffeeGroupId: null
};

export function userReducer(state: UserStore = initialState, action: any): UserStore {
    switch (action.type) {
        case UserActions.SELECT_GROUP:
            return {
                ...state,
                currentCoffeeGroupId: action.groupId
            };

        default:
            return state;
    }
}