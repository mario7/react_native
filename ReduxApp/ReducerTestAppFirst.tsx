// https://qiita.com/stranger1989/items/4819b5e4539caea828bf

import React, {
    FC,
    useReducer,
    createContext,
} from 'react';

import AppScreen from './AppScreen';

const initialState = { count: 0}

interface StateProps {
    count: number;
}

interface ActionPros {
    type: string;
}

interface StoreContextProps {

    state: StateProps;
    dispatch: ({type}: ActionPros) => void;
}

const reducer = (state: StateProps, action: ActionPros) => {
    switch(action.type) {
        case 'increment': 
        return {count: state.count + 1};
        case 'decrement' :
        return {count: state.count - 1};
        default:
            throw new Error();
    }
};

export const StoreContext = createContext({} as StoreContextProps);

const ReducerTestAppFirst: FC = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            <AppScreen />
        </StoreContext.Provider>
    );
};

export default ReducerTestAppFirst;


