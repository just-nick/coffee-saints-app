import * as React from 'react';
import {connect, DispatchProp, Provider, ProviderProps} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
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
            <div className="coffee-saints">
                <header>Coffee Saints</header>
                <div className="body">
                    <Provider store={this.props.store}>
                        <BrowserRouter>
                            <switch>
                                <Route path="/saints" component={SaintChooserComponent as any}/>
                                <Route path="/add" component={AddSaintComponent as any}/>
                                <Route path="/buy" component={BuyerComponent as any}/>
                                <Route exact path="/" component={CoffeeGroupComponent as any}/>
                            </switch>
                        </BrowserRouter>
                    </Provider>
                </div>
                <footer>

                </footer>
            </div>
        );
    }
}

export default connect<{}, {}, ProviderProps>(() => ({}))(Application);