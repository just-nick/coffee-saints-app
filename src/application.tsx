import * as React from 'react';
import {connect, DispatchProp, Provider, ProviderProps} from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import AddSaintComponent from './app/saint/add-saint/add-saint.component';
import BuyerComponent from './app/buyer/buyer.component';
import {SaintActions} from './app/saint/saint.actions';
import SaintChooserComponent from './app/saint/saint-chooser/saint-chooser.component';
import CoffeeGroupListComponent from './app/coffee-group/coffee-group-list/coffee-group-list.component';

class Application extends React.Component<ProviderProps & DispatchProp<any>, {}> {
    constructor(props: ProviderProps & DispatchProp<any>) {
        super(props);
        this.props.dispatch(SaintActions.find());
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
                                <Route exact path="/saints" component={SaintChooserComponent as any}/>
                                <Route path="/add" component={AddSaintComponent as any}/>
                                <Route path="/buy" component={BuyerComponent as any}/>
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