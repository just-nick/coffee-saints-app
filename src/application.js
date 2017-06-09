"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var add_saint_component_1 = require("./app/saint/add-saint/add-saint.component");
var saint_actions_1 = require("./app/saint/saint.actions");
var saint_chooser_component_1 = require("./app/saint/saint-chooser/saint-chooser.component");
var mapStateToProps = function (state) {
    return { app: state.appReducer };
};
var Application = (function (_super) {
    __extends(Application, _super);
    function Application(props) {
        var _this = _super.call(this, props) || this;
        _this.props.dispatch(saint_actions_1.SaintActions.find());
        return _this;
    }
    Application.prototype.render = function () {
        return (<react_redux_1.Provider store={this.props.store}>
                <react_router_dom_1.BrowserRouter>
                    <switch>
                        <react_router_dom_1.Route exact path="/" component={saint_chooser_component_1.SaintChooserComponent}/>
                        <react_router_dom_1.Route path="/add" component={add_saint_component_1.AddSaintComponent}/>
                    </switch>
                </react_router_dom_1.BrowserRouter>
            </react_redux_1.Provider>);
    };
    return Application;
}(React.Component));
Application = __decorate([
    react_redux_1.connect(mapStateToProps)
], Application);
exports["default"] = Application;
