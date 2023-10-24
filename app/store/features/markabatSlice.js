"use client"
import { createSlice } from '@reduxjs/toolkit';

const markabat= createSlice({
  name: 'markabat',
  initialState: {
    markabat:[
      {
        plateNo:"123",
        stop:"jhgfd",
        type:"",
        source:""
      }
    ],
    
},
  reducers: {
    addMarkabat: (state) => {
      state.markabat.push(
        {
          plateNo:"",
          stop:"",
          type:"",
          source:""
        }
     )
    },
    updateMarkabat: (state, action) => {
      const { id,name, value } = action.payload;
      state.markabat[id].name = value;
      state=(state)
      // console.log(action.payload)
    },
   
  }





});

export const {addMarkabat ,updateMarkabat } = markabat.actions;
export default markabat.reducer;
