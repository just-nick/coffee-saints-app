import {CoffeeGroupActions} from './coffee-group.actions';
import {CoffeeGroupStore} from './coffee-group.store';
import {ApiRequestAction} from "../common/api-request.action";

let initialState: CoffeeGroupStore = {
    coffeeGroupsList: {
        coffeeGroups: [],
        loading: true
    }
};

export function coffeeGroupReducer(state: CoffeeGroupStore = initialState, action: ApiRequestAction): CoffeeGroupStore {
    switch (action.type) {
        case CoffeeGroupActions.ADD_COFFEE_GROUP:
            return {
                ...state,
                coffeeGroupsList: {
                    ...state.coffeeGroupsList,
                    loading: true
                }
            };

        case CoffeeGroupActions.ADD_COFFEE_GROUP_SUCCESS:
            return {
                ...state,
                coffeeGroupsList: {
                    ...state.coffeeGroupsList,
                    coffeeGroups: [
                        ...state.coffeeGroupsList.coffeeGroups,
                        action.payload
                    ],
                    loading: false
                }
            };

        case CoffeeGroupActions.ADD_COFFEE_GROUP_FAILURE:
            console.error(action);
            return state;


        case CoffeeGroupActions.FIND_COFFEE_GROUP:
            return {
                ...state,
                coffeeGroupsList: {
                    ...state.coffeeGroupsList,
                    loading: true
                }
            };

        case CoffeeGroupActions.FIND_COFFEE_GROUP_SUCCESS:
            return {
                ...state,
                coffeeGroupsList: {
                    ...state.coffeeGroupsList,
                    coffeeGroups: action.payload,
                    loading: false
                }
            };

        case CoffeeGroupActions.FIND_COFFEE_GROUP_FAILURE:
            console.error(action);
            return state;

        default:
            return state;
    }
}