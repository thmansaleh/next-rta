"use client"
import { configureStore } from '@reduxjs/toolkit';
import markabatReducer from './features/markabatSlice';
import eventValuseReducer from './features/eventValuse';
import eventsAdminReducer from './features/eventsAdmin';


const store = configureStore({
    reducer: {
        markabat: markabatReducer,
        eventValuse:eventValuseReducer,
        eventsAdmin:eventsAdminReducer,
        
        
    },
  });
  
  export default store;