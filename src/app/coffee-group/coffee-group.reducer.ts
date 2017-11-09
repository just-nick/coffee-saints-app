import {CoffeeGroupActions} from './coffee-group.actions';
import {CoffeeGroupStore} from './coffee-group.store';
import {ApiRequestAction} from '../common/api-request.action';

let initialState : CoffeeGroupStore ={
    coffeeGroupsList: {
        coffeeGroups: [],
        loading: true
    }
};

export function coffeeGroupReducer(state:CoffeeGroupStore = initialState, action:ApiRequestAction): CoffeeGroupStore{
    switch (action.type){
        case CoffeeGroupActions.ADD_GROUP:
            return {
                ...state,
                coffeeGroupsList:{
                    ...state.coffeeGroupsList,
                    loading:true
                }
            };

        case CoffeeGroupActions.ADD_GROUP_SUCCESS:
            return {
                ...state,
                coffeeGroupsList:{
                    ...state.coffeeGroupsList,
                    coffeeGroups:[
                        ...state.coffeeGroupsList.coffeeGroups,
                        action.payload
                    ],
                    loading:false
                }
            };

        case CoffeeGroupActions.ADD_GROUP_FAILURE:
            return state;

        case CoffeeGroupActions.FIND_GROUPS:
            return {
                ...state,
                coffeeGroupsList:{
                    ...state.coffeeGroupsList,
                    loading:true
                }
            };

        case CoffeeGroupActions.FIND_GROUPS_SUCCESS:
            return{
                ...state,
                coffeeGroupsList:{
                    coffeeGroups:action.payload,
                    loading:false
                }
            };

        default:
            return state;
    }
}