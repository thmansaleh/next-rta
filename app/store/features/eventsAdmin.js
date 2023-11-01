"use client"
import { createSlice } from '@reduxjs/toolkit';

const eventsAdmin= createSlice({
  name: 'eventsAdmin',
  initialState: [
  
  ],
  reducers: {
    addAllEvents: (state,action) => {
     state.push(...action.payload)

    },
    deleteEventFromStore: (state,action) => {
      state.splice(action.payload,1)
    //   state=state
   
    },
   
   
  }





});

export const {addAllEvents,deleteEventFromStore } = eventsAdmin.actions;
export default eventsAdmin.reducer;
