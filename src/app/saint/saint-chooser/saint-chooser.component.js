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
var mapStateToProps = function (state) {
    return {
        app: state.appReducer,
        saints: state.saintReducer
    };
};
var SaintChooserComponent = (function (_super) {
    __extends(SaintChooserComponent, _super);
    function SaintChooserComponent(props) {
        return _super.call(this, props) || this;
    }
    SaintChooserComponent.prototype.render = function () {
        var saints = this.props.saints.saintsList.saints;
        var saintsLoading = this.props.saints.saintsList.loading;
        return (<form>
            <h1>Choose your Saint</h1>
            <react_router_dom_1.Link to="/add">Add a saint</react_router_dom_1.Link>
            {this.saintList(saints, saintsLoading)}
            <button type="submit">Who Buys?</button>
        </form>);
    };
    SaintChooserComponent.prototype.saintList = function (saints, loading) {
        if (loading) {
            return (<div className="loading">Loading...</div>);
        }
        else {
            return (<ul>{saints.map(this.saintItem)}</ul>);
        }
    };
    SaintChooserComponent.prototype.saintItem = function (saint, index) {
        return (<li key={index}>
                <input id={'saint' + index} type="checkbox"/>
                <label htmlFor={'saint' + index}>{saint.name}</label>
                <div className="thumb"><img src=""/></div>
            </li>);
    };
    return SaintChooserComponent;
}(React.Component));
SaintChooserComponent = __decorate([
    react_redux_1.connect(mapStateToProps)
], SaintChooserComponent);
exports.SaintChooserComponent = SaintChooserComponent;
