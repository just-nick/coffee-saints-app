import {MapsApiActions} from '../maps-api/maps-api.actions';
import {Location} from './location';

export class LocationActions {
    public static GET_LOCATION = 'GET_LOCATION';

    public static getCurrent() {

        return (dispatch: any, getState: any) => {
            return MapsApiActions.setup(dispatch, getState).then(() => {
                LocationActions.getCurrentLocation().then((location) => {
                    dispatch({
                        type: LocationActions.GET_LOCATION,
                        location
                    });
                }, (e) => {
                    console.log(e);
                    alert('BROKEN!');
                });
            });
        }
    }

    private static getCurrentLocation(): Promise<Location> {
        const uluru: Location = {
            lat: -25.363,
            lng: 131.044
        };

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            return new Promise((resolve) => {
                navigator.geolocation.getCurrentPosition(function (position) {
                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                }, function (e) {
                    console.log(e);
                    resolve(uluru);
                });
            });
        } else {
            // Browser doesn't support Geolocation
            console.log('Browser does not support location');
            return Promise.resolve(uluru);
        }
    }
}