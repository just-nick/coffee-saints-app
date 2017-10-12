import {ReducersMapObject} from 'redux';
import {saintReducer} from './app/saint/saint.reducer';
import {buyerReducer} from "./app/buyer/buyer.reducer";
import {coffeeGroupReducer} from "./app/coffee-group/coffee-group.reducer";

export let reducers: CoffeeSaintsReducers = {
    coffeeGroupReducer: coffeeGroupReducer as any,
    saintReducer: saintReducer as any,
    buyerReducer: buyerReducer as any
};

export interface CoffeeSaintsReducers extends ReducersMapObject {
    coffeeGroupReducer: any;
    saintReducer: any;
    buyerReducer: any;
}