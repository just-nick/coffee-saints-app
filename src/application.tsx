import * as React from 'react';
import {connect, DispatchProp, Provider, ProviderProps} from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import AddSaintComponent from './app/saint/add-saint/add-saint.component';
import BuyerComponent from './app/buyer/buyer.component';
import SaintChooserComponent from './app/saint/saint-chooser/saint-chooser.component';
import CoffeeGroupComponent from './app/coffee-group/coffee-group.component';


class Application extends React.Component<ProviderProps & DispatchProp<any>, {}> {
    constructor(props: ProviderProps & DispatchProp<any>) {
        super(props);
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
                                <Route exact path="/" component={CoffeeGroupComponent as any}/>
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