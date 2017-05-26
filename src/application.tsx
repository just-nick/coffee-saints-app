import * as React from 'react';
import {Provider, connect} from 'react-redux';
import {SaintChooserComponent} from './app/saint/saint-chooser/saint-chooser.component';
import {AddSaintComponent} from './app/saint/add-saint/add-saint.component';
import {SaintActions} from './app/saint/saint.actions';

const mapStateToProps = (state) => {
    return {app: state.appReducer}
};

@connect(mapStateToProps)
export default class Application extends React.Component<any, any> {
    constructor(props){
        super(props);
        console.log(this.props.app);
        this.props.dispatch(SaintActions.find());
    }

    render() {
        let view = this.props.app.view;
        let loading = this.props.app.loading;

        if(loading) {
            return (<div className="loading">Loading...</div>);
        }

        else {
            switch (view) {
                case 'add':
                    return (
                        <Provider store={ this.props.store }>
                            <AddSaintComponent />
                        </Provider>
                    );

                default:
                    return (
                        <Provider store={ this.props.store }>
                            <SaintChooserComponent />
                        </Provider>
                    );

            }
        }
    }
}