import * as React from 'react';
import {connect, DispatchProp, ProviderProps} from 'react-redux';
import {LocationStore} from '../location/location.reducer';

class MapUIComponent extends React.Component<IMapUIProps, IMapUIState> {
    constructor(props: IMapUIProps) {
        super(props);
    }

    render() {
        if (this.props.mapsApiReducer.apiReady) {

            const sydney = {
                lat: -33.873157,
                lng: 151.206116
            };

            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 17
            });

            const marker = new google.maps.Marker({
                position: null,
                map: map
            });

            this.setCurrentLocation(map, marker);
        }
        return (<div/>);
    }

    private setCurrentLocation(map: google.maps.Map, marker: google.maps.Marker): any {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const currentPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(currentPosition);
                marker.setPosition(currentPosition);
            }, function (e) {
                console.log(e);
            });
        } else {
            // Browser doesn't support Geolocation
            console.log('Browser does not support location');
        }
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
