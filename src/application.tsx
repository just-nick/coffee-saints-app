import * as React from 'react';
import {connect, DispatchProp, Provider, ProviderProps} from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import AddSaintComponent from './app/saint/add-saint/add-saint.component';
import BuyerComponent from './app/buyer/buyer.component';
import SaintChooserComponent from './app/saint/saint-chooser/saint-chooser.component';
import CoffeeGroupListComponent from './app/coffee-group/coffee-group-list/coffee-group-list.component';
import {CoffeeGroupActions} from "./app/coffee-group/coffee-group.actions";

class Application extends React.Component<ProviderProps & DispatchProp<any>, {}> {
    constructor(props: ProviderProps & DispatchProp<any>) {
        super(props);
        this.props.dispatch(CoffeeGroupActions.find());
    }

    render() {
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
                                <Route exact path="/" component={CoffeeGroupListComponent as any}/>
                                <Route exact path="/groups/:coffeeGroupId" component={SaintChooserComponent as any}/>
                                <Route exact path="/groups/:coffeeGroupId/add-saint" component={AddSaintComponent as any}/>
                                <Route exact path="/groups/:coffeeGroupId/who-buys" component={BuyerComponent as any}/>
                            </switch>
                        </Provider>
                    </div>
                    <footer></footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect<{}, {}, ProviderProps>(() => ({}))(Application);