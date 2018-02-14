import {Saint} from "../saint/saint";

export interface BuyerStore {
    buyer: Saint,
    consumerIds: number[],
    discover: boolean,
    loading: boolean
}