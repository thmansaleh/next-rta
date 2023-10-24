"use client"
import { createSlice } from '@reduxjs/toolkit';

const appSlice= createSlice({
  name: 'add-event',
  initialState: {
    markabat:[
      {
        plateNo:"",
        stop:"",
        type:""
      }
    ],
    
},
  reducers: {
    addMarkabat: (state, action) => {
      state.markabat.push(
     {
        plateNo:"",
        stop:"",
        type:""
      }
     )
    }
   
  }





});

export const {addMarkabat } = navigationSlice.actions;
export default navigationSlice.reducer;
