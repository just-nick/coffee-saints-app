import * as React from 'react';
import {Provider, connect} from 'react-redux';
import {SaintChooserComponent} from './saint-chooser/saint-chooser.component';
import {AddSaintComponent} from './add-saint/add-saint.component';

const mapStateToProps = (state) => {
    return {app: state.appReducer}
};

@connect(mapStateToProps)
export default class Application extends React.Component<any, any> {
    constructor(props){
        super(props);
        console.log(this.props.app);
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