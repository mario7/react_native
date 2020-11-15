import React from 'react';
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
import {useSelector ,useDispatch} from 'react-redux';
import {loadChat, saveChat} from './reducer/FireBaseReducer'
import {setName, className}  from './reducer/SampleReducer'

const StoreTestAppScreen = () => {

    //const {state, dispatch} = useContext(StoreContext);
    const [value, onChangeText] = React.useState('');

    // interface Chat {
    //     message: String,
    //     sendTime: String,
    // }
    //const [infos, setInfos] = useState<Chat[]>([]);
    //const numRows = infos.map ((info) =><Text>{info.message}</Text>);

    var textInputRef = React.createRef<TextInput>();

    const results = useSelector(state => state.list.chats );

    const firestoreRows = results.map ((chat) =><Text>{chat.message}</Text>);
    // const firestoreRows() {
    //     //console.log(result.list.chats);
    //     //undefined is not an object(evaluating )
    //     //TypeError: undefined is not an object (evaluating 'resultList.map')
    //     return results.map ((chat) =><Text>{chat.message}</Text>);
    // }

    var textInputRef = React.createRef<TextInput>();

    const dispatch = useDispatch();

    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
        {firestoreRows}
        </ScrollView>
        <TextInput
        ref={ textInputRef }
        onChangeText={(text) => onChangeText(text)}
        />
        <Button title="Add" 
                onPress= {() => {
                    if(value != "") {
                        //setInfos( [...infos, value]);
                        //onChangeText("")
                        console.log('Add onPress', value);
                        dispatch(saveChat(value))
                        textInputRef.current?.clear();
                        //dispatch(loadChat())
                        
                    }
                   }
                 } />
         <Button title="Load" 
                onPress= {() => {
                    console.log('Load onPress');
                    dispatch(loadChat())
                }
        }    />    
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

export default StoreTestAppScreen;