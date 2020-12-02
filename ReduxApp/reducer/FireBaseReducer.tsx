
import firestore from '@react-native-firebase/firestore';
import { createSlice } from '@reduxjs/toolkit';

   export interface Chat {
        message: String,
        sendTime: String,
    }


  const firestoreSlice = createSlice({
      name: "list",
      initialState: [],
      reducers: {
        addChat: (state: Chat[], action) => {
            state.push(action.payload)
        },
        saveChat: (state, action) => {
          saveDocument(action.payload);
          
      }
    }
    });



    function saveDocument(message: String) {
        const documentRef = firestore().collection('messages');
        documentRef.add({message: message, sendTime: '2020/11/14'})
        .then(() => {
          console.log('saveDocument added!');
          
        });
        console.log('saveDocument message:', message);
    }


    export default firestoreSlice.reducer

    export const { addChat, saveChat } = firestoreSlice.actions;

