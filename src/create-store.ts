import { createStore, applyMiddleware, combineReducers } from 'redux';
//import * as promiseMiddleware from 'redux-promise';
import {apiMiddleware} from 'redux-api-middleware';
import {CoffeeSaintsReducers, reducers} from './reducers';
import thunk from 'redux-thunk';

export default function(data?: CoffeeSaintsReducers) {
    let reducer = combineReducers(reducers);
    return applyMiddleware(
        apiMiddleware, thunk
    )(createStore)(reducer, data);
}