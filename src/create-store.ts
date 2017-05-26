import { createStore, applyMiddleware, combineReducers } from 'redux';
//import * as promiseMiddleware from 'redux-promise';
import {apiMiddleware} from 'redux-api-middleware';
import {reducers} from './reducers';

export default function(data?) {
    let reducer = combineReducers(reducers);
    return applyMiddleware(
        apiMiddleware
    )(createStore)(reducer, data);
}