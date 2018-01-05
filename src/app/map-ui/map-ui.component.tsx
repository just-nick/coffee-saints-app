import * as React from 'react';
import {connect, DispatchProp, ProviderProps} from 'react-redux';
import {LocationStore} from '../location/location.reducer';

class MapUIComponent extends React.Component<IMapUIProps, IMapUIState> {
    constructor(props: IMapUIProps) {
        super(props);
    }

    render() {
        if(this.props.mapsApiReducer.apiReady) {
            // const uluru = {
            //     lat: this.props.locationReducer.location.lat,
            //     lng: this.props.locationReducer.location.lng
            // };

            const sydney = {
                lat: -33.873157,
                lng: 151.206116
            };

            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: sydney
            });
            const marker = new google.maps.Marker({
                position: sydney,
                map: map
            });
        }
        return (<div/>);
    }
}

interface IMapUIProps extends DispatchProp<any> {
    locationReducer : LocationStore;
    mapsApiReducer: any;
}

interface IMapUIState {}

export default connect<{}, {}, ProviderProps>((state) => ({
    locationReducer: state.locationReducer,
    mapsApiReducer: state.mapsApiReducer
}))(MapUIComponent as any);
