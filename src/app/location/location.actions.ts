import {MapsApiActions} from '../maps-api/maps-api.actions';
import {Location} from './location';

export namespace LocationActions {
    export const GET_LOCATION = 'GET_LOCATION';

    const uluru: Location = {
        lat: -25.363,
        lng: 131.044
    };

    export function getCurrent() {
        return (dispatch: any, getState: any) => {
            return MapsApiActions.setup(dispatch, getState).then(() => {
                dispatch({
                    type: GET_LOCATION,
                    location: uluru
                });
            }, () => {
                alert('BROKEN!');
            });
        }
    }
}