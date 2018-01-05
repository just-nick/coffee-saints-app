import {ThunkAction} from 'redux-thunk';
import {Location} from '../location/location';
import {MapsApiActions} from '../maps-api/maps-api.actions';

export namespace ShopActions {
    export const FIND_SHOPS = 'FIND_SHOPS';

    export function findNearby(location: Location): ThunkAction<any, any, any> {
        return (dispatch, getState) => {
            console.log('Shop action');

            MapsApiActions.setup(dispatch, getState).then(() => {
                console.log('Maps ready', location);
                const dummyMap = document.createElement('div');
                // const center = new google.maps.LatLng(location.lat, location.lng);
                const center = new google.maps.LatLng(-33.873157, 151.206116);
                const map = new google.maps.Map(dummyMap, {center});

                const service = new google.maps.places.PlacesService(map);

                const request: google.maps.places.PlaceSearchRequest = {
                    location: center,
                    radius: 500,
                    keyword: 'coffee',
                    openNow: true

                };

                service.nearbySearch(request, (results, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        console.log(results);
                    } else {
                        alert('OHH NOOO, NO COFFEE!!!!!!');
                        console.log(status);
                    }
                });
            })
        }
    }
}