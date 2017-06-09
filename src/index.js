"use strict";
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
var create_store_1 = require("./create-store");
var application_1 = require("./application");
var store = create_store_1["default"]();
react_dom_1.render(<application_1["default"] store={store}/>, document.getElementById('app'));
