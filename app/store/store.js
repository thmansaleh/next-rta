"use client"
import { configureStore } from '@reduxjs/toolkit';
import markabatReducer from './features/markabatSlice';
import eventValuseReducer from './features/eventValuse';

const store = configureStore({
    reducer: {
        markabat: markabatReducer,
        eventValuse:eventValuseReducer
    },
  });
  
  export default store;