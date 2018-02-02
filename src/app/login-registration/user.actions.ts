import {ApiRequestFactory} from '../common/api-request.factory';

export namespace BuyerActions {
    export const FIND_BUYER = 'FIND_BUYER';
    export const FIND_BUYER_SUCCESS = 'FIND_BUYER_SUCCESS';
    export const FIND_BUYER_FAILURE = 'FIND_BUYER_FAILURE';

    export const BUY = Symbol('BUY');
    export const BUY_SUCCESS = Symbol('BUY_SUCCESS');
    export const BUY_FAILURE = Symbol('BUY_FAILURE');

    export function find(coffeeGroupId: string, saintIds: number[]) {
        return ApiRequestFactory.get(
            [{
                type: FIND_BUYER,
                meta: {saintIds}
            }, FIND_BUYER_SUCCESS, FIND_BUYER_FAILURE],
            '/api/coffee-groups/' + coffeeGroupId + '/saints/buying?saintIds=' + saintIds.join(',')
        )
    }

    export function buy(coffeeGroupId: string, buyerId: number, saintIds: number[]) {
        return ApiRequestFactory.post(
            [BUY, BUY_SUCCESS, BUY_FAILURE],
            '/api/coffee-groups/' + coffeeGroupId + '/saints/' + buyerId + '/buying',
            saintIds
        );
    }
}