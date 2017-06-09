"use strict";
exports.__esModule = true;
var redux_api_middleware_1 = require("redux-api-middleware");
var ApiRequestFactory;
(function (ApiRequestFactory) {
    function get(types, endpoint) {
        return _a = {},
            _a[redux_api_middleware_1.CALL_API] = {
                types: types,
                endpoint: endpoint,
                method: 'GET'
            },
            _a;
        var _a;
    }
    ApiRequestFactory.get = get;
    function put(types, endpoint, body) {
        var bodyContent = bodyTest(body);
        return _a = {},
            _a[redux_api_middleware_1.CALL_API] = {
                types: types,
                endpoint: endpoint,
                method: 'PUT',
                headers: { 'Content-Type': bodyContent.contentType },
                body: bodyContent.body
            },
            _a;
        var _a;
    }
    ApiRequestFactory.put = put;
    function post(types, endpoint, body) {
        var bodyContent = bodyTest(body);
        return _a = {},
            _a[redux_api_middleware_1.CALL_API] = {
                types: types,
                endpoint: endpoint,
                method: 'POST',
                headers: { 'Content-Type': bodyContent.contentType },
                body: bodyContent.body
            },
            _a;
        var _a;
    }
    ApiRequestFactory.post = post;
    function bodyTest(rawBody) {
        var contentType = 'application/json';
        var body;
        if (rawBody !== undefined) {
            body = JSON.stringify(rawBody);
        }
        return {
            contentType: contentType,
            body: body
        };
    }
})(ApiRequestFactory = exports.ApiRequestFactory || (exports.ApiRequestFactory = {}));
