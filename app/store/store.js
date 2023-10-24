"use client"
import { configureStore } from '@reduxjs/toolkit';
import markabatReducer from './features/markabatSlice';

const store = configureStore({
    reducer: {
        markabat: markabatReducer,
    },
  });
  
  export default store;