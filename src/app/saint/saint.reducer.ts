import {SaintActions} from './saint.actions';
import {SaintStore} from './saint.store';

let initialState: SaintStore = {
    saintsList: {
        saints: [],
        loading: true
    }
};

export function saintReducer(state: SaintStore = initialState, action: ApiRequestAction) {
    switch (action.type) {
        case SaintActions.ADD_SAINT:
            return {
                ...state,
                saintsList: {
                    ...state.saintsList,
                    loading: true
                }
            };

        case SaintActions.ADD_SAINT_SUCCESS:
            return {
                ...state,
                saintsList: {
                    ...state.saintsList,
                    saints: [
                        ...state.saintsList.saints,
                        action.payload
                    ],
                    loading: false
                }
            };

        case SaintActions.ADD_SAINT_FAILURE:
            return state;


        case SaintActions.FIND_SAINT:
            return {
                ...state,
                saintsList: {
                    ...state.saintsList,
                    loading: true
                }
            };

        case SaintActions.FIND_SAINT_SUCCESS:
            return {
                ...state,
                saintsList: {
                    ...state.saintsList,
                    saints: action.payload,
                    loading: false
                }
            };

        case SaintActions.FIND_SAINT_FAILURE:
            return state;

        default:
            return state;
    }
}