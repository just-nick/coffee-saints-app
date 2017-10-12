import {Saint} from './saint';
import {ApiRequestFactory} from '../common/api-request.factory';

export namespace SaintActions {
    export const ADD_SAINT = 'ADD_SAINT';
    export const ADD_SAINT_SUCCESS = 'ADD_SAINT_SUCCESS';
    export const ADD_SAINT_FAILURE = 'ADD_SAINT_FAILURE';

    export const FIND_SAINT = 'FIND_SAINT';
    export const FIND_SAINT_SUCCESS = 'FIND_SAINT_SUCCESS';
    export const FIND_SAINT_FAILURE = 'FIND_SAINT_FAILURE';

    // @TODO Programmatically generating API states

    export function add(saint: Saint) {
        return ApiRequestFactory.post(
            [ADD_SAINT, ADD_SAINT_SUCCESS, ADD_SAINT_FAILURE],
            '/api/saints',
            saint
        );
    }

    export function find(coffeeGroupId: string) {
        return ApiRequestFactory.get(
            [FIND_SAINT, FIND_SAINT_SUCCESS, FIND_SAINT_FAILURE],
            '/api/coffee-groups/' + coffeeGroupId + '/saints'
        )
    }
}