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
    setNav: (state, action) => {
      state.name=action.payload.pageName;
      state.show=action.payload.show;
    }
   
  },
});

export const { setNav } = navigationSlice.actions;
export default navigationSlice.reducer;
