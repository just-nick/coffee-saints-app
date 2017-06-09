import {Saint} from './saint';
import {ApiRequestFactory} from '../common/api-request.factory';

export namespace SaintActions {
    export const ADD_SAINT = 'ADD_SAINT';
    export const ADD_SAINT_SUCCESS = 'ADD_SAINT_SUCCESS';
    export const ADD_SAINT_FAILURE = 'ADD_SAINT_FAILURE';

    export const FIND_SAINT = 'FIND_SAINT';
    export const FIND_SAINT_SUCCESS = 'FIND_SAINT_SUCCESS';
    export const FIND_SAINT_FAILURE = 'FIND_SAINT_FAILURE';

    export const FIND_BUYER_SAINT = 'FIND_BUYER_SAINT';
    export const FIND_BUYER_SAINT_SUCCESS = 'FIND_BUYER_SAINT_SUCCESS';
    export const FIND_BUYER_SAINT_FAILURE = 'FIND_BUYER_SAINT_FAILURE';

    // @TODO Programmatically generating API states

    export function add(saint: Saint) {
        return ApiRequestFactory.put(
            [ADD_SAINT, ADD_SAINT_SUCCESS, ADD_SAINT_FAILURE],
            '/api/59278ca3110000eb086ccc83',
            saint
        );
    }

    export function find() {
        return ApiRequestFactory.get(
            [FIND_SAINT, FIND_SAINT_SUCCESS, FIND_SAINT_FAILURE],
            '/api/5927a9461100001a0a6ccc9f'
        )
    }

    export function findBuyer(saintIds: Array<number>) {
        return ApiRequestFactory.post(
            [FIND_BUYER_SAINT, FIND_BUYER_SAINT_SUCCESS, FIND_BUYER_SAINT_FAILURE],
            '/api/5927bff01100006b0b6cccd6',

        )
    }
}