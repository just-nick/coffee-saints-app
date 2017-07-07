import {ApiRequestFactory} from '../common/api-request.factory';

export namespace BuyerActions {
    export const FIND_BUYER = 'FIND_BUYER';
    export const FIND_BUYER_SUCCESS = 'FIND_BUYER_SUCCESS';
    export const FIND_BUYER_FAILURE = 'FIND_BUYER_FAILURE';
    export const SUGGESTED_BUYER_BUYS = 'SUGGESTED_BUYER_BUYS';
    export const SUGGESTED_BUYER_BUYS_SUCCESS = 'SUGGESTED_BUYER_BUYS_SUCCESS';
    export const SUGGESTED_BUYER_BUYS_FAILURE = 'SUGGESTED_BUYER_BUYS_FAILURE';

    export function find(saintIds: Array<number>) {
        return ApiRequestFactory.put(
            [FIND_BUYER, FIND_BUYER_SUCCESS, FIND_BUYER_FAILURE],
            '/api/5927bff01100006b0b6cccd6',
            saintIds
        )
    }
}