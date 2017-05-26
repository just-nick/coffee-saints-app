import * as React from 'react';
import {connect, Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {AddSaintComponent} from './app/saint/add-saint/add-saint.component';
import {SaintActions} from './app/saint/saint.actions';
import {SaintChooserComponent} from './app/saint/saint-chooser/saint-chooser.component';

const mapStateToProps = (state) => {
    return {app: state.appReducer}
};

@connect(mapStateToProps)
export default class Application extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.props.dispatch(SaintActions.find());
    }

    render() {
        return (
            <Provider store={ this.props.store }>
                <BrowserRouter>
                    <switch>
                        <Route exact path="/" component={SaintChooserComponent} />
                        <Route path="/add" component={AddSaintComponent} />
                    </switch>
                </BrowserRouter>
            </Provider>
        );
    }
}