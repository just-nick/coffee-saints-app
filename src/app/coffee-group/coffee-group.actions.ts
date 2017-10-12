import {ApiRequestFactory} from '../common/api-request.factory';
import {CoffeeGroup} from "./coffee-group";

export namespace CoffeeGroupActions {
    export const ADD_COFFEE_GROUP = 'ADD_COFFEE_GROUP';
    export const ADD_COFFEE_GROUP_SUCCESS = 'ADD_COFFEE_GROUP_SUCCESS';
    export const ADD_COFFEE_GROUP_FAILURE = 'ADD_COFFEE_GROUP_FAILURE';

    export const FIND_COFFEE_GROUP = 'FIND_COFFEE_GROUP';
    export const FIND_COFFEE_GROUP_SUCCESS = 'FIND_COFFEE_GROUP_SUCCESS';
    export const FIND_COFFEE_GROUP_FAILURE = 'FIND_COFFEE_GROUP_FAILURE';

    // @TODO Programmatically generating API states

    export function add(coffeeGroup: CoffeeGroup) {
        return ApiRequestFactory.post(
            [ADD_COFFEE_GROUP, ADD_COFFEE_GROUP_SUCCESS, ADD_COFFEE_GROUP_FAILURE],
            '/api/coffee-groups',
            coffeeGroup
        );
    }

    export function find() {
        return ApiRequestFactory.get(
            [FIND_COFFEE_GROUP, FIND_COFFEE_GROUP_SUCCESS, FIND_COFFEE_GROUP_FAILURE],
            '/api/coffee-groups'
        )
    }
}