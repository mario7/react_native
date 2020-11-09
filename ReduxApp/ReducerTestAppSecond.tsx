//Hooks 時代の React, Redux, React-Redux
//https://qiita.com/suketa/items/ae24a951527d709eaa15
//ReduxとReact （Native）Hooksとの共存
//https://qiita.com/stranger1989/items/4819b5e4539caea828bf

import React, {useReducer} from 'react'
import { combineReducers, createStore} from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

import {View, Text, StatusBar, SafeAreaView, Button, } from 'react-native';

const initialState = {num: 0};

// interface StateProps {
//     count: number;
// }

// interface ActionPros {
//     type: string;
// }

// const reducer = (state: StateProps, action: ActionPros) => {
    const reducer = (state: { count: number; }, action: { type: any; }) => {
    switch (action.type) {
        case 'decrement':
            return {...state, count : state.count - 1};
        case 'increment':
            return {...state, count : state.count + 1};
        
    }
}

//const reducers = combineReducers({ reducer});

const store = createStore(reducer)

const ReducerTestAppSecond = () => {
    return (
      
        <Provider store={store}>
          <ChildComponentUseReactRedux />
        </Provider>
      
    )
  }

const ChildComponentUseReactRedux = () => {
    //const [state, dispatch] = useReducer(reducer, initialState)
    const result = useSelector(state => state)
    const dispatch = useDispatch();

    return (
        <>
        <StatusBar barStyle="dark-content" />
            <SafeAreaView>
            <View style={{
              flexDirection: "row",
              height: 40,
              padding: 0,
              paddingLeft: 20,
              backgroundColor: "gray",
            }} >
                <Text style ={{
                alignSelf : "center",
                paddingRight: 20,
                }}>Using useReducer2 state= {result}</Text>
                <Button onPress={() => dispatch({ type: 'increment' })}
                title="+"
                ></Button>
                <Button onPress={() => dispatch({ type: 'decrement' })}
                title="-"></Button>
            </View>
            </SafeAreaView>
        </>
        
    );
};

export default ReducerTestAppSecond;