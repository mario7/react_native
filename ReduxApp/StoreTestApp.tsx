import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import fireBaseReducer from './reducer/FireBaseReducer'
import sampleReducer  from './reducer/SampleReducer'
import StoreTestAppScreen from './StoreTestAppScreen'

const rootReducer = combineReducers({
    list: fireBaseReducer,
    name: sampleReducer
    });

const store = configureStore({
reducer: rootReducer,
});

const StoreTestApp = () => {
    return (
    <Provider store={store}>
        <StoreTestAppScreen/>
    </Provider>
    );

};

export default StoreTestApp