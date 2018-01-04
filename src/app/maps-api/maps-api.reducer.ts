import {MapsApiActions} from './maps-api.actions';

interface MapsApiStore {
    apiReady: boolean;
}

const initialState: MapsApiStore = {
    apiReady: false
};

export function mapsApiReducer(state: MapsApiStore = initialState, action: any): MapsApiStore {
    switch (action.type) {
        case MapsApiActions.UPDATE_API_STATE:
            return {
                ...state,
                apiReady: action.apiReady
            };

        default:
            return state;
    }
}