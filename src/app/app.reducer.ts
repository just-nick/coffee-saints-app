import {AppActions} from './app.actions';
class AppState {
    view: string;
    loading: boolean;
}

let initialAppState = {
    view: '',
    loading: false
};

export function appReducer(state: AppState = initialAppState, action: any) {
    switch (action.type) {
        case AppActions.SET_VIEW:
            return {
                ...state,
                view: action.view
            };

        case AppActions.LOADING:
            return {
                ...state,
                loading: action.state
            };

        default:
            return state;
    }
}