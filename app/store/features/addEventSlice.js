"use client"
import { createSlice } from '@reduxjs/toolkit';

const appSlice= createSlice({
  name: 'add-event',
  initialState: {
    markabat:[
      {
        plate_no:"",
        stop:"",
        type:""
      }
    ],
    street:"",
    car_id:"",
    source:"",
    type:"",
    helper:"",
    description:"",
    event_no:"",
    
},
  reducers: {
    addMarkabat: (state, action) => {
      state.markabat.push(
     {
        plate_no:"",
        stop:"",
        type:""
      }
     )
    }
   
  }





});

export const {addMarkabat } = navigationSlice.actions;
export default navigationSlice.reducer;
