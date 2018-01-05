import {Reducer, ReducersMapObject} from 'redux';
import {saintReducer} from './app/saint/saint.reducer';
import {buyerReducer} from "./app/buyer/buyer.reducer";
import {coffeeGroupReducer} from './app/coffee-group/coffee-group.reducer';
import {locationReducer} from './app/location/location.reducer';
import {mapsApiReducer} from './app/maps-api/maps-api.reducer';
import {userReducer} from './app/user/user.reducer';

export let reducers: CoffeeSaintsReducers = {
    saintReducer: saintReducer,
    buyerReducer: buyerReducer,
    coffeeGroupReducer : coffeeGroupReducer,
    locationReducer: locationReducer,
    mapsApiReducer: mapsApiReducer,
    userReducer: userReducer
};

export interface CoffeeSaintsReducers extends ReducersMapObject {
    saintReducer: any;
    buyerReducer: any;
    coffeeGroupReducer : any;
    locationReducer: any;
    userReducer: any;
}