import {ReducersMapObject} from 'redux';
import {saintReducer} from './saint/saint.reducer';
import {appReducer} from './app/app.reducer';

export let reducers: ReducersMapObject = {
    saintReducer,
    appReducer
};