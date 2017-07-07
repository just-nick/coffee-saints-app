import {BuyerActions} from './buyer.actions';
import {BuyerStore} from './buyer.store';

let initialState: BuyerStore = {
    buyer: {
        saint: null,
        discover: false,
        loading: true
    }
};

export function buyerReducer(state: BuyerStore = initialState, action: ApiRequestAction) {
    switch (action.type) {
        case BuyerActions.FIND_BUYER:
            console.log('FIND_BUYER', state.buyer.saint);
            return {
                ...state,
                buyer: {
                    discover: true,
                    loading: true
                }
            };

        case BuyerActions.FIND_BUYER_SUCCESS:
            console.log('FIND_BUYER_SUCCESS payload', action.payload);
            // console.log('FIND_BUYER_SUCCESS state', state.buyer);
            return {
                ...state,
                buyer: {
                    saint: action.payload,
                    discover: true,
                    loading: false
                }
            };

        case BuyerActions.FIND_BUYER_FAILURE:
            console.log('FIND_BUYER_FAILURE', state.buyer.saint);
            return state;

        default:
            return state;
    }
}