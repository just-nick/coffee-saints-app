import {Saint} from "../saint/saint";

export interface BuyerStore {
    buyer: {
        saint: Saint,
        discover: boolean,
        loading: boolean
    }
}