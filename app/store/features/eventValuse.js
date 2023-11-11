"use client"
import { createSlice } from '@reduxjs/toolkit';

const eventValuse= createSlice({
  name: 'eventValuse',
  initialState: {
    shift:'1',
    carId:'1',
    eventNo:'',
    type:'تعطل مركبة',
    start:'',
    arrive:'',
    finsh:'',
    sourceId:'1',
    closedPaths:'0',
    locationDescription:'',
    note:'',
    streetId:'2',
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
