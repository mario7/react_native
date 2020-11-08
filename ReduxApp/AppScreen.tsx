import React, {
    FC,
    useContext,
} from 'react';
import { Button,
        SafeAreaView,
        StatusBar,
        StyleSheet,
        View,
        Text } from 'react-native';

import {StoreContext} from './ReducerTestAppFirst';

const AppScreen: FC = () => {

    const { state, dispatch} = useContext(StoreContext);

    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <View style={styles.horizonViewStyle }>
            <Text style={styles.titleStyle}>Count: {state.count}</Text>
            <Button onPress= {() => dispatch({type: 'decrement'})}
            title="-"></Button>
            <Button onPress= {() => dispatch({type: 'increment'})}
            title="+"></Button>
        </View>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    horizonViewStyle: {
        flexDirection: "row",
        height: 40,
        padding: 0,
        paddingLeft: 20,
        backgroundColor: "gray",
    },
    titleStyle :{
        alignSelf : "center",
        paddingRight: 20,
        }
});

export default AppScreen;