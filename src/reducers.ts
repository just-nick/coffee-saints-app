import {Reducer, ReducersMapObject} from 'redux';
import {saintReducer} from './app/saint/saint.reducer';
import {buyerReducer} from "./app/buyer/buyer.reducer";
import {coffeeGroupReducer} from './app/coffee-group/coffee-group.reducer';
import {locationReducer} from './app/location/location.reducer';
import {mapsApiReducer} from './app/maps-api/maps-api.reducer';
import {userReducer} from './app/login-registration/user.reducer';

export let reducers: CoffeeSaintsReducers = {
    saintReducer: saintReducer as any,
    buyerReducer: buyerReducer as any,
    coffeeGroupReducer : coffeeGroupReducer as any,
    locationReducer: locationReducer as any,
    mapsApiReducer: mapsApiReducer as any,
    userReducer: userReducer as any
};

export interface CoffeeSaintsReducers extends ReducersMapObject {
    saintReducer: any;
    buyerReducer: any;
    coffeeGroupReducer : any;
    locationReducer: any;
    mapsApiReducer: any;
    userReducer: any;
}