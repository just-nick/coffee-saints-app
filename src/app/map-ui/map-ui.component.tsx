import * as React from 'react';
import {connect, DispatchProp, ProviderProps} from 'react-redux';
import {LocationStore} from '../location/location.reducer';
import {LocationActions} from '../location/location.actions';
import * as ReactDOM from 'react-dom';

class MapUIComponent extends React.Component<IMapUIProps, any> {
    constructor(props: IMapUIProps) {
        super(props);
        this.state = {
            componentInitialized: false
        }
    }

    componentDidMount() {
        this.setState({
            componentInitialized: true
        });
    }

    render() {
        console.log(this.props);
        const currentPosition = this.props.locationReducer.location;
        if (!currentPosition) {
            this.props.dispatch(LocationActions.getCurrent());
        } else {
            if(this.state.componentInitialized) {
                const base = ReactDOM.findDOMNode(this);
                const map = new google.maps.Map(base.parentElement, {
                    zoom: 17,
                    center: currentPosition
                });

                new google.maps.Marker({
                    position: currentPosition,
                    map: map
                });
            }
        }
        return <div/>;
    }
}

interface IMapUIProps extends DispatchProp<any> {
    locationReducer: LocationStore;
    mapsApiReducer: any;
}


export default connect<{}, {}, ProviderProps>((state) => ({
    locationReducer: state.locationReducer,
    mapsApiReducer: state.mapsApiReducer
}))(MapUIComponent as any);
