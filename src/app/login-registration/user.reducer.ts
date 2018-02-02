import {BuyerActions} from './buyer.actions';
import {BuyerStore} from './buyer.store';
import {ApiRequestAction} from "../common/api-request.action";

let initialState: BuyerStore = {
    buyer: null,
    consumerIds: [],
    discover: false,
    loading: true
};

export function buyerReducer(state: BuyerStore = initialState, action: ApiRequestAction): BuyerStore {
    switch (action.type) {
        case BuyerActions.FIND_BUYER:
            return {
                ...state,
                discover: true,
                loading: true,
                consumerIds: action.meta.saintIds
            };

        case BuyerActions.FIND_BUYER_SUCCESS:
            return {
                ...state,
                buyer: action.payload,
                discover: true,
                loading: false
            };

        case BuyerActions.FIND_BUYER_FAILURE:
            console.error('FIND_BUYER_FAILURE', action);
            return state;


        case BuyerActions.BUY:
            return {
                ...state,
                loading: true
            };

        case BuyerActions.BUY_SUCCESS:
            return {
                ...state,
                buyer: action.payload,
                discover: false
            };

        case BuyerActions.BUY_FAILURE:
            console.error('BUY_FAILURE', action);
            return state;

        default:
            return state;
    }
}