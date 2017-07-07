import {Action} from "redux";

export interface ApiRequestAction extends Action {
    payload: any;
    error: boolean;
    meta: any;
}