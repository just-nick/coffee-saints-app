import {Saint} from "./saint";

export interface SaintStore {
    saintsList: {
        saints: Array<Saint>,
        loading: boolean
    }
}