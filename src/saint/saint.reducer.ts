import {Saint} from "./saint";
import {SaintActions} from './saint.actions';

export function saintReducer(state: Array<Saint> = [], action: {type: string, saint: Saint}){
    switch (action.type) {
        case SaintActions.ADD_SAINT:
            return [
                ...state,
                action.saint
            ];

        default:
            return state;
    }
}