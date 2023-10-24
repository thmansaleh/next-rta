// index.js (or your application's entry point)
"use client"
import { Provider } from 'react-redux';
// import store from './store'; // Import your Redux store
import store from './store/store';



 function ProviderStore({children}) {
   return (
    <Provider store={store}>
     {children}
  </Provider>
   )
 }
 
 export default ProviderStore
 


