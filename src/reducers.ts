import {Reducer, ReducersMapObject} from 'redux';
import {saintReducer} from './app/saint/saint.reducer';
import {buyerReducer} from "./app/buyer/buyer.reducer";

export let reducers: CoffeeSaintsReducers = {
    saintReducer,
    buyerReducer
};

export interface CoffeeSaintsReducers extends ReducersMapObject {
    saintReducer: any;
    buyerReducer: any;
}