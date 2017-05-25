export namespace AppActions {
    export const SET_VIEW = 'SET_APP_VIEW';
    export const LOADING = 'APP_LOADING';

    export function setView(view: string) {
        return {
            type: SET_VIEW,
            view
        };
    }

    export function loading(state: boolean){
        return {
            type: LOADING,
            state
        }
    }
}