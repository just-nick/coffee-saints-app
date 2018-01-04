import {Location} from './location';
import {LocationActions} from './location.actions';

interface LocationStore {
    apiReady: boolean;
    location: Location;
}

const initialState: LocationStore = {
    apiReady: false,
    location: null
};


export function locationReducer(state: LocationStore = initialState, action: any): LocationStore {
    switch (action.type) {
        default:
            return state;
    }
}