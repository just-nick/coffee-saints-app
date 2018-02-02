import {History} from 'history';
import * as React from 'react';
import {connect, DispatchProp, Provider, ProviderProps} from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import BuyerComponent from './app/buyer/buyer.component';
import CoffeeGroupComponent from './app/coffee-group/coffee-group.component';
import {LocationActions} from './app/location/location.actions';
import AddSaintComponent from './app/saint/add-saint/add-saint.component';
import SaintChooserComponent from './app/saint/saint-chooser/saint-chooser.component';
import {ShopActions} from './app/shop/shop.actions';
import LocationState = History.LocationState;

let readyToGo = true;

class Application extends React.Component<ProviderProps & DispatchProp<any> & {locationReducer: LocationState}, {}> {
    constructor(props: ProviderProps & DispatchProp<any> & {locationReducer: LocationState}) {
        super(props);
    }

    render() {
        if (readyToGo) {
            this.props.dispatch(LocationActions.getCurrent());
            readyToGo = false;
        }

        if (this.props.locationReducer.location) {
            this.props.dispatch(ShopActions.findNearby(this.props.locationReducer.location));
        }

        return (
            <BrowserRouter>
                <div className="coffee-saints">
                    <header>
                        <Link to={"/"}>
                            Coffee Saints
                        </Link>
                    </header>
                    <div className="body">
                        <Provider store={this.props.store}>
                            <switch>
                                <Route exact path="/" component={CoffeeGroupComponent as any}/>
                                <Route exact path="/groups/:coffeeGroupId" component={SaintChooserComponent as any}/>
                                <Route exact path="/groups/:coffeeGroupId/add-saint" component={AddSaintComponent as any}/>
                                <Route exact path="/groups/:coffeeGroupId/who-buys" component={BuyerComponent as any}/>
                            </switch>
                        </Provider>
                        <div id='map' />
                    </div>
                    <footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect<{}, {}, ProviderProps>((state) => ({
    locationReducer: state.locationReducer
}))(Application);