import {Location} from './location';
import {LocationActions} from './location.actions';

export interface LocationStore {
    location: Location;
}

const initialState: LocationStore = {
    location: null
};


export function locationReducer(state: LocationStore = initialState, action: any): LocationStore {
    switch (action.type) {
        case LocationActions.GET_LOCATION :
            return {
                location: action.location
            };

        default:
            return state;
    }
}