
import firestore from '@react-native-firebase/firestore';
import { createSlice } from '@reduxjs/toolkit';

  var results = []//[{message: 'message', sendTime: 'sendTime'}]
  // Stateの初期状態
  const initialState = {
    chats: results
  };

  //const [infos, setInfos] = useState<Chat[]>([]);

  const firestoreSlice = createSlice({
      name: "list",
      initialState: initialState,
      reducers: {
        loadChat: (state) => {

          loadDocument()
          return Object.assign({}, state, { chats: results })
          
          
        },
        saveChat: (state, action) => {
          
          saveDocument(action.payload);
          loadDocument();
          return Object.assign({}, state, { chats: results})
      }
    }
    });

    function loadDocument() {
      const documentRef = firestore().collection('messages')
       
      //documentRef.get().then(snapshot => {
      const subscriber =  documentRef.onSnapshot(snapshot => {
          const  list = []
          snapshot.forEach(documentSnapshot => {
              console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
              const { message, sendTime } = documentSnapshot.data();
              console.log('loadDocument message:', message);
              console.log('loadDocument time:', sendTime);
              list.push( {message: message, sendTime: sendTime});
              
          });
          results = list
          results.map((info) => console.log('loadDocument', info.message) );
      })
      return () => subscriber();
      
    }

    function saveDocument(message: String) {
        const documentRef = firestore().collection('messages');
        documentRef.add({message: message, sendTime: '2020/11/14'})
        .then(() => {
          console.log('saveDocument added!');
          //return loadDocument()
        });
        //return loadDocument();
        console.log('saveDocument message:', message);
    }


    export default firestoreSlice.reducer

    export const { loadChat, saveChat } = firestoreSlice.actions;

