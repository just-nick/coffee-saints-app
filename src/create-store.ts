import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as promiseMiddleware from 'redux-promise';
import {reducers} from './reducers';

export default function(data?) {
    let reducer = combineReducers(reducers);
    return applyMiddleware(
        promiseMiddleware
    )(createStore)(reducer, data);
}