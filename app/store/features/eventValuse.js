"use client"
import { createSlice } from '@reduxjs/toolkit';

const eventValuse= createSlice({
  name: 'eventValuse',
  initialState: {
    shift:'ليل',
    carId:'10',
    eventNo:'65465445',
    type:'تعطل مركبة',
    start:'22',
    arrive:'23',
    finsh:'25',
    sourceId:'1',
    closedPaths:'1',
    locationDescription:'بعد المنارة',
    note:'',
    streetId:'3',
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
