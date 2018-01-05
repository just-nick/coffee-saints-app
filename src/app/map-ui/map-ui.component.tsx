import * as React from 'react';
import {connect, DispatchProp, ProviderProps} from 'react-redux';
import {LocationStore} from '../location/location.reducer';
import {LocationActions} from '../location/location.actions';

class MapUIComponent extends React.Component<IMapUIProps, IMapUIState> {
    constructor(props: IMapUIProps) {
        super(props);
    }

    render() {
        const currentPosition = this.props.locationReducer.location;

        if (!currentPosition) {
            this.props.dispatch(LocationActions.getCurrent());
        } else {
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 17,
                center: currentPosition
            });

            new google.maps.Marker({
                position: currentPosition,
                map: map
            });
        }
        return (<div/>);
    }
}

interface IMapUIProps extends DispatchProp<any> {
    locationReducer: LocationStore;
    mapsApiReducer: any;
}

interface IMapUIState {
}

export default connect<{}, {}, ProviderProps>((state) => ({
    locationReducer: state.locationReducer,
    mapsApiReducer: state.mapsApiReducer
}))(MapUIComponent as any);
