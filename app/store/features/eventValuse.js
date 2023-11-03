"use client"
import { createSlice } from '@reduxjs/toolkit';

const eventValuse= createSlice({
  name: 'eventValuse',
  initialState: {
    shift:'',
    carId:'',
    eventNo:'',
    type:'تعطل مركبة',
    start:'22',
    arrive:'23',
    finsh:'25',
    sourceId:'1',
    closedPaths:'1',
    locationDescription:'',
    note:'',
    streetId:'',
    helper:'',


  },
  reducers: {
    updateEventValuse:  (state, action) => {
      const { name, value } = action.payload;
     state[name]= value;
    
    },
   
  }





});

export const {updateEventValuse } = eventValuse.actions;
export default eventValuse.reducer;
