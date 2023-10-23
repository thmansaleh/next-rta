"use client"
import { createSlice } from '@reduxjs/toolkit';

const appSlice= createSlice({
  name: 'app',
  initialState: {
    cars:[],
    streets:[],
    
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