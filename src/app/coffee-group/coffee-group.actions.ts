import {CoffeeGroup} from './coffee-group';
import {ApiRequestFactory} from '../common/api-request.factory';

export namespace CoffeeGroupActions{
    export const ADD_GROUP = 'ADD_GROUP';
    export const ADD_GROUP_SUCCESS = 'ADD_GROUP_SUCCESS';
    export const ADD_GROUP_FAILURE='ADD_GROUP_FAILURE';

    export const FIND_GROUPS = 'FIND_GROUPS';
    export const FIND_GROUPS_SUCCESS = 'FIND_GROUPS_SUCCESS';
    export const FIND_GROUPS_FAILURE='FIND_GROUPS_FAILURE';

    export function add(coffeeGroup:CoffeeGroup){
        return (ApiRequestFactory.post(
            [ADD_GROUP,
                    ADD_GROUP_SUCCESS,
                    ADD_GROUP_FAILURE],
                    '/api/coffee-groups',
                coffeeGroup))

    }

    export function get(){
        return (ApiRequestFactory.get(
            [FIND_GROUPS,
                FIND_GROUPS_SUCCESS,
                FIND_GROUPS_FAILURE],
            '/api/coffee-groups'
        ))
    }
}