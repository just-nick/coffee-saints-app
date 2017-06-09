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
var saint_actions_1 = require("../saint.actions");
var mapStateToProps = function (state) {
    return {
        saints: state.saintReducer,
        app: state.appReducer
    };
};
var AddSaintComponent = (function (_super) {
    __extends(AddSaintComponent, _super);
    function AddSaintComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            name: ''
        };
        return _this;
    }
    AddSaintComponent.prototype.onSubmit = function (e) {
        e.preventDefault();
        var newSaint = {
            name: this.state.name,
            coffee: 0
        };
        this.props.dispatch(saint_actions_1.SaintActions.add(newSaint));
        this.props.history.push('/');
    };
    AddSaintComponent.prototype.onSaintChange = function (event) {
        this.setState({ name: event.target.value });
    };
    AddSaintComponent.prototype.render = function () {
        var _this = this;
        return (<div>
                <form onSubmit={function (e) { return _this.onSubmit(e); }}>
                    <input autoFocus={true} value={this.state.name} onChange={function (e) { return _this.onSaintChange(e); }}/>
                    <button type="submit">Add</button>
                </form>
            </div>);
    };
    return AddSaintComponent;
}(React.Component));
AddSaintComponent = __decorate([
    react_redux_1.connect(mapStateToProps)
], AddSaintComponent);
exports.AddSaintComponent = AddSaintComponent;
