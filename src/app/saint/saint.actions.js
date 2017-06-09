"use strict";
exports.__esModule = true;
var api_request_factory_1 = require("../common/api-request.factory");
var SaintActions;
(function (SaintActions) {
    SaintActions.ADD_SAINT = 'ADD_SAINT';
    SaintActions.ADD_SAINT_SUCCESS = 'ADD_SAINT_SUCCESS';
    SaintActions.ADD_SAINT_FAILURE = 'ADD_SAINT_FAILURE';
    SaintActions.FIND_SAINT = 'FIND_SAINT';
    SaintActions.FIND_SAINT_SUCCESS = 'FIND_SAINT_SUCCESS';
    SaintActions.FIND_SAINT_FAILURE = 'FIND_SAINT_FAILURE';
    SaintActions.FIND_BUYER_SAINT = 'FIND_BUYER_SAINT';
    SaintActions.FIND_BUYER_SAINT_SUCCESS = 'FIND_BUYER_SAINT_SUCCESS';
    SaintActions.FIND_BUYER_SAINT_FAILURE = 'FIND_BUYER_SAINT_FAILURE';
    // @TODO Programmatically generating API states
    function add(saint) {
        return api_request_factory_1.ApiRequestFactory.put([SaintActions.ADD_SAINT, SaintActions.ADD_SAINT_SUCCESS, SaintActions.ADD_SAINT_FAILURE], '/api/59278ca3110000eb086ccc83', saint);
    }
    SaintActions.add = add;
    function find() {
        return api_request_factory_1.ApiRequestFactory.get([SaintActions.FIND_SAINT, SaintActions.FIND_SAINT_SUCCESS, SaintActions.FIND_SAINT_FAILURE], '/api/5927a9461100001a0a6ccc9f');
    }
    SaintActions.find = find;
    function findBuyer(saintIds) {
        return api_request_factory_1.ApiRequestFactory.post([SaintActions.FIND_BUYER_SAINT, SaintActions.FIND_BUYER_SAINT_SUCCESS, SaintActions.FIND_BUYER_SAINT_FAILURE], '/api/5927bff01100006b0b6cccd6');
    }
    SaintActions.findBuyer = findBuyer;
})(SaintActions = exports.SaintActions || (exports.SaintActions = {}));
