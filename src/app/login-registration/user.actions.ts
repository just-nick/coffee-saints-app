import {ApiRequestFactory} from '../common/api-request.factory';

export namespace UserActions {
    export const LOGIN = 'LOGIN';
    export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    export const LOGIN_FAILURE = 'LOGIN_FAILURE';

    export const REGISTER = 'REGISTER';
    export const REGISTER_SUCCESS = Symbol('REGISTER_SUCCESS');
    export const REGISTER_FAILURE = Symbol('REGISTER_FAILURE');

    export function login(username: string, password: string) {
        // return ApiRequestFactory.get(
        //     [{
        //         type: LOGIN,
        //         meta: {username, password}
        //     }, LOGIN_SUCCESS, LOGIN_FAILURE],
        //     '/api/login/')
        console.log('login action', username, password);
        return {
            type: LOGIN_SUCCESS,
            payload: {username, password}
        }
    }

    export function register(username: string, password: string) {
        return ApiRequestFactory.post(
            [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE],
            '/api/register',
            {username: username, password: password}
        );
    }
}