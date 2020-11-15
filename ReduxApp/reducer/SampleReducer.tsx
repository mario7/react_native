import { createSlice } from "@reduxjs/toolkit";

// Stateの初期状態
const initialState = {
  num: ''
};

// Sliceを生成する
const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      return Object.assign({}, state, { name: action.payload })
    },
    className: state =>  "" 
    
  }
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { setName, className } = slice.actions;