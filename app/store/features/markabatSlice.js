"use client"
import { createSlice } from '@reduxjs/toolkit';

const markabat= createSlice({
  name: 'markabat',
  initialState: [

  ],
  reducers: {
    addMarkabat: (state) => {
      state.push(
        {
          plateNo:"",
          stop:"",
          type:"صالون",
          source:"دبي"
        }
     )
    },
    updateMarkabat:  (state, action) => {
      const { id,name, value } = action.payload;
     state[id][name] = value;
      // state=(state)
     
        console.log(value)
 
    },
   
  }





});

export const {addMarkabat ,updateMarkabat } = markabat.actions;
export default markabat.reducer;
