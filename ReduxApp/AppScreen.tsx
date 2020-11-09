import React, {
    FC,
    useContext,
    useState,
} from 'react';
import { Button,
        SafeAreaView,
        StatusBar,
        StyleSheet,
        View,
        Text, 
        ScrollView,
        Alert,
        TextInput} from 'react-native';

import {StoreContext} from './ReducerTestAppFirst';

const AppScreen: FC = () => {

    const { state, dispatch} = useContext(StoreContext);
    const [value, onChangeText] = React.useState('');

    const [infos, setInfos] = useState(["a", "b", "c"])
    
    const rows = infos.map ((info, index) =>
    
        <Text>{info}</Text>
    );

    var textInputRef = React.createRef<TextInput>();

    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={styles.horizonViewStyle }>
            <Text style={styles.titleStyle}>Count: {state.count}</Text>
            <Button onPress= {() => dispatch({type: 'decrement'})}
            title="-"></Button>
            <Button onPress= {() => dispatch({type: 'increment'})}
            title="+"></Button>
        </View>
        {rows}
        </ScrollView>
        <TextInput
        ref={ textInputRef }
        onChangeText={(text) => onChangeText(text)}
        ></TextInput>
        <Button title="Add" 
                onPress= {() => {
                    if(value != "") {
                        setInfos( [...infos, value]);
                        textInputRef.current?.clear();
                        onChangeText("")
                    } else {
                        Alert.alert("input error")
                    }
                   }
                 } />
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
    },
    scrollView: {
        backgroundColor: "green",
        },
});

export default AppScreen;