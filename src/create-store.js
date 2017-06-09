"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
//import * as promiseMiddleware from 'redux-promise';
var redux_api_middleware_1 = require("redux-api-middleware");
var reducers_1 = require("./reducers");
function default_1(data) {
    var reducer = redux_1.combineReducers(reducers_1.reducers);
    return redux_1.applyMiddleware(redux_api_middleware_1.apiMiddleware)(redux_1.createStore)(reducer, data);
}
exports["default"] = default_1;
