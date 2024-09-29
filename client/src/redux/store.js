import {configureStore} from '@reduxjs/toolkit'
// Import your reducers
import userReducer from './user/userSlice.js';

export const store = configureStore({
   // Add your reducers here
    reducer: {
        // user: userReducer,
        user: userReducer,
        // // Add your other reducers here
    }, 
     // Add your middleware here
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
       serializableCheck: false,
    }),
})