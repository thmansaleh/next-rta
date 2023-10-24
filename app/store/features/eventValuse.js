"use client"
import { createSlice } from '@reduxjs/toolkit';

const markabat= createSlice({
  name: 'eventValuse',
  initialState: {
    shift:'',
    carId:'',
    eventNo:'',
    eventType:'',
    timeReceive:'',
    timeArrive:'',
    timeFinsh:'',
    timeFinsh:'',
    closedPaths:'',
    note:'',


  },
  reducers: {
    updateEventValuse:  (state, action) => {
      const { name, value } = action.payload;
     state.name = value;
    
    },
   
  }





});

export const {updateEventValuse } = markabat.actions;
export default eventValuse.reducer;
