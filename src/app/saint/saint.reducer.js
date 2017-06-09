"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var saint_actions_1 = require("./saint.actions");
var initialState = {
    saintsList: {
        saints: [],
        loading: true
    }
};
function saintReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case saint_actions_1.SaintActions.ADD_SAINT:
            return __assign({}, state, { saintsList: __assign({}, state.saintsList, { loading: true }) });
        case saint_actions_1.SaintActions.ADD_SAINT_SUCCESS:
            return __assign({}, state, { saintsList: __assign({}, state.saintsList, { saints: state.saintsList.saints.concat([
                        action.payload
                    ]), loading: false }) });
        case saint_actions_1.SaintActions.ADD_SAINT_FAILURE:
            return state;
        case saint_actions_1.SaintActions.FIND_SAINT:
            return __assign({}, state, { saintsList: __assign({}, state.saintsList, { loading: true }) });
        case saint_actions_1.SaintActions.FIND_SAINT_SUCCESS:
            return __assign({}, state, { saintsList: __assign({}, state.saintsList, { saints: action.payload, loading: false }) });
        case saint_actions_1.SaintActions.FIND_SAINT_FAILURE:
            return state;
        default:
            return state;
    }
}
exports.saintReducer = saintReducer;
