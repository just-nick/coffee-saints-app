import {Location} from './location';

export interface LocationStore {
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