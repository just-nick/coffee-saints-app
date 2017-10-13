import {CoffeeGroupActions} from './coffe-group.actions';
import ADD_GROUP = CoffeeGroupActions.ADD_GROUP;
import ADD_GROUP_SUCCESS = CoffeeGroupActions.ADD_GROUP_SUCCESS;
import ADD_GROUP_FAILURE = CoffeeGroupActions.ADD_GROUP_FAILURE;
import {CoffeeGroupStore} from './coffee-group.store';
import {ApiRequestAction} from '../common/api-request.action';
import FIND_GROUPS = CoffeeGroupActions.FIND_GROUPS;
import FIND_GROUPS_SUCCESS = CoffeeGroupActions.FIND_GROUPS_SUCCESS;

let initialState : CoffeeGroupStore ={
    coffeeGroupsList: {
        coffeeGroups: [],
        loading: true
    }
};

export function coffeeGroupReducer(state:CoffeeGroupStore = initialState, action:ApiRequestAction): CoffeeGroupStore{
    switch (action.type){
        case ADD_GROUP:
            return {
                ...state,
                coffeeGroupsList:{
                    ...state.coffeeGroupsList,
                    loading:true
                }
            };

        case ADD_GROUP_SUCCESS:
            return {
                ...state,
                coffeeGroupsList:{
                    ...state.coffeeGroupsList,
                    coffeeGroups:{
                        ...state.coffeeGroupsList.coffeeGroups
                    },
                    loading:false
                }
            };

        case ADD_GROUP_FAILURE:
            console.log('ADD GROUP FAILED...');
            return state;

        case FIND_GROUPS:
            console.log('find groups');
            return {
                ...state,
                coffeeGroupsList:{
                    ...state.coffeeGroupsList,
                    loading:true
                }
            };

        case FIND_GROUPS_SUCCESS:
            console.log(...state.coffeeGroupsList.coffeeGroups);
            return{
                ...state,
                coffeeGroupsList:{
                    ...state.coffeeGroupsList,
                    coffeeGroups:{
                        ...state.coffeeGroupsList.coffeeGroups,

                    },
                    loading:false
                }
            };

        default:
            return state;
    }
}