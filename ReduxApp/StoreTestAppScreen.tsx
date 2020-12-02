import React, { useContext, useEffect } from 'react';
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
import {Chat, addChat, saveChat} from './reducer/FireBaseReducer'
import firestore from '@react-native-firebase/firestore';

const StoreTestAppScreen = () => {

    //const {state, dispatch} = useContext(StoreContext);
    //const [value, onChangeText] = React.useState('');

    //const [infos, setInfos] = useState<Chat[]>([]);
    //const numRows = infos.map ((info) =><Text>{info.message}</Text>);

    var textInputRef = React.createRef<TextInput>();

    const results = useSelector(state => state.list );

const firestoreRows = results.map ((chat) => {
    <>
    <Text>message:{chat.message} \n</Text>
    <Text>date:{chat.sendTime}</Text>
    </>
});

    var textInputRef = React.createRef<TextInput>();

    const dispatch = useDispatch();

    function loadDocument() {
        const documentRef = firestore().collection('messages')
         
        //documentRef.get().then(snapshot => {
        const subscriber =  documentRef.onSnapshot(snapshot => {
            
            snapshot.forEach(documentSnapshot => {
                console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                const { message, sendTime } = documentSnapshot.data();
                console.log('loadDocument message:', message);
                console.log('loadDocument time:', sendTime);
                //const chat = Chat {message: message};
                dispatch(addChat( {message: message, sendTime: sendTime.toString()}));
                
            });
            //results.map((info) => console.log('loadDocument', info.message) );
        })
        return subscriber;
        
      }

    useEffect(() => {
       const subscriber =  loadDocument() 
        return () => subscriber();
    },[]);

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
        <Button title="Save" 
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