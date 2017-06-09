import {BuyerActions} from './buyer.actions';
import {BuyerStore} from './buyer.store';

let initialState: BuyerStore = {
    buyer: {
        saint: null,
        discover: false,
        loading: false
    }
};

export function buyerReducer(state: BuyerStore = initialState, action: ApiRequestAction) {
    switch (action.type) {
        case BuyerActions.FIND_BUYER:
            return {
                ...state,
                buyer: {
                    state: state.buyer.saint,
                    discover: true,
                    loading: true
                }
            };

        case BuyerActions.FIND_BUYER_SUCCESS:
            return {
                ...state,
                buyer: {
                    state: action.payload,
                    discover: true,
                    loading: false
                }
            };

        case BuyerActions.FIND_BUYER_FAILURE:
            return state;

        default:
            return state;
    }
}