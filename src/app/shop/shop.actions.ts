import {ThunkAction} from 'redux-thunk';
import {Location} from '../location/location';
import {MapsApiActions} from '../maps-api/maps-api.actions';

export namespace ShopActions {
    export const FIND_SHOPS = 'FIND_SHOPS';

    export function findNearby(location: Location): ThunkAction<any, any, any> {
        return (dispatch, getState) => {
            MapsApiActions.setup(dispatch, getState).then(() => {
                const dummyMap = document.createElement('div');

                const center = new google.maps.LatLng(location.lat, location.lng);
                const map = new google.maps.Map(dummyMap, {center});
                const service = new google.maps.places.PlacesService(map);
                const request: google.maps.places.PlaceSearchRequest = {
                    location: center,
                    radius: 500,
                    keyword: 'coffee',
                    openNow: true

                };

                service.nearbySearch(request, (results, status) => {
                    switch (status) {
                        case google.maps.places.PlacesServiceStatus.OK:
                        case google.maps.places.PlacesServiceStatus.ZERO_RESULTS:
                            console.log('Results found: ', results);
                            break;
                        default:
                            console.log('Coffee search error', status, results);
                    }
                });
            })
        }
    }
}